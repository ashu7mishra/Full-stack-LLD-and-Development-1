// console.log('A');
// console.log('B');
// setTimeout(() => {
//     console.log('C');
// });
// let i = 0;
// while(i<100000){
//     console.log('D');
//     i++;
// }

// function log(text){
//     console.log(text);
// }

// setTimeout(() =>{
//     log('D');
// },0);

// setTimeout(() =>{
//     log('E');
// });

// for (var i=0; i<10; i++){
//     log(i)
// }

console.log('A');
console.log('B');
setInterval(()=>{
    console.log('I');
},2000);
setInterval(()=>{
    console.log('C');
},1000);
