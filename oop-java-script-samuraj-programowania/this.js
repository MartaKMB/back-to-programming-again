// 'use strict';

// THIS [1/4]
// console.log(this);

const fn = function () {
  //   console.log(this.example);
  console.log(this.name);
};

function fn2() {
  console.log(this.example2);
}

const fn3 = () => console.log(this.example3);

// fn();
// fn2();
// fn3();

const obj = {
  name: 'Adam',
  fnForObj: fn,
};
// obj.fnForObj();

const funRef = fn;
// funRef();

const funOutside = obj.fnForObj;
// funOutside();

// document.addEventListener('click', function () {
//   console.log('document', this);

//   const inside = function () {
//     // 'use strict';
//     console.log('inside: ', this);
//   };

//   inside();
// });

// THIS [2/4]

function showName() {
  console.log(this.name);
}

const karol = {
  name: 'Karol',
  showName: showName,
};

const tatiana = {
  name: 'Tatiana',
  showName: showName,
};

// karol.showName();
// tatiana.showName();

function one() {
  //   'use strict';
  console.log('pierwsza: ', this);
  this.name = 'pierwsza';
  return this.name;
}
// one();

const object1 = {
  two: one,
  four: function () {
    console.log('four: ', this);
  },
};
// object1.two();

const three = object1.two;
// three();

// object1.four();

const five = object1.four;
// five();

// THIS [3/4]

const user = {
  age: 45,
  showAge() {
    console.log('Wiek: ', this.age);
  },
  showAgeArrowFun: () => console.log('Wiek w arrow fun: ', this.age),
};

// user.showAge();
// user.showAgeArrowFun();

const stefan = {
  age: 20,
  showAge: user.showAge,
};

// stefan.showAge();

const human = {
  pesel: 202020202,
};

const showPesel = function () {
  console.log(`Twój pesel to: ${this.pesel}`);
};

// showPesel();
// showPesel.call(human); // apply

const showUser = function (name, age) {
  console.log(`Uytkownik ${name}, w wieku ${age} lat, ma pesel: ${this.pesel}`);
};

// showUser.call(human, 'Tomasz', 42);

const showPeselUser = showPesel.bind(human);
// showPeselUser();

// THIS [4/4]

const szarik = {
  children: ['fafik', 'zaba'],
  showChildren: function () {
    this.children.forEach(function (dogChild, index) {
      //   console.log(this);
      console.log(`Dziecko: ${this.children[index]}`);
    });
  },
};
// szarik.showChildren();

const szarik2 = {
  children: ['fafik', 'zaba'],
  showChildren: function () {
    const that = this;
    this.children.forEach(function (dogChild, index) {
      console.log(`Dziecko: ${that.children[index]}`);
    });
  },
};
// szarik2.showChildren();

const szarik3 = {
  children: ['fafik', 'zaba'],
  showChildren: function () {
    for (child of this.children) {
      console.log(`Dziecko: ${child}`);
    }
  },
};
// szarik3.showChildren();

const szarik4 = {
  children: ['fafik', 'zaba'],
  showChildren: function () {
    this.children.forEach((dogChild, index) => {
      console.log(`Dziecko: ${this.children[index]}`);
    });
  },
};
// szarik4.showChildren();

const szarik5 = {
  children: ['fafik', 'zaba'],
  showChildren: function () {
    this.children.forEach(
      function (dogChild, index) {
        console.log(`Dziecko: ${this.children[index]}`);
      }.bind(this)
    );
  },
};
// szarik5.showChildren();
