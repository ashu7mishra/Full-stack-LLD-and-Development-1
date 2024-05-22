// function sum(ob1, ob2){
//     console.log(typeof ob1)
//     ob1.value = 500;
//     return ob1.value + ob2.value;
// }

// var obj1 = {
//     value: 200,
// }

// var obj2 = {
//     value: 300,
// }

// console.log(sum(obj1, obj2))
// console.log(obj1.value)

function total(ob1, ob2){
    console.log(typeof ob1)
    return ob1 + ob2;
}

var obj1 = {
    value: 200,
}

var obj2 = {
    value: 300,
}

console.log(total(obj1.value, obj2.value));


var fnAsValue = function (fn) {
    var result = fn(1, 2);
    console.log(result);
};

fnAsValue(total);

var fnAsReturnValue = function() {
    return function() {
        console.log("Return function")
    }
}

console.log(typeof fnAsReturnValue())
console.log(fnAsReturnValue())

const innerFn = fnAsReturnValue();
console.log(typeof innerFn);
innerFn();