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

function total(satateTax, centralTax){
    return this.num1 + this.num2 + satateTax + centralTax;
}

console.log(total());

const data1 = {
    num1: 10,
    num2: 20,
}

console.log(total.call(data1, 30 ,40));
console.log(total.apply(data1, [30 ,40]));

const totalBind = total.bind(data1);

console.log(totalBind(40,50));