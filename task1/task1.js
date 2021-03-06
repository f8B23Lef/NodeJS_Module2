const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function reverseString(string) {
  return string.split('').reverse().join('');
}

rl.on('line', (line) => {
  console.log(reverseString(line), '\n');
});
