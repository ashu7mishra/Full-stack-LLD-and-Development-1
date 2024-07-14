const myPromise = new Promise((resolve, reject) => {
    resolve('Success!');
});

myPromise
    .then(() =>{
        console.log('This executes in case of proposal expected!');
    })
    .catch(() => {
        console.log('This executes in case of proposal rejected!');
    });