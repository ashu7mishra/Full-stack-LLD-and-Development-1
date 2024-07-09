function Car(model, color){
    this.model = model;
    this.color = color;
}

const BMW = new Car('X1', 'Red');
const Mer = new Car('A1', 'Black');

class Car1 {
    constructor(model, color){
        this.model = model;
        this.color = color;
        this.getColor = function(){
            return this.getColor;
        }
    }
    getModel(){
        return this.model;
    }

    static getArea(radius){
        return 3.14*radius*radius;
    }
}

console.log(Car1.getArea(10));

const BMW1 = new Car1('X1', 'Red');

Car.prototype.getColor = function(){
    return this.model
}

BMW.getColor();


class SuperCar extends Car {
    constructor(price, feature, model, color){
        super(model, color);
        this.price = price;
        this.feature = [];
    }

    getOnRoadPrice(){
        return this.price + 100000;
    }
}

const BMW2 = new SuperCar(200000000, ['F1', 'F2', 'F3'], 'X1', 'Black');
const MER2 = new SuperCar(100000000, ['F4', 'F5', 'F6'], 'A1', 'Blue');