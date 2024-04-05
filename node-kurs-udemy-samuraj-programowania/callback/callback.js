// const add = (x, y) => x + y;
// const division = (num1, num2) => num1 / num2;
// const math = (a, b, callback) => {
//     console.log(callback(a,b));
// };
// math(3, 4, add);
// math(4, 2, division);

// setTimeout(() => console.log('Co u Ciebie?'), 2000);
// console.log('Hej!');

const fs = require('fs');
fs.readFile('./text.txt', 'utf8', (err, file) => console.log(file));
console.log('przed czy po odczytaniu?');