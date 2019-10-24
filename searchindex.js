Search.setIndex({docnames:["Changelog","Configurations","Copyrights","TODO","apis/index","apis/io/basic","apis/io/commanders","apis/io/index","apis/io/readers","apis/io/server","apis/utils/index","apis/viz/index","hardware/esp32","hardware/hardware","hardware/index","index","readme","readme_zh","service","update"],envversion:52,filenames:["Changelog.rst","Configurations.rst","Copyrights.rst","TODO.rst","apis/index.rst","apis/io/basic.rst","apis/io/commanders.rst","apis/io/index.rst","apis/io/readers.rst","apis/io/server.rst","apis/utils/index.rst","apis/viz/index.rst","hardware/esp32.rst","hardware/hardware.rst","hardware/index.rst","index.rst","readme.rst","readme_zh.rst","service.rst","update.rst"],objects:{"embci.io":{base:[5,0,0,"-"],commanders:[6,0,0,"-"],readers:[8,0,0,"-"]},"embci.io.base":{create_data_dict:[5,1,1,""],find_data_info:[5,1,1,""],load_data:[5,1,1,""],load_label_data:[5,1,1,""],load_mat:[5,1,1,""],save_action:[5,1,1,""],save_chunks:[5,1,1,""],save_trials:[5,1,1,""],validate_datafile:[5,1,1,""]},"embci.io.commanders":{LSLCommander:[6,2,1,""],PlaneCommander:[6,2,1,""],SerialCommander:[6,2,1,""],SocketTCPServer:[9,2,1,""],TorcsCommander:[6,2,1,""]},"embci.io.commanders.LSLCommander":{close:[6,3,1,""],cmd_dict:[6,4,1,""],flush:[6,3,1,""],get_command:[6,3,1,""],name:[6,4,1,""],read:[6,3,1,""],seek:[6,3,1,""],send:[6,3,1,""],start:[6,3,1,""],tell:[6,3,1,""],truncate:[6,3,1,""]},"embci.io.commanders.PlaneCommander":{close:[6,3,1,""],cmd_dict:[6,4,1,""],flush:[6,3,1,""],get_command:[6,3,1,""],name:[6,4,1,""],read:[6,3,1,""],seek:[6,3,1,""],send:[6,3,1,""],start:[6,3,1,""],tell:[6,3,1,""],truncate:[6,3,1,""]},"embci.io.commanders.SerialCommander":{close:[6,3,1,""],cmd_dict:[6,4,1,""],flush:[6,3,1,""],get_command:[6,3,1,""],name:[6,4,1,""],read:[6,3,1,""],reconnect:[6,3,1,""],seek:[6,3,1,""],send:[6,3,1,""],start:[6,3,1,""],tell:[6,3,1,""],truncate:[6,3,1,""]},"embci.io.commanders.SocketTCPServer":{add:[9,3,1,""],close:[9,3,1,""],daemon:[9,4,1,""],getName:[9,3,1,""],getaddr:[9,3,1,""],handle_client:[9,3,1,""],has_listeners:[9,3,1,""],hook_after:[9,3,1,""],hook_before:[9,3,1,""],ident:[9,4,1,""],isAlive:[9,3,1,""],isDaemon:[9,3,1,""],is_alive:[9,3,1,""],join:[9,3,1,""],loop:[9,3,1,""],loop_actions:[9,3,1,""],loop_after:[9,3,1,""],loop_before:[9,3,1,""],manager:[9,3,1,""],multicast:[9,3,1,""],name:[9,4,1,""],pause:[9,3,1,""],remove:[9,3,1,""],restart:[9,3,1,""],resume:[9,3,1,""],run:[9,3,1,""],send:[9,3,1,""],setDaemon:[9,3,1,""],setName:[9,3,1,""],start:[9,3,1,""],started:[9,4,1,""],status:[9,4,1,""]},"embci.io.commanders.TorcsCommander":{close:[6,3,1,""],cmd_dict:[6,4,1,""],flush:[6,3,1,""],get_command:[6,3,1,""],name:[6,4,1,""],read:[6,3,1,""],seek:[6,3,1,""],send:[6,3,1,""],start:[6,3,1,""],tell:[6,3,1,""],truncate:[6,3,1,""]},"embci.io.readers":{ADS1299SPIReader:[8,2,1,""],ESP32SPIReader:[8,2,1,""],FakeDataGenerator:[8,2,1,""],FilesReader:[8,2,1,""],LSLReader:[8,2,1,""],SerialReader:[8,2,1,""],SocketTCPReader:[8,2,1,""],SocketUDPReader:[8,2,1,""],validate_readername:[8,1,1,""]},"embci.io.readers.ADS1299SPIReader":{API:[8,4,1,""],close:[8,3,1,""],data_all:[8,4,1,""],data_channel:[8,4,1,""],data_channel_t:[8,4,1,""],data_frame:[8,4,1,""],data_frame_t:[8,4,1,""],enable_bias:[8,4,1,""],hook_after:[8,3,1,""],hook_before:[8,3,1,""],input_source:[8,4,1,""],is_streaming:[8,3,1,""],loop:[8,3,1,""],loop_actions:[8,3,1,""],loop_after:[8,3,1,""],loop_before:[8,3,1,""],measure_impedance:[8,4,1,""],name:[8,4,1,""],pause:[8,3,1,""],realtime_samplerate:[8,4,1,""],restart:[8,3,1,""],resume:[8,3,1,""],set_channel:[8,3,1,""],set_channel_num:[8,3,1,""],set_sample_rate:[8,3,1,""],start:[8,3,1,""],started:[8,4,1,""],status:[8,4,1,""]},"embci.io.readers.ESP32SPIReader":{API:[8,4,1,""],close:[8,3,1,""],data_all:[8,4,1,""],data_channel:[8,4,1,""],data_channel_t:[8,4,1,""],data_frame:[8,4,1,""],data_frame_t:[8,4,1,""],enable_bias:[8,4,1,""],hook_after:[8,3,1,""],hook_before:[8,3,1,""],input_source:[8,4,1,""],is_streaming:[8,3,1,""],loop:[8,3,1,""],loop_actions:[8,3,1,""],loop_after:[8,3,1,""],loop_before:[8,3,1,""],measure_impedance:[8,4,1,""],name:[8,4,1,""],pause:[8,3,1,""],realtime_samplerate:[8,4,1,""],restart:[8,3,1,""],resume:[8,3,1,""],set_channel:[8,3,1,""],set_channel_num:[8,3,1,""],set_sample_rate:[8,3,1,""],start:[8,3,1,""],started:[8,4,1,""],status:[8,4,1,""]},"embci.io.readers.FakeDataGenerator":{close:[8,3,1,""],data_all:[8,4,1,""],data_channel:[8,4,1,""],data_channel_t:[8,4,1,""],data_frame:[8,4,1,""],data_frame_t:[8,4,1,""],hook_after:[8,3,1,""],hook_before:[8,3,1,""],is_streaming:[8,3,1,""],loop:[8,3,1,""],loop_actions:[8,3,1,""],loop_after:[8,3,1,""],loop_before:[8,3,1,""],name:[8,4,1,""],pause:[8,3,1,""],realtime_samplerate:[8,4,1,""],restart:[8,3,1,""],resume:[8,3,1,""],set_channel:[8,3,1,""],set_channel_num:[8,3,1,""],set_sample_rate:[8,3,1,""],start:[8,3,1,""],started:[8,4,1,""],status:[8,4,1,""]},"embci.io.readers.FilesReader":{close:[8,3,1,""],data_all:[8,4,1,""],data_channel:[8,4,1,""],data_channel_t:[8,4,1,""],data_frame:[8,4,1,""],data_frame_t:[8,4,1,""],hook_after:[8,3,1,""],hook_before:[8,3,1,""],is_streaming:[8,3,1,""],loop:[8,3,1,""],loop_actions:[8,3,1,""],loop_after:[8,3,1,""],loop_before:[8,3,1,""],name:[8,4,1,""],pause:[8,3,1,""],realtime_samplerate:[8,4,1,""],restart:[8,3,1,""],resume:[8,3,1,""],set_channel:[8,3,1,""],set_channel_num:[8,3,1,""],set_sample_rate:[8,3,1,""],start:[8,3,1,""],started:[8,4,1,""],status:[8,4,1,""]},"embci.io.readers.LSLReader":{close:[8,3,1,""],data_all:[8,4,1,""],data_channel:[8,4,1,""],data_channel_t:[8,4,1,""],data_frame:[8,4,1,""],data_frame_t:[8,4,1,""],hook_after:[8,3,1,""],hook_before:[8,3,1,""],is_streaming:[8,3,1,""],loop:[8,3,1,""],loop_actions:[8,3,1,""],loop_after:[8,3,1,""],loop_before:[8,3,1,""],name:[8,4,1,""],pause:[8,3,1,""],realtime_samplerate:[8,4,1,""],restart:[8,3,1,""],resume:[8,3,1,""],set_channel:[8,3,1,""],set_channel_num:[8,3,1,""],set_sample_rate:[8,3,1,""],start:[8,3,1,""],started:[8,4,1,""],status:[8,4,1,""]},"embci.io.readers.SerialReader":{close:[8,3,1,""],data_all:[8,4,1,""],data_channel:[8,4,1,""],data_channel_t:[8,4,1,""],data_frame:[8,4,1,""],data_frame_t:[8,4,1,""],hook_after:[8,3,1,""],hook_before:[8,3,1,""],is_streaming:[8,3,1,""],loop:[8,3,1,""],loop_actions:[8,3,1,""],loop_after:[8,3,1,""],loop_before:[8,3,1,""],name:[8,4,1,""],pause:[8,3,1,""],realtime_samplerate:[8,4,1,""],restart:[8,3,1,""],resume:[8,3,1,""],set_channel:[8,3,1,""],set_channel_num:[8,3,1,""],set_sample_rate:[8,3,1,""],start:[8,3,1,""],started:[8,4,1,""],status:[8,4,1,""]},"embci.io.readers.SocketTCPReader":{close:[8,3,1,""],data_all:[8,4,1,""],data_channel:[8,4,1,""],data_channel_t:[8,4,1,""],data_frame:[8,4,1,""],data_frame_t:[8,4,1,""],hook_after:[8,3,1,""],hook_before:[8,3,1,""],is_streaming:[8,3,1,""],loop:[8,3,1,""],loop_actions:[8,3,1,""],loop_after:[8,3,1,""],loop_before:[8,3,1,""],name:[8,4,1,""],pause:[8,3,1,""],realtime_samplerate:[8,4,1,""],restart:[8,3,1,""],resume:[8,3,1,""],set_channel:[8,3,1,""],set_channel_num:[8,3,1,""],set_sample_rate:[8,3,1,""],start:[8,3,1,""],started:[8,4,1,""],status:[8,4,1,""]},"embci.io.readers.SocketUDPReader":{close:[8,3,1,""],data_all:[8,4,1,""],data_channel:[8,4,1,""],data_channel_t:[8,4,1,""],data_frame:[8,4,1,""],data_frame_t:[8,4,1,""],hook_after:[8,3,1,""],hook_before:[8,3,1,""],is_streaming:[8,3,1,""],loop:[8,3,1,""],loop_actions:[8,3,1,""],loop_after:[8,3,1,""],loop_before:[8,3,1,""],name:[8,4,1,""],pause:[8,3,1,""],realtime_samplerate:[8,4,1,""],restart:[8,3,1,""],resume:[8,3,1,""],set_channel:[8,3,1,""],set_channel_num:[8,3,1,""],set_sample_rate:[8,3,1,""],start:[8,3,1,""],started:[8,4,1,""],status:[8,4,1,""]}},objnames:{"0":["py","module","Python module"],"1":["py","function","Python function"],"2":["py","class","Python class"],"3":["py","method","Python method"],"4":["py","attribute","Python attribute"]},objtypes:{"0":"py:module","1":"py:function","2":"py:class","3":"py:method","4":"py:attribute"},terms:{"0x1":12,"0x13":12,"0x7f3e82d8c3b0":6,"0xdeadbeef":9,"11bgn":12,"16k":12,"1x8":9,"250hz":5,"32_bit":9,"40mm":16,"4sec":5,"500hz":5,"8_bit":9,"8_ch":9,"8ch":5,"\u4e2d\u6587":[15,16,17],"\u4e86\u89e3\u66f4\u591a\u8be6\u7ec6\u4fe1\u606f":17,"\u4ecd\u5904\u5728\u5f00\u53d1\u8fc7\u7a0b\u4e2d":17,"\u53ef\u914d\u7f6e\u9879":17,"\u5427":17,"\u5b8c\u6574\u6587\u6863":17,"\u5c06\u7b80\u8981\u4ecb\u7ecd":17,"\u5f00\u6e90\u8bb8\u53ef":17,"\u5f15\u5bfc\u7528\u6237\u5b58\u50a8\u4e00\u6bb5\u6570\u636e\u5e76\u7ed9\u6570\u636e\u6253\u4e0a\u6807\u7b7e":[],"\u6280\u672f\u6587\u6863":17,"\u670d\u52a1\u63a5\u53e3":17,"\u672c":17,"\u7684\u7ec4\u4ef6\u548c\u529f\u80fd":17,"\u76f8\u5173\u94fe\u63a5":17,"\u786c\u4ef6\u652f\u6301":17,"\u8bf7\u4f7f\u7528":17,"\u8bf7\u9605\u8bfb":17,"\u8f6f\u4ef6\u652f\u6301":17,"\u9700\u8981username\u548creader\u6570\u636e\u6d41\u5bf9\u8c61":[],"\u975e\u5e38\u6b22\u8fce\u4efb\u4f55\u5f62\u5f0f\u7684\u8d21\u732e":17,"\u9879\u76ee\u7ed3\u6784":17,"boolean":[6,9],"byte":9,"case":[3,16,18],"char":5,"class":[6,8,9],"default":[5,6,9,12],"export":0,"float":[0,6,9],"function":[0,6,8,9,16],"import":[0,9,13,16],"int":5,"new":[0,6,9,12],"return":[5,6,9],"short":12,"static":0,"true":[0,5,6,8,9,12],"try":8,"while":[],Added:[],And:16,DBS:0,For:[8,16,19],Its:[6,9],OLED:13,The:[0,6,8,9,18,19],Then:[12,16,19],There:[5,8],Use:[0,12],Will:0,__basedir__:0,__dir__:0,__doc__:0,__future__:0,_desc:6,_event:0,aarch64:16,abbrevi:16,abort:9,about:[0,12],absolut:0,absolute_import:0,acceler:3,access:[0,3,12,16,19],acquisit:16,across:8,act:3,action:[5,12],action_list:5,activ:[6,9,13],adc:[13,16],add:[0,6,9,12,19],addr:[6,9],address:[9,19],ads1299:[8,12,13,14,16],ads1299_api:8,ads1299read:8,ads1299spiread:8,after:[6,8,9],agcl:13,air:0,algorithm:[0,16],alia:8,aliv:[0,6,9],all:[0,5,6,9,12],alloi:13,allow:0,alphabet:18,also:[6,9,12,16,19],alwai:[6,9],amount:[],amplifi:[3,14],ani:[6,8,9,12,16],anoth:[6,9],ap6212:0,api:[0,15],app1:0,app2:0,app:[0,16],appdata:16,append:[0,5],appl:5,appli:18,applic:[0,16,18],apr:12,apt:12,arch:0,arduino:[12,13],arg:[6,8,9],argument:[0,5,6,9],arm:[8,12,16],arrai:5,arrang:[6,9],assum:19,atmega328p:[13,16],attempt:[6,9],attribut:[0,6,8,9],attributedict:0,auth:[0,3],authent:3,automat:[0,3,16],autorun:16,autostart:[12,16,19],avaiabl:0,avail:[6,8,9],avoid:[0,13],avr:16,awesom:[0,16],axi:3,back:3,bad:3,banana:15,bar:0,base:[0,5,16],basedir:[],baselin:16,baseread:5,baseserv:0,bash:19,basic:[0,4,7,16],batteri:0,baudrat:[3,6,8],bci:16,bcilab:16,becaus:8,been:[6,9,16],befor:[3,6,8,9,13],begin:[16,18],benefit:13,best:13,better:[3,13],between:13,bia:[0,8,12],bin:[12,18],binari:[0,12],bio:16,biopotenti:16,biosign:[13,16],bison:12,bit:16,ble:12,blink:12,block:[6,8,9],bluetooth:16,board:[12,14,16],bool:5,boot:[12,16],boot_app0:12,bootload:12,bootstrap:0,both:16,bottom:[0,3],box:0,brain:[15,16],brake:6,branch:19,brief:13,broadcast:[6,9,13],browser:0,buaawyz:16,buffer:[8,9,13,16],bug:[0,8,15],bugfix:19,build:[12,16],burn:16,busi:0,button:[0,3],cabl:3,cach:[0,13,19],calcul:13,call:[0,6,8,9],callabl:[6,9],callback:[6,9],can:[0,5,6,8,9,12,13,16,19],cannot:8,car:6,card:[0,3],caus:[6,9],cell:13,chang:[0,9,12],changelog:15,channel:[0,9,12,16],charact:0,check:[0,16,19],checknam:[],chip:[3,12,16],chs:9,chunk:[5,13],circuit:13,circuitri:13,classif:16,classifi:6,clear:12,cli:0,click:0,client:[0,6,8,9,16],clipboard:0,clk13:12,clk14:12,clk:13,clock:13,clone:[12,16,19],close:[6,8,9],cmd:6,cmd_dict:6,coat:13,code:[0,6,8,9,12,15,16],collect:13,color:0,com:[12,15,16,19],come:16,command:[0,4,5,7,9,16],command_dict:[],comment:16,common:[8,19],commun:[0,13],compani:0,compar:13,compati:[0,16],compil:[0,12],compon:[3,12],compos:[0,16],comput:[15,16,19],con:[6,9],conduct:13,conf:[0,16],config:[0,8,12,16,19],configur:[0,15],connect:[3,6,8,9,14,16],consol:0,construct:[0,13],constructor:[6,9],consumpt:0,contain:[0,6],contin:8,contribut:16,control:[0,6,9,13,16],copi:[0,12],copyright:15,cor:0,core:[12,16],corner:3,correct:16,correctli:19,correspond:[5,18],count:5,cpp:12,creat:[0,5,6,9,12,13],create_data_dict:5,create_info:5,cs13:12,cs15:12,cs23:12,csv:[5,8],ctrl:12,current:[5,6,9,12,16,19],cut:[],cycl:13,cython:0,daemon:[6,9],danger:[0,8],data:[0,5,6,7,12,13,16],data_al:8,data_arrai:5,data_channel:8,data_channel_t:8,data_dict:5,data_fram:8,data_frame_t:8,data_list:5,datadir:[],datafil:0,datasheet:14,datasourc:0,deadlock:[6,9],debian:12,debug:0,decid:[6,9],decor:[0,16],decreas:[],deep:12,defin:[],denois:16,depend:8,deprec:[13,16],depth:[16,19],describ:[6,12],descript:16,design:[13,16],detail:[0,16,19],detect:0,dev:12,develop:[8,15,19],devic:[0,6,8,13,16,19],dick:3,dict:[0,5,6],differ:8,dir_bas:16,dir_data:5,dir_xxx:0,direct:[],directli:[8,19],directori:[0,5,18],disabl:18,disconnect:6,displai:0,displayspi:0,displayweb:0,distribut:0,div:0,divis:0,doc:[0,3,15,16],document:[0,15,19],doe:[6,9],doubl:0,down:6,drdy:12,driver:[0,8],dual:16,dynam:0,e01xxx:18,each:[0,5,6,8,9,18,19],eagl:16,easili:[13,16],easist:19,ecg:16,echo:[3,12],edg:3,edit:[16,19],eeg:16,eeglab:16,either:[6,9],electrod:14,element:5,eletrod:13,elf:12,embci:[0,3,5,6,7,8,12,19],embci_host:0,embci_path:12,embci_tool:0,embed:[15,16],embedded_onli:0,emg:16,empti:6,enabl:[0,8,18],enable_bia:8,english:[16,17],enough:16,ensure_dir_exist:0,entir:[6,9],entranc:0,enumer:[6,9],env:18,environ:[12,16],equal:[5,8],error:[6,8,9],esp32:[0,3,8,13,14,16,19],esp32_api:8,esp32_sandbox:12,esp32read:8,esp32spiread:[0,8],esp:[12,14],espressif:[12,16],esptool:12,essenti:18,establish:19,etc:[6,8,16],even:[6,8,9],event:0,eventio:0,exampl:[6,7,8,9,12,13,16,19],except:[6,9],exclud:0,execut:[6,8,9,18],exist:0,exit:[6,9],extend:16,extens:16,extent:16,extern:12,fairli:[],fakedatagener:8,fals:[0,5,6,8,9,12],fast:16,fdgen:8,featur:[0,12,13],fetch:[8,9,13],field:0,fif:[5,8],fifo:[4,7,12],file:[0,5,8,12],filenam:[0,8,18],filename_dict:5,filesread:8,filter:0,find:8,find_data_info:5,find_wifi_hotspot:0,finish:0,firmwar:[14,16],first:16,fix:0,flash:14,flex:12,float32:9,floor:0,flush:6,folder:[12,16],follow:[6,9,12,16],foltynski:13,font:0,foo:0,format:[0,5,9,16],fraction:[6,9],frame:0,framework:16,freedesktop:0,frequenc:[0,16],frequent:19,fresh:8,from:[0,6,7,8,12,13,19],ftp:19,full:16,fulli:16,func:[0,6,8,9],g129d327:12,g6c4433a:12,gain:[0,13],game:6,gaohanlin:[],gcc:[0,12],gel:13,gener:[6,8,12],gestur:16,get:[0,7,12,15],get_command:6,get_free_port:0,get_id:[6,9],getaddr:[6,9],getnam:[6,9],geventwebsocketserv:0,git:[0,3,12,16,19],gitbook:15,github:[12,15,16,19],gitlab:[15,19],given:[6,9,12],glyphicon:0,gold:13,good:3,gperf:12,gpio:[12,16],grab:5,greatli:13,guard:13,guid:16,guidanc:5,gym_torc:16,hair:13,handle_cli:[6,9],hankso:[15,16,19],hansmann:13,happen:[6,9],happi:[],hardwar:[0,6,8,15],has:[6,9,16],has_listen:[6,9],have:[13,16,19],hdf5:5,header:[0,12],height:0,held:[],help:12,here:[8,9,16,19],hide:0,high:16,higher:3,histori:[0,13],hook:[6,8,9],hook_aft:[0,6,8,9],hook_befor:[0,6,8,9],host:[6,8,9,19],hotpot:[],hotspot:[13,16],how:19,hspi:12,html:0,http:[0,12,15,16,19],i2c:3,ian:13,idea:13,ident:[6,9],identif:[6,9],identifi:[6,9],idf:[12,14],idf_path:12,ignor:[16,18],iir:0,ili9325:13,imageri:3,imfirewal:19,immegr:0,immigr:0,imped:[0,8,12],implement:[0,6,8,9,13,16],improv:13,inbuit:13,includ:[12,16],increas:[],index:[4,7,8,12,14,15],indic:[5,6,9],individu:0,info:[0,12],inform:[12,16],informat:0,inherit:[6,9],ini:16,init:12,initi:[6,9,13],inlet:8,ino:12,input:[4,7,9,16],input_sourc:[8,12],insid:[5,6,8,9],instal:[12,19],instanc:[0,5,6,8],instead:[0,13],instrument:16,integ:[6,9],integr:[0,16],interest:16,interfac:[0,5,8,13,15],interrupt:0,introduc:13,invok:[6,9],is_al:[6,9],is_stream:8,isal:[6,9],isdaemon:[6,9],issu:15,iter:[6,8,9],its:12,jarek:13,javascript:0,jim:13,joe:13,joerg:13,join:[6,9],jqueri:0,json:0,jsonrpc:0,just:[6,9],keep:8,kei:6,keyboard:16,keyword:[0,6,9],killal:19,known:8,kwarg:[6,8,9],lab:[8,13],label:5,label_dict:5,label_list:5,labrecord:0,lan:9,languag:3,laptop:[],larg:[],last:[],layer:[8,13],layout:[0,3],lcd:13,least:8,left:[3,5,6,9],len:5,length:5,less:12,let:[8,15],level:[0,12],lib:[3,12,19],libdbs_:0,libncurs:12,librari:[0,16],light:12,like:[0,3,5,6,8,13],line:[0,5,16],link:[0,13],linux64:12,linux:[15,17,19],linux_aarch64:15,linux_i386:15,linux_x86_64:15,list:[0,5,6,9,12],listen:[9,19],load:[0,5,8,16],load_data:5,load_label_data:5,load_mat:5,loader:0,local:[8,13,19],localhost:8,locat:19,log:0,logger:0,login:[13,19],loop:[6,8,9,12],loop_act:[6,8,9],loop_aft:[6,8,9],loop_befor:[6,8,9],loopli:0,looptask:[6,8,9],lot:[0,16],low:16,lsl:[0,8],lslcommand:6,lslreader:8,mac:6,machin:13,maco:19,macosx:15,made:[6,9],mai:[6,8,9,13,16],main:[6,9,12,16,19],maintain:0,make:[0,9,12,13,19],makefil:12,manag:[0,3,6,9,16],mani:[6,9,13,16],manual:16,mark:18,master:[16,19],mat:[5,8],match:[5,9],matlab:[5,7],matplotlib:16,max_buflen:8,maximum:[],mean:18,measur:[8,12,16],measure_imped:8,menu:12,menuconfig:12,messag:12,metal:13,method:[0,6,8,9,12],mi12:12,mi14:12,mi16:12,mind:[0,8,16],minim:0,miniterm:12,misc:[4,7],miscellan:16,miso:13,mit:16,mixin:[6,8,9],mkdir:12,mne:5,mo13:12,mo15:12,mo16:12,mode:[0,12,19],model:[12,16],modifi:13,modul:[0,4,6,7,9,14,15],monitor:14,more:[0,6,9,12,16],mosi:13,most:[6,9,19],motor:3,motorimageri:[],move:[0,3],movement:16,msg:[6,9],much:[],multi:0,multicast:[6,9],multipl:[0,6,9,13,16],multiprocess:8,must:[6,9,18],mute:12,mvdd:12,myprojectnam:12,n_sampl:5,name:[0,5,6,8,9,12,18],namespac:0,nano:13,navbar:0,ndarrai:5,necessari:0,need:[6,8,9,12,13],needl:13,network:[8,13,16,19],networkmanag:0,next:[0,13,19],noexist:0,nois:16,nomin:[],non:[6,9],none:[5,6,8,9],nonzero:[6,9],normal:[6,9,12],noth:3,now:0,ntleft:[],num:[5,12],num_channel:[5,8,9],num_trial:5,number:[0,6,9],numj:0,obfusc:0,object:[6,9],occur:[6,9],off:12,ohm:8,onboard:8,onc:[6,9],one:[0,8,12,16],onli:[6,8,9,16],onlin:6,open:[6,8,16],openbci:16,openvib:16,oper:[6,9],optim:[0,16],option:[6,9,18],orang:[9,15,16],orangepi:[9,12,13,16,19],order:0,org:15,origin:0,ortega:13,ota:0,ota_data_initi:12,other:[0,8,12,16,18],otherwis:[6,9],our:12,out:[5,6,9,13,14,16],outlet:[0,6],output:[0,4,6,7,8,12,16],outsid:[6,8,9],overrid:[6,9],overridden:[6,8,9],overwrit:5,own:16,p300:[],pa00:[12,13],pa01:[12,13],pa02:16,pa07:12,pa13:[12,13],pa14:[12,13],pa15:[12,13],pa16:[12,13],pa18:12,pa19:12,packag:[0,9,16],page:[3,4,7,12,14,15],paramet:[5,6],parkinson:[],pass:[6,9,13],passiv:13,password:[],past:13,path:[0,5,12,16,19],pattern:5,paus:[0,6,8,9],pcb:[3,16],pd11:[12,16],pdf:0,pedro:13,per:[6,9],perform:0,peter:13,pg06:12,pg07:12,phone:[],pick:[0,5,8],pidfil:0,pin:[8,13,14,16],pin_esp32_drdi:16,pin_ili9341_dc:16,pinout:14,pip:[16,19],plane:6,planecli:16,planecommand:6,pleas:9,plu:[12,16],point:[6,9],port:[0,6,8,9,12],portabl:3,post:0,power:[0,3,13,16],poweron_reset:12,pre:[0,12],precis:[13,16],predict:6,prepar:13,preprocess:13,present:[6,9],press:12,prevent:0,print:[5,12],print_funct:0,prioriti:16,privat:[],prob:6,procedur:0,process:[0,8,16],processor:16,profil:12,program:[6,9,19],project:[0,12,15,16],properli:[0,16],protoc:0,prototyp:[13,16],provid:[0,9,16,19],proxi:19,pull:[0,19],purpos:[6,9],put:13,pwd:12,py3:0,pylsl:6,pylslcommand:[],pylslread:0,pypi:15,pytestrunn:0,python:[0,6,9,12,15,16,18],qualiti:13,queue:12,quick:16,quickli:16,quiet:[],quit:[9,12],r199:12,race:6,rais:[6,8,9],ram:8,rand:5,random:[0,5,8],random_data:5,randomli:8,raspberri:15,raspberrypi:16,rate:[5,8,9,12],raw:[5,8,13],rawarrai:5,read:[6,8,9],reader:[0,4,5,7,16],readernam:8,readm:[3,16,17],readthedoc:15,real:[],realtim:0,realtime_sampler:8,reboot:[0,19],receiv:[0,8],reciev:[6,8,9],recognit:[0,3,6,16],reconnect:6,record:[0,5],recov:0,recoveri:[],recurs:12,recv:8,recycl:[6,9],redirect:12,reduc:0,refer:15,refin:13,refresh:0,regex:5,regist:[0,8,12],registr:0,relax:5,releas:[16,19],reload:18,rememb:[12,19],remot:0,remov:[0,6,9,19],renam:[0,18],render:0,repers:5,repo:[],report:0,repositori:19,repres:[6,8,9],request:0,requir:[0,13],rescan:0,reset:19,resolv:0,resolve_bypr:6,resourc:13,respect:[6,9],respons:0,restart:[6,8,9,19],result:[0,6,16],resum:[0,6,8,9],rev:[9,12,16],revis:12,rich:13,rid:16,right:[5,6,13],root:19,round:13,rout:0,router:[],rpc:0,rst:12,rto:12,run:[6,8,9,12,16,19],runner:0,runtim:0,runtimeerror:[6,9],same:[0,6,9,13,16,19],sampl:[5,9,12],sample_r:[5,8,9,12],sample_tim:[8,9],sampler:0,save:[0,5,16],save_act:5,save_chunk:[0,5],save_data:[],save_tri:[0,5],scalp:13,screen:[12,13],script:[12,16,18],scroll:0,sdk:[],search:[0,4,7,14,15,16],sec:9,second:[0,6,9],sed:12,see:[0,6,9,16,19],seek:6,select:0,self:[6,8,9],semant:[6,9],semg:[3,16],send:[0,6,9,13],send_message_stream:0,send_to_pylsl:[],sender:[],senset:18,separ:[6,9],seper:[],sequenti:[6,9],serial:[3,6,8,13,14,16],serialcommand:6,serialread:8,serv:0,server:[3,4,6,7,8,9,13,19],servic:15,session:6,set:[0,5,6,9,12],set_channel:8,set_channel_num:8,set_input_sourc:[],set_sample_r:8,setdaemon:[6,9],setnam:[6,9],setup:[0,12,16,19],sex:3,shape:5,share:16,shebang:18,shell:0,shield:[3,9,12,14,16],should:[6,8,9],shutdown:0,sign:3,signal:[8,13,16],silver:13,simpl:[0,12],simpli:[12,16],simplifi:13,simul:[6,8],sinc:[16,19],singl:[0,9],size:[],skin:13,skipiter:[6,8,9],slave:13,sleep:[0,12],small:16,snippet:0,sock:[6,9],socket:[6,8,9],sockettcpread:[8,9],sockettcpserv:[6,9],socketudpread:[8,9],softwar:[],solidwork:16,some:[8,16],soon:0,sourc:[0,5,6,8,9,12,15],special:[13,18],specif:8,specifi:[6,9,12],speller:[0,16],spi1:12,spi:[8,12,13],spi_fast_flash_boot:12,spidev:16,spiscreen:16,squid:19,squidman:19,src:12,ssd1306:13,ssh:19,ssvep:[0,16],sta:0,stabl:[16,19],stack:0,standalon:0,standard:[6,9],start:[6,8,9,12,15,18],state:12,statu:[6,8,9,12],still:[6,9,16],stimulu:16,stl:16,stop:18,str:[5,6],stream:[0,5,6,8,9,13,16],streaminfo:6,streaminlet:[],streamoutlet:6,street:13,string:[5,6,9],style:[5,16],sub:0,subapp:0,subclass:[6,8,9],subject:13,submodul:12,sudo:[12,16],suffix:5,suggest:[5,8],suitabl:8,summari:[0,5,12],suppli:[],support:[0,5,6,12,19],suppos:13,sure:[9,13,19],sync:19,syntax:8,sysgpio:16,system:[0,3,16],t10:12,t198:12,take:8,taken:[6,9],tar:12,target:[6,9],task:[0,6,8,9,12],tcp:[4,6,7,8,9,13],tcpclient:9,tell:6,temperatur:12,templat:0,tensilica:16,termin:[0,6,9],test:[0,5,12,16],texa:16,text:5,than:[3,6,9],thei:[],them:[6,9,16],therefor:[6,9],thereof:[6,9],thi:[0,3,5,6,8,9,12,13,15,16,18,19],thing:[6,9,13],those:16,thread:[6,8,9],throttl:6,through:[3,6,8,9,13],thumb_cross:5,tick:12,time:[6,8,9,12,16,19],time_channel:8,timeout:[6,9],tin:13,tleft:6,todo:[0,15,16,17],toggl:0,tool:[0,12,16],toolchain:12,torc:6,torcscommand:[6,16],tracker:15,transfer:16,treatment:[],trial:5,trigger:12,truncat:6,ttys1:12,ttys2:12,ttyusb0:12,tupl:5,turn:[0,6,12],two:[9,13,16],txt:[0,16],type:[0,5,6,9,12,16],typecast:9,uart0:12,uart1:12,uart2:12,uart2_rx:13,uart2_tx:13,uart:8,udp:[4,7,8],ultrasurf:19,under:[5,8,16],underli:8,unhandl:[6,9],uniqu:6,uniti:13,uno:13,unpack:9,unset:19,until:[6,9],updat:[0,3,12,15],upgrad:0,upper:3,usag:[0,14],usb:[3,16],use:[0,8,9,12,16,19],used:[6,8,9,13,16,19],useful:16,user:[0,5,16,19],userinfo:0,usernam:[0,5],userprofil:16,using:[12,13],usr:[16,19],usual:[],util:[0,5,16],valid:0,validate_datafil:5,validate_filenam:0,validate_readernam:8,valu:[6,8,9],variou:8,vector:9,verbos:12,veri:3,version:[12,13,16],vincent:13,visit:0,visual:16,viz:16,volt:8,wai:[13,19],wait:[6,9],wakeup:12,want:[0,16],war:6,warn:6,wearabl:16,web:[0,16,19],websocket:3,webui:[0,16],webui_host:16,webui_port:16,webui_static_host:0,well:0,wget:12,when:[0,3,6,9,16,18],where:8,whether:[5,6,8,9],which:[0,13],who:[16,18],whole:0,whose:[5,6,9],width:0,wifi:[0,3,12,16],window:[15,16,19],window_s:[5,8],wireless:0,within:16,without:13,work:[0,13,16],would:[6,9],write:12,written:16,wroom:12,x100:[],xtensa:[12,16],xvzf:12,xxx:[0,12],xxx_api:0,xxxdir:0,xxxx:12,yet:[],you:[0,6,9,12,13,16,19],your:[0,9,13,16,19],zero:[12,16]},titles:["Changelog","Configurations","Copyrights","TODOs","EmBCI Python API","Basic I/O functions","Commanders","I/O API Reference","FIFO Data Readers","Network IO","&lt;no title&gt;","&lt;no title&gt;","ESP32 Reference","EmBCI Shield","EmBCI Hardware Reference","Welcome to EmBCI\u2019s User Guide","Get Started","\u5feb\u901f\u5f00\u59cb","EmBCI Linux Service","Updating Guide"],titleterms:{"\u5feb\u901f\u5f00\u59cb":17,"\u662f\u4ec0\u4e48":17,"\u6b22\u8fce\u6765\u5230":17,"\u76ee\u5f55":17,"function":5,Added:12,Useful:16,about:[],algorithum:[],amplifi:13,api:[4,5,6,7,8,9],app:3,applic:3,basic:5,board:13,car:16,changelog:0,choos:[],command:[6,12],configur:[1,16],connect:[12,13],consol:12,content:16,copyright:2,data:[8,9],deprec:12,design:3,develop:16,doc:[],document:[3,16],electrod:13,embci:[4,9,13,14,15,16,17,18],esp32:12,exampl:5,extra:16,featur:16,fifo:8,file:16,firmwar:[12,19],flash:12,from:[9,16],game:16,get:[9,16],guid:[15,19],gym:16,hardwar:[3,14,16,19],instal:16,interfac:[12,16],licens:16,like:12,link:16,linux:[16,18],matlab:9,mode:16,monitor:12,network:9,number:12,opi0:12,out:12,outlin:16,packag:19,pin:12,pinout:13,plane:16,platform:[15,16],prepar:19,pypi:16,python:[4,19],reader:[8,9],refer:[7,12,14],requir:16,rule:18,serial:12,servic:[16,18],shield:13,should:[],softwar:16,sourc:16,specif:16,start:16,step:19,support:[15,16],task:18,todo:3,torc:16,uart:[],updat:19,usag:[12,18],user:15,war:16,welcom:[15,16],what:16,why:[],write:[],you:[]}})