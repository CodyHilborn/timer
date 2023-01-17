/*{
--> Program takes in a command line argument, will set of a timer (with sound) at any number of specified intervals (in seconds) *process.stdout.write('\x07')*;
--> Edge Cases
--> No beeps if no numbers are provided. ✅
--> Ignore negative numbers. ✅
--> Ignore NaN also. ✅
}*/

const args = process.argv.slice(2);


for (const num of args) {
  if (num && num > 0) {
    setTimeout(() => {
      process.stdout.write('\x07')
    }, num * 1000)
  }
};