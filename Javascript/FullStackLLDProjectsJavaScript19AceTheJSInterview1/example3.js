// Q5. Output ??

// function example(){
//     if(true){
//         var a = 1;
//         let b = 2;
//     }
//     console.log(a); // 1
//     console.log(b); // error
// }

// example()

// function example(){
//     console.log(a); // undefined
//     if(true){
//         console.log(b); // error
//         var a = 1;
//         let b = 2;
//     }
//     console.log(a); // 1
// }

// example()

function outer(){
    var a = 10;
    function inner(){
        return a;
    }
    return inner;
}

const innerF = outer();
const newInnerRef = innerF;
console.log(newInnerRef());