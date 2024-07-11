// ES2015

function Car(model, make){
    this.model = model;
    this.make = make;
    this.getDetail = function(){
        return `Car model is ${this.model}`;
    }
}

const BMW = new Car('A1', '2023');
const AUDI = new Car('X1', '2022');


// ES6

class Car1{
    constructor(model, make){
        this.model = model;
        this.make = make;
        this.getDetail = function(){
            return `Car model is ${this.model}`;
        }
    }
}

const BMW1 = new Car1('A1', '2023');
const AUDI1 = new Car1('X1', '2022');


class SuperCar extends Car{
    constructor(price, model, make){
        super(model, make);
        this.price = price;
        this.totalPrice = function(tax){
            return tax+this.price;
        }
    }

    getDetail(){
        return `Price of model ${this.model} is ${this.price}`
    }
}

const LuxuryBMW = new SuperCar(2000000, 'A1', '2023');
const LuxuryAudi = new SuperCar(1000000, 'A2', '2023');

console.log(LuxuryBMW);
console.log(LuxuryAudi);
