"use strict";

// function test(){
//     console.log(this);
// }

// test();

let obj = {
    name : 'Ashu',
    city: 'Pune',
    getThis: function(){
        function test(){
            console.log(this);
        }
        test();
    }
}
obj.getThis();

let objFn = obj.getThis;
objFn();