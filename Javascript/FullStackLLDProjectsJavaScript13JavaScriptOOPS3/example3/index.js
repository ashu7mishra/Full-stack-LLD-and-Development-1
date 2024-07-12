let e = {
    firstName: 'Hargun',
    lastName: 'Singh',
    address: {
        city: 'Pune',
        permanentAddress: {
            pincode: 411057
        }
    },
    getDetail: function(){
        console.log('Detail');
    }
}

let f = e;

f.lastName = 'King';

let g = {...e};

g.lastName = 'New King';
g.address.city = 'Delhi';

// console.log(e,f);
// console.log(e,g);

let h = JSON.parse(JSON.stringify(e));
console.log(h);

h.address.city = 'Noida'

console.log(e);
console.log(f);
console.log(g);
console.log(h);

