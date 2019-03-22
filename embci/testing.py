#!/usr/bin/env python
# coding=utf-8
#
# File: EmBCI/embci/testing.py
# Author: Hankso
# Webpage: https://github.com/hankso
# Time: Sat 16 Mar 2019 16:03:14 CST

'''__doc__'''

# built-in
import re
import os
import sys
import glob
import importlib
import traceback

from .configs import TESTDIR, SRCDIR
from .utils import strtypes


def test(modname=None):
    return PytestRunner(modname)() == 0


def list_tests():
    raise


class PytestRunner(object):
    '''
    Load and run tests with ``pytest``. It can:
    - test all tests of specific package ('tests/pkg_name/test_*.py')
    - test all tests of specific module ('tests/test_modname.py')
    - test all tests under TESTDIR ('tests/*')

    Parameters
    ----------
    mod_or_dir : str or list of str, optional
        Module names or path of tests directory or test files.
        If not provided(defualt), run all tests under `embci.configs.TESTDIR`.

    Examples
    --------
    >>> test = PytestRunner('embci.utils')
    >>> print(test)
    Test path:
            /home/hank/Git/EmBCI/tests/utils/test_ili9341_api.py
            /home/hank/Git/EmBCI/tests/utils/test_utils.py
            /home/hank/Git/EmBCI/tests/utils/test_ads1299_api.py
    Module path:
            /home/hank/Git/EmBCI/embci/utils
    >>> test()
    pytest result of tests...
    '''
    def __init__(self, mod_or_dir=None):
        if not mod_or_dir:
            self.testpath = [TESTDIR]
            self.modpath = [SRCDIR]
            return
        if isinstance(mod_or_dir, strtypes):
            names = [mod_or_dir]
        elif isinstance(mod_or_dir, (tuple, list)):
            names = list(mod_or_dir)
        else:
            try:
                names = [mod_or_dir.__name__]
            except AttributeError:
                raise TypeError('Invalid name type: `{0.__class__.__name__}`'
                                .format(mod_or_dir))
        self.testpath = []
        self.modpath = []
        for name in names:
            testfiles = self.get_testfiles(name)
            if not testfiles:
                continue
            self.testpath.extend(testfiles)
            modpath = self.get_modpath(name)
            if modpath:
                self.modpath.append(modpath)
        self.testpath = list(set(self.testpath))
        self.modpath = list(set(self.modpath))

    def __repr__(self):
        msg = 'Test path:'
        if self.testpath:
            msg += '\n'
            for path in self.testpath:
                msg += '\t%s\n' % path
        else:
            msg += '\t none\n'
        msg += 'Module path:'
        if self.modpath:
            msg += '\n'
            for path in self.modpath:
                msg += '\t%s\n' % path
        else:
            msg += '\t none\n'
        return msg

    def get_testfiles(self, mod_or_dir):
        if os.path.exists(mod_or_dir):  # path name
            path = os.path.abspath(mod_or_dir)
        else:                           # module name
            modname = mod_or_dir.replace('embci.', '').replace('.', '/')
            modname = re.sub(r'^test(_?)', '', modname)
            if not modname:
                return []
            path = os.path.join(TESTDIR, modname)
        if os.path.isdir(path):
            return glob.glob(os.path.join(path, 'test_*.py'))
        elif os.path.isfile(path):
            return [path]
        else:
            d, f = os.path.split(path)
            return glob.glob(os.path.join(d, 'test_%s.py' % f))

    def get_modpath(self, mod_or_dir):
        if os.path.exists(mod_or_dir):
            return ''
        modname = mod_or_dir
        if modname in sys.modules:
            mod = sys.modules[modname]
        else:
            if not modname.startswith('embci'):
                modname = 'embci.' + modname
            try:
                mod = importlib.import_module(modname)
            except ImportError:
                return ''
        try:
            modpath = getattr(mod, '__path__', mod.__dir__)
        except AttributeError:
            return os.path.abspath(os.path.dirname(mod.__file__))
        else:
            if isinstance(modpath, list):
                modpath = modpath[0]
            return os.path.abspath(modpath)

    def __call__(self, verbose=0, extras=None, coverage=False, doctest=False):
        try:
            import pytest
        except ImportError:
            raise RuntimeError('`pytest` is not installed yet.')

        if not self.testpath:
            print('No tests found.')
            return 0

        args = ['-l']
        if verbose:
            args += ['-' + 'v' * verbose]
        if coverage:
            args += ['--cov=' + _ for _ in self.modpath]
        if extras is not None:
            args += list(extras)
        args += ['--pyargs'] + self.testpath

        try:
            return pytest.main(args)
        except SystemExit as e:
            return e.code
        except Exception:
            traceback.print_exc()
        return 0
