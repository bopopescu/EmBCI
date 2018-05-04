#!/usr/bin/env python2
# -*- coding: utf-8 -*-
'''
Created on Tue Feb 27 14:36:27 2018

@author: hank
'''
# built-in
from __future__ import print_function
import os
import time
import json
import sys
sys.path += ['../utils']

# pip install numpy
import numpy as np
import matplotlib.pyplot as plt

# from ../utils
from common import time_stamp, check_input, first_use, record_animate
from IO import load_data, save_action
from signal_info import Signal_Info
from preprocessing import Processer
from visualization import Screen_GUI

# TODO: put this in __init__.py
# =============================================================================
# __all__ = ['sEMG_Recognition', 'Display_Signal_Info', 'P300', 'SSVEP',
#            'TGAM_relax', 'MotorImaginary']
# =============================================================================



def sEMG_Recognition(username, reader, model, commander):
    #==========================================================================
    # user initializition
    #==========================================================================
    if not os.path.exists('./models/' + username):
        # no this user before
        try:
            os.mkdir('./models/' + username)
            os.mkdir('./data/' + username)
        except:
            pass
        model_flag = True
    elif os.listdir('./models/' + username):
        # there is trained models
        print('found saved model:', end='')
        models = [i for i in sorted(os.listdir('./models/' + username))[::-1] \
                  if not i.endswith('.json')]
        prompt = ('choose one to use:\n    %s\n    0\trecord '
                  'action data and train a new model\nnum: ') % \
                  '\n    '.join('%d\t%s'%(n+1, m) for n,m in enumerate(models))
        answer = {str(i+1): models[i] for i in range(len(models))}
        answer.update({'0': True})
        model_flag = check_input(prompt, answer)
        models = prompt = answer = None
    else:
        # no model, then collect data and train a new one!
        model_flag = True
    
    # we must clear workspace frequently on orangepi, which only has 512MB RAM
    # variables existing:
    #     'model_flag', 'username', 'reader', 'model', 'commander'
    
    #==========================================================================
    # record data and train classifier
    #==========================================================================
    if model_flag is True:
        # no pre-saved model
        if not first_use():
            sys.exit('terminated')
        while not check_input('start record data?[Y/n] '):
            pass
        
        #===============================================
        save_action(username, reader, ['left', 'right'])
        #===============================================

        if not os.path.exists('./data/'+username):
            sys.exit('No data saved for training.')
        
        try:
            # prepare training data. n_sample x n_channel x window_size
            print('Loading data... ', end='')
            data, label, action_dict = load_data(username)
            print('done\n')
            
            print('Building model... ', end='')
            model.build(nb_classes = len(action_dict),
                        input_shape = data.shape)
            model.train(data, label)
            print('done\n')
            
            if check_input(('Now that model is well trained, saved data is of '
                            'no use.\nIf you want to add more actions to '
                            'current model next time, please keep these data.'
                            '(not recommended)\ndelete data? [Y/n] ')):
                os.system('rm ./data/%s/*.mat' % username)
                
            model_name = './models/%s/%s.h5' % (username, time_stamp())
            model.save(model_name)
            with open(model_name[:-3] + '-action-dict.json', 'w') as f:
                json.dump(action_dict, f)
            print('model save to ' + model_name)
        except Exception as e:
            print(e)
            sys.exit(0)
        finally:
            model_name = model_flag = data = label = f = None
        
        # vars:
        #     'action_dict', 'username', 'reader', 'model', 'commander'
            
    #==========================================================================
    # load saved classifier
    #==========================================================================
    else:
        model_name = './models/%s/%s' % (username, model_flag)
        print('loading %s ... ' % model_name, end='')
        model.load(model_name)
        with open(model_name[:-3] + '-action-dict.json', 'r') as f:
            action_dict = json.load(f)
        for i in list(action_dict.keys()):
            action_dict[int(i)] = action_dict[i]
            action_dict.pop(i)
        print('done')
        model_name = model_flag = f = i = None
    
    # vars:
    #     'action_dict', 'username', 'reader', 'model', 'commander'

    #==========================================================================
    # online recognizing, mainloop
    #==========================================================================
    try:
        # main thread
        while reader.isOpen():
            if not reader.streaming:
                break
            print('start recording in 2s')
            time.sleep(2)
            record_animate(reader.sample_time)
            class_num, class_prob = model.predict(reader.frame_data)
            action_name = action_dict[class_num]
            print('[Predict action name] ' + action_name, end='')
            print(class_prob)
            
            if class_prob > 0.5:
#                lock.acquire()
#                time.sleep(1.0/25.0)
                action_cmd = commander.send('text',
                                            len(action_name),
                                            action_name)
#                lock.release()
                if action_cmd is not None:
                    print('send control command %s for action %s' % (
                            action_cmd, action_name))
                    
    except KeyboardInterrupt:
        reader.close()
        commander.close()
    
    
def Matplotlib_Plot_Info(reader, commander):
    si = Signal_Info()
    p = Processer(reader.sample_rate, reader.sample_time)
    display_ch = 'channel0'
    try:
        fig, axes = plt.subplots(nrows=3, ncols=2)
        data = reader.buffer[display_ch]
        # display raw data
        axes[0, 0].plot(data, linewidth=0.5)
        axes[0, 0].set_title('Raw data')
        line_raw = axes[0, 0].lines[0]
        # display time series data after notch and remove_DC
        data = p.remove_DC(p.notch(data))
        axes[0, 1].plot(data[0])
        axes[0, 1].set_title('after notch and remove DC')
        line_wave = axes[0, 1].lines[0]
        # display amp-freq data after fft
        axes[1, 0].plot(np.log10(p.fft(data)[0]))
        axes[1, 0].set_title('channel data after FFT')
        line_fft = axes[1, 0].lines[0]
        # display PSD
        axes[1, 1].plot(np.log10(p.psd(data)[0]))
        axes[1, 1].set_title('Power Spectrum Density')
        line_psd = axes[1, 1].lines[0]
        # display 2D array after stft
        axes[2, 0].imshow(np.log10(p.stft(data)[0]))
        axes[2, 0].set_title('after STFT')
        img_stft = axes[2, 0].images[0]
        # display signal info
        axes[2, 1].text(0.5, 0.75, '4-6Hz has max energy %f at %fHz' % (0, 0),
                        size=10, ha='center', va='center', color='r')
        axes[2, 1].text(0.5, 0.25, '4-10Hz sum of energy is %f' % 0,
                        size=10, ha='center', va='center', color='r')
        axes[2, 1].set_title('signal info')
        axes[2, 1].set_axis_off()
        text_p = axes[2, 1].texts[0]
        text_s = axes[2, 1].texts[1]
        
        while 1:
            data = reader.buffer[display_ch]
            line_raw.set_ydata(data)
            data = p.remove_DC(p.notch(data))
            line_wave.set_ydata(data[0])
            line_fft.set_ydata(np.log10(p.fft(data)[0]))
            line_psd.set_ydata(np.log10(p.psd(data)[0]))
            img_stft.set_data(np.log10(p.stft(data)[0]))
#            e = si.energy(data, 4, 10, reader.sample_rate)[0]
#            max_freq, max_amp = si.peek_extract(data, 4, 6, reader.sample_rate)[0]
            text_p.set_text('4-6Hz has max energy %f at %fHz' % \
                            si.peek_extract(data, 4, 6, reader.sample_rate)[0][::-1])
            text_s.set_text('4-10Hz sum of energy is %f' % \
                            si.energy(data, 4, 10, reader.sample_rate)[0])
            plt.show()
            plt.pause(0.1)
            
    except KeyboardInterrupt:
        reader.close()
        commander.close()

def P300(username, reader, model, commander):
    raise NotImplemented
    
def SSVEP():
    raise NotImplemented
    
def TGAM_relax(username, reader, model, commander):
    raise NotImplemented
    
def MotorImaginary(username, reader, model, commander):
    raise NotImplemented