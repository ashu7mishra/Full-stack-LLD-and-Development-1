const obj1 = {
    a: 1,
    b: 2,
    sum: function(){
        return this.a + this.b
    }
};

console.log(obj1.sum());

const sumRef = obj1.sum;
console.log(sumRef());
console.log(sumRef.call(obj1));