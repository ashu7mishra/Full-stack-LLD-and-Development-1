const fs = require('fs');

console.log('Start');
fs.readFile('f1.txt', readFileCallback1);
console.log('End');

function readFileCallback1(err, data){
    if(err){
        console.log(err);
    }else{
        console.log('File 1 Data > ', data);
    }
}