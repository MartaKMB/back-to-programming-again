const showMsg = function (message) {
  console.log(message);
};

showMsg('Hello!');

function addNumbers(number1, number2) {
  return number1 + number2;
}

addNumbers(3, 4);
console.log(addNumbers(2, 2));

const txtLog = new Function('text', 'console.log(text);');
txtLog('Konstruktor działa');

const showMsgArrowFunction = (txt) => console.log(txt);

showMsgArrowFunction('Hello again!');

function showCourseName() {
  console.log('Programowanie w JS');
}

const newShowCourseName = showCourseName;
newShowCourseName();

const divideBy2 = (num) => console.log(num / 2);
const divideBy5 = (num) => num / 5;

const result1 = divideBy2(10);
const result2 = divideBy5(10);

let number = 0;

const add = () => {
  number++;
  console.log('efekt uboczny', number);
};

const showArguments = (x, y, z) => console.log(x, y, z);

console.log('ilość argumentów', showArguments.length);
