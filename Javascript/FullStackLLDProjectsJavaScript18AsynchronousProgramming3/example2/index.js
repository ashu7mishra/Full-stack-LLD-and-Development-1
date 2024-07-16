function fetchData(url) {
    return fetch(url).then(res => res.json());
}

Promise.all([
    fetchData('')
])