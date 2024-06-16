// objects

var obj = {
    name: "Ashutosh Mishra",
    dob: "13/11/xxxx",
    age: 30,
    married: true,
    teckstack: ['JS', "React", "Node", "GraphQL"],
    address: {
        pincode: 560067,
        city: "Bangalore"
    },
    greet: function(){
        console.log("Hello Everyone")
    }
}


// Read
// console.log(obj['name']);
// console.log(obj.name);
// console.log(obj['age']);
// console.log(obj.age);

// Update
obj["name"] = "Abhinav";
// console.log(obj['name']);

// create
obj['school address'] = "Ambala";
// console.log(obj);

var salary = "salary";
obj[salary] = "xxxxxxxxxxxxxx"
console.log(obj);

// delete

// delete obj.salary;
// delete obj[salary]
// console.log(obj);

// console.log(obj.address)
// console.log(obj.teckstack)
// console.log(obj.greet())
// console.log(obj.address.pincode)
// obj.address.city = "Mumbai"
// console.log(obj.address.city)
// obj.teckstack[0] = "JavaScript"
// console.log(obj.teckstack)
// console.log(obj)

// console.log(Object.keys(obj))
// console.log(Object.values(obj))

let keys = Object.keys(obj)
for (let i=0; i<keys.length; i++){
    console.log(keys[i], obj[keys[i]])
}