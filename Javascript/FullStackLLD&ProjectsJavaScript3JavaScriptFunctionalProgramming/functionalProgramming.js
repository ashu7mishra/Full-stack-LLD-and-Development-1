var arr = [1,2,3,4,5]

// function inperativeFn(){
//     var sum = 0;
//     for (var i = 0; i < arr.length; i++){
//         sum += arr[i];
//     }

//     return sum;
// }

// console.log(inperativeFn())

// function declarativeFn(){
//     var sum = 0;
//     var cb = function(item){
//         sum += item
//         console.log(sum);
//     };
//     arr.forEach(cb);
//     return sum;
// }

// declarativeFn()

// function declarativeFn(){
//     var sum = 0;
//     arr.forEach(function(item, i){
//         sum += item
//     });
//     return sum;
// }

// console.log(declarativeFn())

// forEach does not return anything.

// arrow function or lambda function

// var sum = function(a, b) {
//     return a+b;
// } 

// var sum = (a, b) => a+b;

// var sum = (a, b) => {
//     return a+b;
// }

// above all three are same


var arr = ['apple', 'banana', 'mango']

// function upperCaseImperative(){
//     var newArr = [];
//     for (i=0; i<arr.length; i++){
//         const upperCaseValue = arr[i].toUpperCase();
//         newArr.push(upperCaseValue);
//     }
//     return newArr;
// }

// console.log(upperCaseImperative())

// function upperCaseDeclarative(){
//     var newArr = [];
//     arr.forEach(function(item){
//         const upperCaseValue = item.toUpperCase();
//         newArr.push(upperCaseValue);

//     });
//     return newArr
// }

// console.log(upperCaseDeclarative())

// function upperCaseDeclarative(){
//     // var newArr = [];
//     var result = arr.map(function(item){
//         // map returns a new array of same length with modified values
//         return item.toUpperCase()

//     });
//     return result
// }

// console.log(upperCaseDeclarative())
// arr = [1,2,3,4]
// function multiply2(){
//     // var newArr = [];
//     var result = arr.map(function(item){
//         // map returns a new array of same length with modified values
//         return item*2

//     });
//     return result
// }

// console.log(multiply2())

arr = [1,2,3,4,5,6,7,8]
// function divide2(){
//     // var newArr = [];
//     var result = arr.filter(function(item){
//         // map returns a new array of same length with modified values
//         return item%2 === 0;

//     });
//     return result
// }

// console.log(divide2())

// function sumDeclarative(){
//     var result = arr.reduce(function(acc, item){
//         acc += item;
//         return acc;
//     },0);
//     return result
// }

// console.log(sumDeclarative())

var strArray = ['My', 'Name', 'is', 'Ashutosh']
function generateStatement(){
    var result = strArray.reduce(function(acc, item){
        acc += item + ' ';
        return acc;
    },'');
    return result
}

console.log(generateStatement())