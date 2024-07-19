// Q1. Write a polyfill for the Map method, which applies 
// a given function to each element of an array and 
// returns a new array of results.

// console.log([1,2,3].map((item) => item*2));

// if (!Array.prototype.customMap){
//     Array.prototype.customMap = function(cb){
//         // iterates through all array item
//         // execute callback on every item
//         // add callback value to new array
//         // return a new array

//         var newArr = [];
//         for (let i=0; i<this.length; i++){
//             newArr.push(cb(this[i], i, this));
//         }
//         return newArr;
//     }
// }


// Q2. Create a constructor function for a person
// object with name and age properties, and add a method 
// greet to the properties that logs a greeting message.

// function Person(name, age){
//     this.name = name;
//     this.age = age;

// }

// Person.prototype.greet = function(){
//     return 'Boss, you are always right!'
// }

// const Kiran = new Person('Kiran', 60);
// console.log(Kiran.greet());

// Q3. Create a class for a person
// object with name and age properties, and add a method 
// greet to the properties that logs a greeting message.


class Person{
    constructor(name, age){
        this.name = name
        this.age = age
    }
    
    greet(){
        return 'Boss, you are always right!'
    }
}

const Abhishek = new Person('Abhishek', 14);
console.log(Abhishek.greet());

