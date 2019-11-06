# node-atETP
Node.js Integration for Advantech IIoT electronic typeplate function.

Notice that an Advantech IIoT Platform SDK have to be installed to make this node works correctly.
Advantech IIoT Platform SDK download link is shown below:
Windows:
  https://github.com/Advantech-IIoT/Platform-SDK/tree/master/windows/bin
Linux:
  https://github.com/Advantech-IIoT/Platform-SDK/tree/master/linux/bin

## Installation
Use npm command to install this package locally in the Node-RED modules directory
``` bash
npm install node-atetp
```
or install it globally with the command
```bash
npm install node-atetp -g
```

## Usage
ETP node provide four functions in this package.
 - Read ETP data
 - Write ETP data
 - Check lock Status
 - Toggle lock status

### Example
Please refer to [`demo.js`](./demo.js).

All these examples are started with:
```js
var ETP = require('node-atETP');
```

#### Read all ETP data
Print all ETP data.
```js
console.log(ETP.ETPDataRead());
```
#### Write ETP data by label
Write ETP `User Info. 1` label and print data to see the result.
```js
var label = 7;
var text = 'hello';
console.log(ETP.ETPDataWrite(label, text));
console.log(ETP.ETPDataRead());
```
#### Check lock status
Print lock status.
```js
var area = 0xa6;
console.log(ETP.ETPLockStatusCheck(area));
```
#### Toggle lock status between lock and unlock
Toggle lock status and print it.
```js
var password = '1234';
console.log(ETP.ETPLockUnlockSet(area, password));
```

## Test Platform
 - Windows 10 Enterprise LTSB with nodejs 10.15.3

## History
 - 1.0.0 - November 2019 : update for NODE_MODULE_VERSION=64
 - 0.1.4 - October 2017 : Initial Release

## License
Copyright 2019 ADVANTECH Corp. under [the Apache 2.0 license](LICENSE).