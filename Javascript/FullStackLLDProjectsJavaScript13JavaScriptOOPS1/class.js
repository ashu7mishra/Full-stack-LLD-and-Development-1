let person = {
    name:'Ashu',
    course: 'FullStack',
    getName: function(){
        return this.name;
    }
}

console.log(person.name);
console.log(person.getName());

person2 = {
    name: 'Krish',
    course: 'FullStack',
    getName: function(){
        return this.name;
    }
}

console.log(person2.name);
console.log(person2.getName());