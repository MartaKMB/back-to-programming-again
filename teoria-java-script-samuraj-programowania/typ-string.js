const userName = 'Janusz Nowak';
const secondLetter = userName[1]; // userName.charAt(1)

console.log('metody dla stringów: ', userName.toUpperCase(), userName.toLocaleLowerCase());

// metody - coś robią, metofy wywołujemy
// właściwości - coś zawierają

console.log('właściwości dla stringów: ', userName.length == userName['length']);

console.log('łączenie stringów: ', userName.concat(" - fajne imię!", " i super!"), userName + ' - imię nadal fajne!', `${userName} - fajne imię w gravisie`);

console.log('czy znak występuje? ', userName.indexOf('d'), userName.indexOf('usz'), userName.lastIndexOf('a'), userName.includes('o'));

const txtWithSpaces = '   słowo  ';
console.log('trim, repeat: ', txtWithSpaces, txtWithSpaces.trim(), txtWithSpaces.trim().repeat(3));

const slideWord = userName.slice(7,12);
console.log('wycinanie nazwiska: ', slideWord);

const singleQuoteExample1 = "i'm Marta";
const singleQuoteExample2 = 'i\'m Marta';

const slashExample = 'ktos\\cos';
const longTxt = 'tekst \n tekst';

const superTxt = `tekst
tekst w nowej linii
cudzysłów "
koniec`

console.log(singleQuoteExample2, slashExample, longTxt, superTxt);

console.log('zamiana na string', String(100), 200..toString(), 200..toString(16), "" + 300);
