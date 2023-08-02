console.log('main.js');

for (let i = 0; i < 10; i++) {
  console.log('wyświetlenie for: ', i);
}

let i = 0;

for (; i < 10; ) {
  i++;
  console.log('ciekawostka for jak while: ', i);
}

let number = 0;

while (number < 10) {
  number++;
  console.log('wyświetlenie while: ', number);
}

let money = 30;

while (money >= 8) {
  console.log('Mam jeszcze: ', money, 'zl - idę na lody!');
  money -= 8;
}

console.log(`Za ${money} zł, juz lodów nie kupię. :(`);

let gasoline = 8;
let km = 0;

while (--gasoline) {
  km += 18;
  console.log(
    `Przejechaliśmu ${km} kilometrów. Zostało nam jeszcze ${gasoline} benzyny`
  );
}

let study = 'nie, juz nie muszę';

do {
  console.log('idę do szkoły');
} while (study === true);

for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 2; j++) {
    console.log(
      `zmienna i czyli ${i} pomnozona przez zmienna j czyli ${j}, da wynik ${
        i * j
      }`
    );
  }
}

let usersAge = [19, 23, 56, 79, 90, 34, 12];

for (let i = 0; i < usersAge.length; i++) {
  console.log(`uzytkownik o indeksie ${i} ma ${usersAge[i]} lat`);
}

let usersDateBirth = [2005, 1992, 1932, 1980, 1986];
const date = new Date();
const currentYear = date.getFullYear();

for (let i = 0; i < usersDateBirth.length; i++) {
  const userAge = currentYear - usersDateBirth[i];
  console.log(
    `wiek uzytkownika o indeksie ${i}, urodzonego w roku ${usersDateBirth[i]} to ${userAge}`
  );
}

let guest = [
  'piłkarz',
  'kucharz',
  'zoofizjoterapeuta',
  'pisarz',
  'programista',
  'polityk',
  'magazynier',
  'emeryt',
];

for (let i = 0; i < guest.length; i++) {
  if (guest[i] === 'zoofizjoterapeuta') {
    console.log(
      `przepraszam nie ma juz miejsca / to jest podejrzane, istnieje zawod ${guest[i]}?`
    );
  } else if (guest[i] === 'polityk') {
    console.log(
      `ojej, nie ma ju miejsc / nie wpuszczac! ${guest[i]} zepsuje kazda impreze!`
    );
  } else {
    console.log(`Witamy Panie ${guest[i]}! Zapraszamy!`);
  }
}

let colors = ['red', 'orange', 'black', 'green', 'white'];

for (const color of colors) {
  console.log('kolor z tablicy: ', color);
}

const h = 5;

for (let i = 1; i <= h; i++) {
  let stars = '';

  for (let j = 1; j <= i; j++) {
    stars += '*';
  }

  console.log(stars);
}
