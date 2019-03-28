# Pin-out
On-shield ESP32-WROOM-32 chip's connection with OrangePi Zero Plus(2) listed as follows.

| ESP32 | OPiZ+2 |
| -  | -  |
| EN(GPIO3) | GPIO19 |
| BOOT(GPIO25) | GPIO18 |
| DRDY(GPIO4) | GPIO7 |
| UART0(GPIO35, 34) | UART1(GPIO199, 198) |
| UART1(GPIO10, 9) | UART2(GPIO1, 2) |
| HSPI(GPIO23, 13, 14, 16) | SPI0(GPIO13, 14, 15, 16) |

# Usage
## Firmware
- Either use pre-compiled binary file in folder `./firmware`
    - boot_app0.bin
    - bootloader.bin
    - default.bin
    - ESP32_Sandbox.ino.bin

- Or you can compile with [`ESP-IDF`](https://github.com/espressif/esp-idf) and [`arduino-esp32`](https://github.com/espressif/arduino-esp32)
    - Setup `ESP-IDF` as described in its repo page
    - Setup `arduino-esp32` as one of `ESP-IDF` components
    ```bash
    # Create a new project folder
    cd ${ESPIDF_PATH}/examples
    cp -r get-started/blink esp32-embci && cd esp32-embci
    sed -i 's/blink/ESP32_Sandbox.ino/' Makefile
    # setup arduino-esp32
    mkdir -p components && cd components && \
    git clone https://github.com/espressif/arduino-esp32.git arduino && \
    cd arduino && git submodule update --init --recursive && cd ../..
    # add access to source file
    rm main/*
    ln -s ${EMBCI_PATH}/files/esp32/src/* main/
    ln -s ${EMBCI_PATH}/files/esp32/firmware
    # now compile firmware
    # remember to tick on "Autostart Arduino setup and loop on boot"
    make menuconfig && make
    # copy generated binary files into folder `firmware`
    cd build
    cp ota_data_initial.bin ../firmware/boot_app0.bin
    cp bootloader/bootloader.bin ESP32_Sandbox.ino.bin default.bin ../firmware/
    ```

## Flash
Run `burning.sh` script to flash firmware binary files into on-shield ESP32. Use `sudo` if needed.


## Monitor
```bash
miniterm.py /dev/ttyS1 115200
# or
screen /dev/ttyS1 115200
```
or any other serial monitor.

## Serial Interface
Example output of serial.
```
ESP32 Firmware XXXX.XX-EmBCI
Board:  OrangePi Zero Plus [2]
Shield: EmBCI Rev.XX XXX XX XXXX
Booting...
...
Press `h` for help message
...
Supported commands:
    h - print this Help message
    c - Clear spi fifo queue
    d - change esp output Data source
    m - be less verbose (Mute)
    s - print Summary of current status
    v - be more Verbose
    w - turn on/off serial-to-Wifi redirection
```