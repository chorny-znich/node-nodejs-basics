import fs from 'fs';

const read = async () => {
    const filename = 'src/fs/files/fileToRead.txt';
    fs.readFile(filename, 'utf-8', (err, data) => {
        if (err) throw 'FS operation failed';
            console.log(data);
        });
};

await read();