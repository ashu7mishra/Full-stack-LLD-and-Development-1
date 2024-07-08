let obj = {
    name: "Ashutosh",
    getThis: function() {
        console.log(this);
        function test(){
            console.log(this)
        }
        test()
    }
}

// obj1 = obj()

obj1 = obj.getThis;

obj1();