let fs = require('fs');
let currentWorkingDirectory = process.cwd();
let path = require('path');

function minusN(fileName) {
    // console.log("minusN");
    let count = 1;
    let fileNamePath = path.join(currentWorkingDirectory,fileName);
    fs.readFileSync(fileNamePath, 'utf-8').split(/\r?\n/).forEach(function(line){
        console.log(count+"\t",line);
        count++;
      })

}


module.exports = {
    fs:minusN
}