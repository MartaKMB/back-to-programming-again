const friendsMap = new Map();

friendsMap.set('ty', ['alicja', 'bartek', 'cecylia']);
friendsMap.set('bartek', ['janusz', 'patrycja']);
friendsMap.set('alicja', ['patrycja']);
friendsMap.set('cecylia', ['tamara', 'jarek']);
friendsMap.set('janusz', []);
friendsMap.set('patrycja', []);
friendsMap.set('tamara', []);
friendsMap.set('jarek', []);

const personIsSeller = (name) => name.includes('m');

const searchMangoSeller = (name) => {
  let searchQueue = [];
  searchQueue.push(...friendsMap.get(name));
  let searched = [];
  while (searchQueue.length > 0) {
    let person = searchQueue.shift();
    if (!searched.includes(person)) {
      if (personIsSeller(person)) {
        console.log(person, ' sprzedaje mango!');
        return true;
      } else {
        searchQueue.push(...friendsMap.get(person));
        searched.push(person);
      }
    }
  }
  return false;
};

searchMangoSeller('ty');
