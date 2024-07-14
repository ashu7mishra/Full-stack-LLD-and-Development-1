//callback hell => solved by => promises


const fs = require('fs');

console.log('Start');
fs.readFile('f1.txt', readFileCallback1);
console.log('End');

function readFileCallback1(err, data){
    if(err){
        console.log(err);
    }else{
        fs.readFile('f2.txt', function readFileCallback2(err, data){//callback
            if(err){
                console.log(err);
            }else{
                fs.readFile('f2.txt', function readFileCallback2(err, data){//callback
                    if(err){
                        console.log(err);
                    }else{
                        fs.readFile('f2.txt', function readFileCallback2(err, data){//callback
                            if(err){
                                console.log(err);
                            }else{
                                // fs.readFile('f2.txt', readFileCallback2)
                                console.log('File 2 Data > ', data);
                            }
                        })
                    }
                })
            }
        })
    }
}

function readFileCallback2(err, data){
    if(err){
        console.log(err);
    }else{
        // fs.readFile('f2.txt', readFileCallback2)
        console.log('File 2 Data > ', data);
    }
}
