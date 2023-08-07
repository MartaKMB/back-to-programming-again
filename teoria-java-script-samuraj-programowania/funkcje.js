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

const addTwoNumbers = (x = 2, y = 4) => {
  const result = x + y;
  console.log('addTwoNumbers', result);
  return result;
};

addTwoNumbers();
addTwoNumbers(4);
addTwoNumbers(5, 6);

// CALLBACK

function count(x, callback) {
  return callback(x);
}

function addOne(item) {
  item++;
  console.log('addOne: ', item);
  return item;
}

function subtractOne(number) {
  number--;
  console.log('subtractOne: ', number);
  return number;
}

count(5, addOne);

const showClick = () => console.log('click w funckje');

document.getElementById('fn').addEventListener('click', showClick);

const showTime = () => console.log('minęło 10 sekund');

setInterval(showTime, 10000);

const usersAge = [20, 14, 17, 78, 92, 86, 43, 37];

usersAge.forEach((userAge) => console.log(`wiek uytkownaika, to: ${userAge}`));

const showArguments = function () {
  console.log(arguments);
  console.log(arguments.length);
  console.log(arguments[0]);
  console.log(typeof arguments);
};

showArguments('1', null, {});

const addAllNumbers = function () {
  let result = 0;
  for (let i = 0; i < arguments.length; i++) {
    result += arguments[i];
  }
  return result;
};

const usersMoney = addAllNumbers(100, 200, 300, 400, 500);

console.log('userMoney: ', usersMoney);

function showInfoAboutUser(age, name, sex) {
  if (arguments.length === 0) {
    console.log('nie mam adnych informacji o tym uzytkowniku');
  } else if (arguments.length === 1) {
    console.log(`uzytkownik ma ${age} lat, nic więcej o nim nie wiemy`);
  } else if (arguments.length === 2) {
    console.log(`uzytkownik ma ${age} lat i ma na imię ${name}`);
  } else {
    console.log(`uzytkownik ma ${age} lat, ma na imię ${name} i jest ${sex}`);
  }
}

showInfoAboutUser();
showInfoAboutUser(18);
showInfoAboutUser(18, 'Rozalia');
showInfoAboutUser(18, 'Rozalia', 'kobieta');
