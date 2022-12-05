import fs from 'fs';

const path = './files/properFilename.md';
const dist = './files/wrongFilename.txt';
const cause = new Error('FS operation failed');

const rename = async () => {
  fs.stat(dist, function (err, stats) {
    if (err) {
      console.log(cause);
    } else {
      // console.log("Файл найден");
      fs.stat(path, function (err, stats) {
        if (err) {
          fs.rename(dist, path, err => {
          });
        } else {
          console.log(cause);
        }
      });
    }
  });
};

await rename();