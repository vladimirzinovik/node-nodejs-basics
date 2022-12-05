import fs from 'fs';

const copy = async () => {

  const path = './files';
  const dist = './files_copy';
  const cause = new Error('FS operation failed');

  fs.stat(dist, function (err) {
    if (!err) {
      console.log(cause);
    } else if (err.code === 'ENOENT') {
      fs.stat(path, function (err) {
        if (!err) {
          fs.cp(path, dist, { recursive: true }, (err) => {
            if (err) {
              console.error(err);
            }
          });
        } else if (err.code === 'ENOENT') {
          console.log(cause);
        }
      });
    }
  });
};

copy();