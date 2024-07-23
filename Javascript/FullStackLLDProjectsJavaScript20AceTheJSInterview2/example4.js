// Q1. Build your custom myFilter function 
// which can be call on any array 

Array.prototype.myFilter = function(cb){
    // iterate
    // check condition
    // create new Array
    // push things in new array which passes condition
    // return new array

    const filteredValue = [];
    for (var i = 0; i<this.length; i++){
        
        if (cb(this[i], i, this)){
            filteredValue.push(this[i]);
        }
    }
    return filteredValue;

}

console.log([1,2,3,4].myFilter((value) => value%2 === 0));
console.log([1,2,3,4].myFilter((value) => value>3));
console.log([1,2,3,4].myFilter((value) => value%3 === 0));
console.log([1,2,3,4].myFilter((value) => value%5 === 0));