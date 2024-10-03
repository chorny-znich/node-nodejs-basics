import fs from 'fs';

const list = async () => {
    const dirname = 'src/fs/files';
    fs.readdir(dirname, (err, files) => {
        if (err) throw err;
        files.forEach((item) => {
            console.log(item);
        });
    })
};

await list();