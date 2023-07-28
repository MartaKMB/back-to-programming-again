console.log("main.js");

const nameList = ["Ludmir", "Dobrosława", "Jaropełek", "Władysław"];

const cityList = [];
cityList[0] = "Konin";
cityList[1] = "Zabrze";

const colors = new Array("red", "blue");

const myArrayConst = [];
let myArrayLet = [];

myArrayConst[0] = "pierwszy const";
myArrayLet[0] = "pierwszy let";

// myArrayConst = "coś innego"; // TypeError
myArrayLet = "coś innego";

console.log("const: ", myArrayConst, " let: ", myArrayLet);

const popularName = nameList[2];
nameList[2] = "Teodor";
nameList[15] = "Kornelia";

delete nameList[1];

console.log("przypisywanie: ", popularName, nameList, typeof nameList[4]);

const cities = ["Poznań", "Warszawa", "Kraków", "Wrocław", "Zielona Góra"];
cities[cities.length] = "Białystok";

console.log("długość tablicy: ", cities.length, cities[cities.length - 1]);

colors.length = 0;

console.log("czyszczenie tablicy: ", colors, colors instanceof Array, Array.isArray(colors));

let letters = ["a", "b", "c"];
let characters = letters;

letters = null;

console.log("przypisanie null do instancji: ", letters, characters);

const [nameUser, idUser, ageUSer] = ["Stasiek", 12, 34];

console.log("destrukturyzacja: ", nameUser);
