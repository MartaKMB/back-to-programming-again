const familyArray = [
  'Dorota',
  'Adam',
  'Jakub',
  'Marek',
  'Agata',
  'Maja',
  'Henryk',
  'Justyna',
  'Mariusz',
  'Marta',
];

familyArray.push('Koniec');
familyArray.unshift('Początek');

familyArray.pop();
// const deleteExample = familyArray[0];
familyArray.shift();

console.log('Muchogród: ', familyArray);

const hovawartArray = ['Iula', 'Ziri', 'Akcja', 'Czikita'];
const lagottoArray = ['Calka', 'Oups', 'Pongo'];

const lasKsiezniczekArray1 = hovawartArray.concat(lagottoArray);
const lasKsiezniczekArray2 = [...hovawartArray, ...lagottoArray, 'Fibi'];

console.log('Las Księzniczek: ', lasKsiezniczekArray2);

const carArray = [
  'Błękitna strzała',
  'Waldi',
  'Czesiu',
  'Samochód przyszłości',
];

const actualCar = carArray.slice(2, 3);
const firstCar = carArray.slice(-4, -3);
// slice NIE ZMIENIA tablicy

console.log(
  'moje samochody: ',
  carArray,
  'mój pierwszy: ',
  firstCar,
  'aktualnie jezdzę: ',
  actualCar
);

const animalArray = [
  'kanarek',
  'słoń',
  'kot',
  'pies',
  'koń',
  'kura',
  'zółw',
  'rybka',
];

const notOurAnimalsArray = animalArray.splice(0, 2);
// splice ZMIENIA tablicę, usuwa elementy i zwraca te usunięte

// czyszczenie tablicy
// animalArray.splice(0);
// animalArray.length = 0;

const correctAnimalName = animalArray.splice(-1, 1, 'rybka akwariowa');

console.log(
  'zwierzęta Muchogrodu: ',
  animalArray,
  'poprawiona ostatnia pozycja: ',
  correctAnimalName,
  ' tych nie ma: ',
  notOurAnimalsArray
);

const citiesArray = ['Stęszew', 'Rosin', 'Kopanica'];

citiesArray.sort();
// sort ZMIENIA tablicę

console.log('Gdzie są Muchy? ', citiesArray);

const indexOfMyCity = citiesArray.indexOf('Stęszew');
const isMyCityInArray = citiesArray.includes('Stęszew');

console.log(
  'Ja mieszkam w mieście o indeksie: ',
  indexOfMyCity,
  isMyCityInArray
);

const gasaArray = ['masaz', 'relaksacyjny', 'zwierząt'];

const gasaString = gasaArray.join('-');

console.log('Czym jest GaSa? ', gasaString);

// tworzenie tablicy ze stringa
const gasaBackToArray = gasaString.split('-', 2);

console.log('Czym jest GaSa w tablicy: ', gasaBackToArray);

familyArray.reverse();
// reverse ZMIENIA tablicę

console.log('Ostatni będą pierwszymi: ', familyArray);
