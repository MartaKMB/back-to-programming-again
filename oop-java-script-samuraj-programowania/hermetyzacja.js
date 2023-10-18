class Cat {
  constructor(color) {
    this._color = color;
  }

  getColor() {
    return this._color;
  }

  setColor(newColor) {
    if (typeof newColor === 'string') {
      return (this._color = newColor);
    } else {
      console.log('nieprawidłowa wartość');
    }
  }
}

const kotek = new Cat('czarny');
// kotek.setColor('biały');
// kotek.setColor(1);

class Dog {
  constructor(name, color) {
    this.name = name;
    let _color = color;

    this.getColor = () => _color;
    this.setColor = (newColor) => (_color = newColor);
  }
}

const piesek = new Dog('Fafik', 'czarny');
// piesek.getColor();
// piesek.setColor('biały');

class Car {
  constructor(name, counter = 100000, year = 2000) {
    this.name = name;
    let _counter = counter;
    let _year = year;
    let _changeNumber = 0;

    this.getYear = () => _year;

    this.setCounter = (newValue) => {
      _changeNumber++;
      return (_counter = newValue);
    };

    this.getCounter = () => {
      if (_changeNumber) {
        console.log(`Uwazaj, silnik zmieniony ${_changeNumber} razy`);
      }
      return _counter;
    };

    this.showCarAge = (currentYear) => currentYear - _year;
  }
}

const polonez = new Car('polonez caro', 25000, 2009);
// polonez.getYear();
// polonez.setCounter(10000);

// PRYWATNE METODY

class Person {
  #firstName;
  #lastName;

  constructor(firstName, lastName) {
    this.#firstName = firstName;
    this.#lastName = lastName;
  }

  #fullName() {
    return `${this.#firstName} ${this.#lastName}`;
  }

  introduceYourslef() {
    return `Hello! My name is ${this.#fullName()}`;
  }
}

const czlowiek = new Person('Wojtek', 'Kowalski');
// console.log(czlowiek.fullName());
// console.log(czlowiek.#firstName);
console.log(czlowiek.introduceYourslef());
