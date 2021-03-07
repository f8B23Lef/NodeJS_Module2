import {pipeline} from 'stream';
import fs from 'fs';
import csv from "csvtojson";

import {CSV_FILE_PATH, TXT_FILE_PATH} from './constants.js';

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
