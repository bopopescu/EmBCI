#!/usr/bin/env python3
# coding=utf-8
#
# File: EmBCI/embci/utils/_json.py
# Authors: Hank <hankso1106@gmail.com>
# Create: 2019-07-18 00:11:19

'''Wrapping built-in JSON Python module to support more features.'''

# built-in
from __future__ import absolute_import
from __future__ import division
from __future__ import print_function
import re
import json
import zlib
import types
import marshal
import importlib
import traceback

# requirements.txt: data: numpy
# requirements.txt: necessary: dill
import dill
import numpy as np
from six import string_types

from . import logger, AttributeDict, AttributeList, CachedProperty

__all__ = [
    'MiscJsonEncoder', 'MiscJsonDecoder',
    'serialize', 'deserialize', 'minimize',
    'dumps', 'loads',
]


class JSONEncoder(json.JSONEncoder):
    '''
    This class is a dirty fix to make JSONEncoder support custom jsonifying
    of nested and inherited default types such as dict, list and tuple etc.
    By overwriting method ``json.JSONEncoder.iterencode``, it changed default
    behaviour on types inside tuple ``self.masked``.

    More at `this page <https://stackoverflow.com/questions/16405969>`_.
    '''
    masked = ()

    def __init__(self, *a, **k):
        # some default parameters
        k.setdefault('ensure_ascii', False)
        k.setdefault('sort_keys', True)
        k.setdefault('indent', 4)
        k.setdefault('separators', (',', ': '))
        encoding = k.pop('encoding', 'utf8')  # for python 2 & 3 compatiable
        super(JSONEncoder, self).__init__(*a, **k)
        self.encoding = encoding

    __init__.__doc__ = json.JSONEncoder.__init__.__doc__

    def _floatstr(self, o, _inf=float('inf')):
        if o != o:
            text = 'NaN'
        elif abs(o) is _inf:
            text = {_inf: 'Infinity', -_inf: '-Infinity'}[o]
        else:
            return repr(o)
        if not self.allow_nan:
            raise ValueError('Out of range float values are not JSON'
                             'compliant: ' + repr(o))
        return text

    def _encoder(self, o):
        if self.encoding != 'utf8' and isinstance(o, string_types):
            o = o.decode(self.encoding)
        if self.ensure_ascii:
            return json.encoder.encode_basestring_ascii(o)
        else:
            return json.encoder.encode_basestring(o)

    def _isinstance(self, o, cls):
        if isinstance(o, self.masked):
            return False
        return isinstance(o, cls)

    def iterencode(self, o, _one_shot=False):
        return json.encoder._make_iterencode(
            {} if self.check_circular else None, self.default, self._encoder,
            self.indent, self._floatstr, self.key_separator,
            self.item_separator, self.sort_keys, self.skipkeys,
            _one_shot=False, isinstance=self._isinstance)(o, 0)


class MiscJsonEncoder(JSONEncoder):
    '''
    Extend default json.JSONEncoder with many more features.

    Supported types:
    - function
        1. builtin_function_or_method *dill*
        2. instancemethod *dill*
        3. function.__code__ *marshal*
    - numpy.ndarray
    - subclass of MutableMapping and MutableSequence
    - subclass of default supported types like dict and list etc.(see notes)

    Notes
    -----
    If you want to extend this class to support more types of object,
    1 add the type into class's ``masked`` tuple
    2 overwrite ``default`` or define ``jsonify_xxx_hook``

    >>> class Test(MiscJsonEncoder):
            def __init__(self):
                self.masked += (MyClass, )
                super(Test, self).__init__()
            def default(self, o):
                if isinstance(o, MyClass):
                    return jsonify_MyClass(o)
                return super(Test, self).default(o)

    or you can define ``jsonify_xxx_hook``(object type in lower case!)

    >>> class Test(MiscJsonEncoder):
            masked = MiscJsonEncoder.masked + (MyClass, )
            def jsonify_myclass_hook(self, o):
                return jsonify_MyClass(o)

    then you can use it as normal json encoder

    >>> Test().masked
    [builtin_function_or_method,
     function,
     instancemethod,
     numpy.ndarray,
     embci.utils.AttributeDict,
     embci.utils.AttributeList,
     bytearray,
     __main__.MyClass]
    >>> Test().encode(MyClass()) ==> string
    '''
    bytearray_encoding = 'cp437'
    masked = (
        types.BuiltinFunctionType, types.FunctionType, types.MethodType,
        np.ndarray, AttributeDict, AttributeList, bytearray
    )

    def default(self, o):
        if callable(o):
            o_type = 'function'
        else:
            o_type = getattr(type(o), '__name__', 'unknown').lower()
        try:
            return getattr(self, 'jsonify_%s_hook' % o_type)(o)
        except AttributeError:
            return super(MiscJsonEncoder, self).default(o)

    def jsonify_function_hook(self, o):
        try:
            fstr = marshal.dumps(o.__code__)
            encoder = 'marshal'
        except ValueError:
            fstr = dill.dumps(o)
            encoder = 'dill'
        return {
            '__callable__': bytearray(fstr),
            '__encoder__': encoder,
            '__module__': o.__module__,
            '__class__': o.__class__.__name__,
            '__name__': o.__name__
        }

    def jsonify_attributedict_hook(self, o):
        return {'__module__': o.__module__,
                '__class__': o.__class__.__name__,
                'object': o.copy(dict)}

    def jsonify_attributelist_hook(self, o):
        return {'__module__': o.__module__,
                '__class__': o.__class__.__name__,
                'object': o.copy(list)}

    def jsonify_ndarray_hook(self, o):
        return {'__ndarray__': bytearray(o.tobytes()),
                'shape': o.shape,
                'dtype': str(o.dtype)}

    def jsonify_bytearray_hook(self, o):
        '''bytearray => bytes => bytes => str'''
        o = zlib.compress(bytes(o), 9)
        return {'__bytearray__': o.decode(self.bytearray_encoding),
                'encoding': self.bytearray_encoding}


class MiscJsonDecoder(json.JSONDecoder):
    '''
    JSON string decoder. :method:`unjsonify_xxx_hook` should handle
    all exception and always return object or None.

    See Also
    --------
    MiscJsonEncoder
    '''
    def __init__(self, *a, **k):
        #  k.setdefault('encoding', 'utf8')
        k.setdefault('object_hook', self.object_hook)
        super(MiscJsonDecoder, self).__init__(*a, **k)

    _hook_pattern = re.compile(r'unjsonify_(\w)+_hook')

    @CachedProperty
    def decode_hooks(self):
        return [hook_name for hook_name in dir(self)
                if self._hook_pattern.match(hook_name)]

    def object_hook(self, dct):
        '''
        This function will be used by method ``decode`` to convert
        dict into object. It is the last step of unjsonify.
        '''
        for hook in self.decode_hooks:
            try:
                obj = getattr(self, hook)(dct)
            except KeyError:
                continue
            except Exception:
                logger.error(traceback.format_exc())
            else:
                if obj is not None:
                    return obj
        return dct

    def unjsonify_bytearray_hook(self, dct):
        '''str => bytes => bytes => bytearray'''
        sbytes = dct['__bytearray__'].encode(dct['encoding'])
        return bytearray(zlib.decompress(sbytes))

    def unjsonify_ndarray_hook(self, dct):
        abytes = bytes(dct['__ndarray__'])
        return np.frombuffer(
            abytes, dtype=np.dtype(dct['dtype'])
        ).reshape(*dct['shape'])

    def unjsonify_instance_hook(self, dct):
        try:
            module = importlib.import_module(dct['__module__'])
            cls = getattr(module, dct['__class__'])
        except ImportError:
            logger.error(traceback.format_exc())
        except AttributeError:
            return None
        else:
            return cls(dct['object'])

    def unjsonify_callable_hook(self, dct):
        fbytes = bytes(dct['__callable__'])
        if dct['__encoder__'] == 'dill':
            try:
                return dill(fbytes)
            except Exception:
                return None
        elif dct['__encoder__'] == 'marshal':
            try:
                module = importlib.import_module(dct['__module__'])
                fcode = marshal.loads(fbytes)
            except (ImportError, ValueError):
                return None
            return types.FunctionType(fcode, module.__dict__)
        else:
            raise NotImplementedError


_default_encoder = MiscJsonEncoder()
_default_decoder = MiscJsonDecoder()


def dumps(obj, **k):
    return (k and MiscJsonEncoder(**k) or _default_encoder).encode(obj)


def loads(s, **k):
    return (k and MiscJsonDecoder(**k) or _default_decoder).decode(s)


# minimize: Jsonify object to the minimum length of string.
minimize = MiscJsonEncoder(indent=None, separators=(',', ':')).encode
dumps.__doc__ = json.dumps.__doc__
loads.__doc__ = json.loads.__doc__


def serialize(obj, method='json'):
    if method == 'dill':
        return dill.dumps(obj)
    elif method == 'json':
        return dumps(obj)
    raise ValueError('serialization method `%s` is not supported' % method)


def deserialize(string, method='json'):
    if method == 'dill':
        return dill.loads(string)
    elif method == 'json':
        return loads(string)
    raise ValueError('serialization method `%s` is not supported' % method)


# THE END
