// function sum(a,b){
//     return a+b;
// }

// console.log(sum(1,2));
// console.log(sum(a,b));

// var a = 10;
// var b = 20;

// console.log(sum(a,b));


var obj = {
    a:10,
    b:20,
    sum: function(){
        return this.a + this.b;
    }
}

console.log(obj.sum());

var obj2sum = obj.sum;
console.log(obj2sum());
console.log(obj2sum.call(obj));