var cartQuantity = 200;

// if (cartQuantity > 0) {
//     console.log('widget 1')
//     cartQuantity++

// } else if (cartQuantity > 10) {
//     console.log('widget 2')
//     cartQuantity++
// } else {
//     console.log('widget 3')
//     cartQuantity++
// }

// cartQuantity > 0 ? console.log('widget 1') : console.log('widget 2')

// console.log(cartQuantity)

// switch(cartQuantity){
//     case 0:
//         console.log('widget 1');
//         break;
//     case 20:
//         console.log('widget 2');
//         return;
//     default:
//         console.log('widget 3');
// }



// var g = "global scope";
// console.log('1 > ',g);

// function outer(){
//     var o = "outer scope";
//     console.log('2 > ',g, o);

//     function inner(){
//         // console.log(i)
//         var i = "inner scope";
//         console.log('3 > ',g, o, i);
//         console.log(k);
//         k = 10;
//     }
//     inner()
// }
// outer();

// console.log(2+2+"2")

// for (let i=0; i<5; i++){
//     console.log(i);
// }

// for (; i<5; i++){
//     console.log(i);
// }

// function sum(a,b){
//     return a+b
// }

// console.log("sum : ", sum(1,2))

// var total = function(a,b){
//     return a+b
// }

// console.log("total : ", total(1,2))

function sum(){
    console.log(arguments);
    var sum=0;
    for (var i = 0; i<arguments.length; i++){
        sum += arguments[i];
    }
    return sum
}

console.log(sum(1,2))
console.log(sum(3,2,15))
console.log(sum(1,2,3,4))
console.log(sum(1))