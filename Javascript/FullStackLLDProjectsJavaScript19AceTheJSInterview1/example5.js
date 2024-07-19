// Q1. Create a function that logs a message after a
// specified delay

function delayLog(message, delay){
    setTimeout(() => {
        console.log(message);
    }, delay);
}

delayLog('I', 1000);
delayLog('Luv', 2000);
delayLog('U', 3000);


