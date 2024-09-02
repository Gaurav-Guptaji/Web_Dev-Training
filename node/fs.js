var fs=require('fs');
fs.writeFileSync('./text','Hello there,how are you?');

// var fs=require('fs');
var a=fs.readFileSync('./text','utf-8');
console.log(a);