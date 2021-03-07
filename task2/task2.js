const { pipeline } = require('stream');
const fs = require('fs');
const csv = require("csvtojson");

const CSV_FILE_PATH = './task2/csv/testData.csv';
const TXT_FILE_PATH = './task2/result.txt';

pipeline(
  fs.createReadStream(CSV_FILE_PATH),
  csv({
    noheader: false,
    headers: ['book','author', 'amount', 'price'],
    checkType: true,
  }),
  fs.createWriteStream(TXT_FILE_PATH),
  (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log(CSV_FILE_PATH, 'is converted to JSON format and the result is saved to', TXT_FILE_PATH);
    }
  }
);
