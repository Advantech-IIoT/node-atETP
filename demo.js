var ETP = require('node-atETP');

console.log('\nRead all ETP data');
console.log(ETP.ETPDataRead());

console.log('\nWrite ETP data by label')
var label = 7;
var text = 'hello';
console.log(ETP.ETPDataWrite(label, text));
console.log(ETP.ETPDataRead());

console.log('\nCheck lock status')
var area = 0xa6;
console.log(ETP.ETPLockStatusCheck(area));

console.log('\nToggle lock status between lock and unlock')
var password = '1234';
console.log(ETP.ETPLockUnlockSet(area, password));
