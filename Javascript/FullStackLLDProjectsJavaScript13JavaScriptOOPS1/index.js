let obj = {
    name: 'Ashutosh',
    city: 'Pune',
    getThis: function(){
        console.log(this);
    }
}

let objFn = obj.getThis;
objFn();


let obj1 = {
    name: 'Ashutosh',
    city: 'Pune',
    getThis: function(){
        function test(){
            console.log(this);
        }
        test();
    }
}

obj1.getThis();