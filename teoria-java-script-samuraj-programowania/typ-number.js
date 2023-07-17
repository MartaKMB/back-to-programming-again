const numberExample = 100;
const decimalExample = 12.67;

const hexNumber = 0xff;
const binNumber = 0b011101;
const scienceNumber = 5e2;

console.log("system szesnastkowy zaczynamy od 0x: ", hexNumber);
console.log("system binarny zaczynamy od 0b: ", binNumber);
console.log("notacja naukowa: ", scienceNumber);

const newNumber = 123.45;
console.log("toFixed(): ", newNumber.toFixed(), newNumber.toFixed(1), typeof newNumber.toFixed());
console.log("to String(): ", newNumber.toString(), newNumber.toString(2));

console.log("Number.isInteger: ", Number.isInteger(200.00), Number.isInteger(decimalExample));
console.log("Number.isFinite: ", Number.isFinite(20), Number.isFinite(decimalExample), Number.isFinite(NaN), Number.isFinite(Infinity), Number.isFinite(1e400), Number.isFinite(3e300));

console.log("typeof NaN: ", typeof NaN, 2 * "string", " Infinity ", typeof Infinity, 1/0);

console.log("parseInt: ", parseInt('100'), parseInt('100', 10), parseInt('100', 4), parseInt('0xff', 16));
console.log("parseInt a parseFloat ", parseInt("2.53"), parseFloat("2.53"));

console.log("Obiekt Math: ", Math.round(decimalExample), Math.floor(decimalExample), Math.random());
