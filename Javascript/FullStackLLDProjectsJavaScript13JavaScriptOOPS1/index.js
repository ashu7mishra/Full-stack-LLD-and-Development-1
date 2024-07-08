"use strict";

// function test(){
//     console.log(this);
// }

// test();

let obj = {
    name : 'Ashu',
    city: 'Pune',
    getThis: function(){
        console.log(this);
    }
}

let objFn = obj.getThis;
objFn();