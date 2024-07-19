// Q1. Execute all fetch calls in parallel

const fetchUserData = fetch('https://jsonplaceholder.typicode.com/todos/1');
const fetchPostData = fetch('https://jsonplaceholder.typicode.com/todos/1');

Promise.all([fetchUserData, fetchPostData])
    .then(response => Promise.all(response.map(res => res.json())))
    .then(data => console.log(data));