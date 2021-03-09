let fs = require("fs");
let path = require("path");

let input = process.argv.slice(2);
let length = input.length;

// currentWorkingDirectory -> process.cwd();

// file path -> path.join(currentWorkingDirectory, fileName);
// check if file or not -> fs.lstatSync(path_string).isFile();

let display = require("./commands/display");
let minusB = require("./commands/minusB");
let minusN = require("./commands/minusN");


if(input[0] == '-n')
{
    
    minusN.fs(input[1]);
}
else if(input[0] == '-b')
{
    minusB.fs(input[1]);
}

else if(path.extname(input[0]).length != 0)
{
    
    display.fs(input);
}
else
{
    console.log("wrong command");
}