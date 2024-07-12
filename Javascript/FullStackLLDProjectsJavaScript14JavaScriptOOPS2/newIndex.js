function Car(model, color){
    this.model = model;
    this.color = color;
}

Car.prototype.getDetails = function(){
    console.log('Detail Function');
}

function SuperCar(price, feature, model, color){
    Car.call(this, model, color);
    this.price = price;
    this.feature = feature;
}

SuperCar.prototype = Object.create(Car.prototype);

SuperCar.prototype.getOnRoadPrice = () =>{
    return this.price + 10000;
}

const BMW = new SuperCar(10000, ['F1'], 'X1', 'Red');
const MER = new SuperCar(50000, ['F2'], 'X2', 'Blue');