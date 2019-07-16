const path = require('path');
const fs = require('fs');

const sourcePath = path.join(__dirname, 'src/assets');
const destPath = path.join(__dirname, 'dist/assets');

if (!fs.existsSync(destPath)){
    fs.mkdirSync(destPath);
}

fs.readdir(sourcePath, function (err, files) {
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 

    files.forEach(function (file) {
        fs.copyFile(path.resolve(sourcePath, file), path.resolve(destPath, file), (err) => {
            if (err) throw err;
            console.log(`Copied file "${file}"`);
        });
    });
});
