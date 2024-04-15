const fetch = require('node-fetch');

const year = process.argv[2] || Math.floor(Math.random() * 2024);
console.log(year, process.argv);

// fetch(`http://numbersapi.com/${year}/year?json`)
// .then(res => {
//     console.log(res.status);
//     console.log(res.ok);
//     return res.json();
// })
// .then(data => console.log(data.text))
// .catch(err => console.log(err))

const arg = process.argv[2];
let type = "";

if (arg.indexOf("--year") === 0) {
    console.log("szukamy informacji o roku...");
    type = "year"
} else if (arg.indexOf("--math") === 0) {
    console.log("szukamy informacji o liczbie...");
    type = "math";
} else if (arg.indexOf("--trivia") === 0) {
    console.log("szukamy liczby ciekawostki...");
    type = "trivia";
}

const equalSign = arg.search("=");
// console.log(equalSign);
if (equalSign === -1) console.log("nie wpisałeś liczby!");

const number = arg.slice(equalSign + 1) || 1;
// console.log(number);

if(number === "" || isNaN(Number(number))) {
    console.log("to nie jest liczba");
    process.exit();
}

fetch(`http://numbersapi.com/${number}/${type}?json`)
.then(res =>  {
    if (res.ok) {
        return res.json()
    } else {
        throw new Error("coś poszło nie tak", res.status);
    }
})
.then(data => console.log(data.text))
.catch(err => console.log(err))