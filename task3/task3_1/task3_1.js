import readline from 'readline';
import {reverseString} from './utils.js';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (line) => {
  console.log(reverseString(line), '\n');
});
