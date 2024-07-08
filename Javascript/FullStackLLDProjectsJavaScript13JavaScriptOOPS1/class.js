// let person = {
//     name:'Ashu',
//     course: 'FullStack',
//     getName: function(){
//         return this.name;
//     }
// }

// console.log(person.name);
// console.log(person.getName());

// person2 = {
//     name: 'Krish',
//     course: 'FullStack',
//     getName: function(){
//         return this.name;
//     }
// }

// console.log(person2.name);
// console.log(person2.getName());

// constructor function
// function Person(name, course){
//     this.name = name;
//     this.course = course;
//     this.getName = function(){
//         return this.name;
//     }
//     this.getCourse = function(){
//         return this.course;
//     }
// }

// const Mohsin = new Person('Mohsin', 'FullStack');
// const Swati = new Person('Swati', 'FullStack');
// console.log(Mohsin.getName());
// console.log(Swati.getName());


function Car(name, color){
    this.name = name;
    this.color = color;
    this.getName = function(){
        return this.name;
    }
    return this;
}

const BMW = new Car('BMW', 'Red');
console.log(BMW);
console.log(global.color);
console.log(BMW.color);