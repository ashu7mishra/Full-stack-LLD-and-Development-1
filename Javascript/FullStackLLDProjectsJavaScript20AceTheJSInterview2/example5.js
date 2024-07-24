// Q1: Implement sleep function

async function greeting(){
    console.log('Hello');
    await sleep(10000, "I'm sleeping for 10 sec.");
    console.log('Bye');
}

greeting();
// t = 0: Hello
// I'm sleeping for 2 sec.
// t = 2: Bye

function sleep(delay, message){
    console.log(message);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, delay)
    })
}