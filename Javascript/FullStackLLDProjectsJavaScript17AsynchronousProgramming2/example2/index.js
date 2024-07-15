// const myPromise = new Promise((resolve, reject) => {
//     // resolve('Success!');
//     reject('Rejected');
// });

// console.log('A');

// myPromise
//     .then((data) =>{
//         console.log('This executes in case of proposal expected!');
//         console.log(data);
//     })
//     .catch((error) => {
//         console.log('This executes in case of proposal rejected!');
//         console.log(error);
//     });

//     console.log('B');


    // mimic api call

    const list = [{
        id: 1,
        title: 'Product 1',
        description: 'Awesome product'
    },{
        id: 2,
        title: 'Product 2',
        description: 'Awesome product'
    },{
        id: 3,
        title: 'Product 3',
        description: 'Awesome product'
    }];


    const myFetch = function(delay) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(delay>3){
                    resolve(list);
                }else{
                    reject('Error in loading.')
                }
                
            }, 2000)
        })
    }

    myFetch(3)
        .then((data) => console.log('Success > ', data))
        .catch((error) => console.log('Failure >', error));

let count = 0;

setInterval(() =>{
    count++;
    console.log('Timer: ', count);
}, 1000);