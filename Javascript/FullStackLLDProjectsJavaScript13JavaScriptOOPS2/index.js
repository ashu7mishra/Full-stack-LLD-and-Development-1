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
}

const BMW1 = new Car1('X1', 'Red');

Car.prototype.getColor = function(){
    return this.model
}

BMW.getColor();