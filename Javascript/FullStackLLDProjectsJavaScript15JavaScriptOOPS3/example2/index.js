const teacher = {
    firstName: 'Chirag',
    lastName: 'Goel',
    age: 30,
    getFullName: function(prefix){
        return `${prefix} ${this.firstName} ${this.lastName}`
    }
}

const student = {
    firstName: 'Ashutosh',
    lastName: 'Mishra',
}

const gf = {
    firstName: 'Bhavna',
    lastName: 'Tiwari',
}

const getName = teacher.getFullName;
// console.log(getName());
// console.log(getName.call(teacher));
// console.log(getName.call(student, 'Mr'));
// console.log(getName.apply(student, ['Mr']));
// console.log(teacher.getFullName());

const newGetName = getName.bind(gf);

console.log(newGetName('Mrs.'))