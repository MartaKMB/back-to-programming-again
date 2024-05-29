
// 1. PROJECT EXAMPLE
const input1Element: HTMLInputElement = document.querySelector('#input1');
const input2Element: HTMLInputElement = document.querySelector('#input2');
const addBtn = document.querySelector('#button1');

const add = (v1: number, v2: number) => v1 + v2;

addBtn.addEventListener('click', () => {
  const sum = add(Number(input1Element.value), Number(input2Element.value));
  console.log(sum);
});

// type inference
let age: number;
age = 33;

// literal type
const ageConst = 37;
ageConst;

// union type
const logAge = (age: number | string) => console.log(`Hej mam ${age} lat`);

logAge(33);
logAge('osiemnaście');

let test: string | number | boolean;

// 2. PROJECT EXAMPLE
const buyBtn = document.querySelector('#button2');

const calculatePrice = (originalPrice: number, hasDiscount: boolean) => {
  return hasDiscount ? originalPrice * 0.8 : originalPrice;
};

buyBtn.addEventListener('click', () => {
  const originalPrice: number = 50;
  const hasDiscount: boolean =
    new URLSearchParams(window.location.search).get('discount') === 'true';
  console.log(calculatePrice(originalPrice, hasDiscount));
});