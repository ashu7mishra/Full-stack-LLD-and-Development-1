// Q1:

// const person = {
//     name: 'Chandra'
// }

// function sayHello(){
//    console.log(this.name);
// }

// sayHello();

// person.sayHello = sayHello;

// person.sayHello();

// Q2
// const person = {
//     name: 'Chandra'
// }

// function sayHello(){
//     setTimeout(function () {
//         console.log(this.name);
//     }, 1000);
// }

// sayHello();

// person.sayHello = sayHello;

// person.sayHello();

// Q3.

// const counter = {
//     value: 0,
//     increment: function(){
//         this.value++;
//     }
// }

// counter.increment();
// counter.increment();
// console.log(counter.value);

// const counter = {
//     value: 0,
//     increment: function(){
//         setTimeout(function(){
//             console.log(this.value);
//             this.value++;
//         }, 1000);
//     }
// }

// counter.increment();
// counter.increment();
// console.log(counter.value);

// var value = 10;
// const counter = {
//     value: 0,
//     increment: function(){
//         setTimeout(function(){
//             console.log(this.value);
//             this.value++;
//         }, 1000);
//     }
// }

// counter.increment();
// counter.increment();
// console.log(counter.value);
// setTimeout(function(){
//     console.log(value);
// },5000)

// var value = 10;
// const counter = {
//     value: 0,
//     increment: () => {
//         this.value++;
//     }
// }

// counter.increment();
// counter.increment();
// console.log(counter.value);
// console.log(value);

function Outer() {
    this.value = 20;
    this.name = 'Das';
    const counter = {
        value: 0,
        increment: () => {
            // console.log(this);
            this.value++;
        }
    }

    counter.increment();
    counter.increment();
    console.log(counter.value);

    const newInc = counter.increment;
    newInc();
    newInc();
    console.log(counter.value);
}

Outer()


