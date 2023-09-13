console.log("start");

console.log(typeof 22);
console.log(typeof "22");
console.log(typeof NaN);
console.log(typeof true);
console.log(2 == 3);
console.log(typeof (2 == 3));

let itemWithNoValue;
console.log(typeof itemWithNoValue);

let itemWithNull = null;
console.log(typeof itemWithNull); // object

console.log(typeof {});
console.log(typeof []);
console.log(typeof function () {}); // function

let primitiveType1 = 20;
let primitiveType2 = primitiveType1;
primitiveType1 = 30;
console.log(primitiveType1, primitiveType2);

let referenceValue1 = [1,2,3];
let referenceValue2 = referenceValue1;
referenceValue1[3] = 4;
referenceValue2[4] = 10;
console.log(referenceValue1, referenceValue2);