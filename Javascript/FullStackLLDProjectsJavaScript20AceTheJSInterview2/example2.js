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

// var obj2 = {...obj1}; //shallow copy
// var obj2 = Object.assign({}, obj1); //shallow copy
// var obj2 = JSON.parse(JSON.stringify(obj1)); //deep copy but this doesn't work with functions.
obj2.city = 'London';

console.log(obj1, obj2);