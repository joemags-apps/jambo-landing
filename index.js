const { readdirSync, rmSync } = require('fs');
const { exec } = require('child_process');

const dir = './img/';
const files = readdirSync(dir)
files.forEach(file => {
    if (!file.includes('.webp')) {
        exec(`npx @squoosh/cli --webp auto ${dir}${file} -d ${dir}`, (err, stdout) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log(stdout);
            console.log(file);
            rmSync(`${dir}${file}`);
        });
    }
});