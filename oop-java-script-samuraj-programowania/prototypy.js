// PROTOTYPY [1/3]

// const Person = function (name, age) {
//     this.name = name;
//     this.age = age;
//     this.children = [];
////   this.addChildren = function (name) {
////     this.children.push(name);
////   };
//   };

//   Person.prototype.addChildren = function (name) {
//     this.children.push(name);
//   };

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.children = [];
  }

  addChildren(name) {
    this.children.push(name);
  }
}

const arek = new Person('Arek', 20);
const monika = new Person('Monika', 33);

arek.addChildren('Asia');
monika.addChildren('Jasiu');

console.log(arek.children, monika.children, monika);

// PROTOTYPY [2/3]

function Player() {}
Player.prototype.age = 25;

class User {}

const janek = new Player();
const asia = new User();

const darek = new janek.constructor();

console.log(janek.constructor, asia, asia.constructor, darek);

class Citizen {
  constructor(country, citizenship) {
    this.country = country;
    this.citizenship = citizenship;
    // this.changeCitizenship = function (newCitizenship) {
    //   this.citizenship = newCitizenship;
    //   console.log(
    //     `zmiana za pomocą metody w instancji na obywatelstwo: ${this.citizenship}`
    //   );
    // };
  }

  changeCitizenship(newCitizenship) {
    this.citizenship = newCitizenship;
    console.log(
      `zmiana za pomocą metody w prototypie na obywatelstwo: ${this.citizenship}`
    );
  }
}

const zenek = new Citizen('Polska', 'polskie');
zenek.changeCitizenship('włoskie');

const arr = [5, 6, 7, 8];

Array.prototype.delete = function (index) {
  console.log(`delete: ${this[index]}`);
  return this.splice(index, 1);
};

arr.delete(1);

// PROTOTYPY [3/3]

console.log(arr.__proto__, arr.__proto__.__proto__);

console.log(arr instanceof Object);
console.log(arr instanceof Array);
console.log(arr instanceof Citizen);
console.log(zenek instanceof Citizen);

console.log(Object.getPrototypeOf(arr));
console.log(arr.__proto__.constructor);
