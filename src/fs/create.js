import fs from 'fs';

const create = async () => {
    const filename = 'src/fs/files/fresh.txt';
    fs.stat(filename, (err, stats) => {
        if (!err) throw 'FS operation failed';
    })
    fs.writeFile(filename, 'I am fresh and young', (err) => {
        if (err) throw err;
        console.log('File created');
    });
};

await create();