const fetch = require('node-fetch');

const year = process.argv[2] || Math.floor(Math.random() * 2024);
console.log(year);

fetch(`http://numbersapi.com/${year}/year?json`)
.then(res => {
    console.log(res.status);
    console.log(res.ok);
    return res.json();
})
.then(data => console.log(data.text))
.catch(err => console.log(err))