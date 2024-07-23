// Q1. Implement numberOfArgument such that
// it returns number of arguments passed in a function

function numberOfArguments(){
    return arguments.length;
}

console.log(numberOfArguments('a', 'b', 'c'));
console.log(numberOfArguments(1, 2));

var obj1 = {
    name: 'Abhay',
    city: 'Pune'
};

var obj2 = obj1;
obj2.city = 'London';

console.log(obj1, obj2)