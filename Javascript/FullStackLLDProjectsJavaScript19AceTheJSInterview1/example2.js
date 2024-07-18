// Q1. Implement a counter function that returns a 
// new counter instance each time it's called, 
// and each instance maintains its own count.
// (without class)

// function createCounter(){
//     let n=1;
//     return function(){
//         return n++
//     }
// }

// const counter1 = createCounter();
// console.log(counter1()); //1
// console.log(counter1()); //2
// console.log(counter1()); //3

// const counter2 = createCounter();
// console.log(counter2()); //1
// console.log(counter2()); //2
// console.log(counter2()); //3
// console.log(counter2()); //4

// const counter3 = createCounter();
// for (let i=0; i<10; i++){
//     console.log(counter3());
// }

// Q3. Implement a function that generates a random
// number between 1 and 100, and returns a function
// that checks if a guessed number matches the generated 
// number.

// function numberGame(){
//     let targetNumber = Math.floor(Math.random()*100)+1;
//     return function(num){
//         if (num === targetNumber){
//             return 'Congratulation!';
//         }else if(num < targetNumber){
//             return 'Try a higher number';
//         }else{
//             return 'try a lower number';
//         }
//     }
// }

// const guessNumber = numberGame();

// console.log(guessNumber(50));
// console.log(guessNumber(30));
// console.log(guessNumber(80));

// Q3: sum(x)(y)(z) return sum of x,y,z

// function sum(x){
//     return function(y){
//         return function(z){
//             return x+y+z;
//         }
//     }
// }

// console.log(sum(1)(2)(3))

// Q4. create a function that generate a sequence
// of Fibonacci number using closure

// function fibonacciSequence(){
//     let a = 0
//     let b = 1
//     return function(){
//         const result = a;
//         // a = b;
//         // b = result + b;
//         [a, b] = [b, a+b];
//         return result;
//     }
// }


// const generateFibonacci = fibonacciSequence();
// console.log(generateFibonacci());
// console.log(generateFibonacci());
// console.log(generateFibonacci());
// console.log(generateFibonacci());
// console.log(generateFibonacci());
// console.log(generateFibonacci());
// console.log(generateFibonacci());
// console.log(generateFibonacci());


