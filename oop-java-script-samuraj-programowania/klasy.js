// KLASY [1/2]

class FamilyFirstClassAttempt {
  constructor(name) {
    this.name = name;
  }

  addMember(memberName) {
    console.log('Nowy członek rodziny: ', memberName);
  }
}

const nowakowie = new FamilyFirstClassAttempt('Nowakowie');
nowakowie.addMember('Małgosia');

class Family {
  constructor(members, ...names) {
    this.members = members;
    this.names = names;
  }

  addMember(newMember) {
    this.members++;
    this.names.push(newMember);
    console.log(
      'Nowy członek rodziny to: ',
      newMember,
      ' rodzina liczy teraz: ',
      this.members,
      'osób'
    );
  }

  static makeFamily(...members) {
    return members;
  }
}

const kowalscy = new Family(3, 'Jan', 'Ewa', 'Adam');
kowalscy.addMember('Jan Junior');
kowalscy.addMember('Małgosia');

const kwiatkowscy = new Family(1, 'Andrzej');
kwiatkowscy.addMember('Kornelia');

Family.makeFamily('Szymon', 'Natalia');

// KLASY [2/2]

class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  breathe() {
    console.log('Zwierzę oddycha.');
  }
}

const zwierze = new Animal('Tubiś', 2);
zwierze.breathe();

console.log(zwierze.__proto__ === Animal.prototype);

class Mammal extends Animal {
  constructor(name, age, hairs) {
    super(name, age);
    this.hairs = hairs;
  }

  drinkMilk() {
    console.log('Ssaki piją mleko.');
  }
}

const ssak = new Mammal('Tutek', 3, 'blond');
ssak.breathe();
ssak.drinkMilk();

class Human extends Mammal {
  constructor(name, age, hairs, language) {
    super(name, age, hairs);
    this.language = language;
  }

  speak() {
    console.log(`Język, w którym mówi ${this.name}, to: ${this.language}`);
  }
}

const wojtek = new Human('Wojtek', 18, 'rudy', 'włoski');
wojtek.speak();
wojtek.drinkMilk();
