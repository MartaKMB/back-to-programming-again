// const Car = function () {};
// function Car() {};

class Car {
  constructor(name) {
    this.name = name;
  }
}

const maluch = new Car('Błękitna Strzała');
const audi = new Car('Waldemar');
const vw = new Car('Czesław');

vw.name = 'Czesio';

console.log(maluch.name, vw.name, audi.constructor);
