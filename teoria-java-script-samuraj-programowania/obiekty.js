const cat = new Object();

cat.name = 'Dekiel';
cat['age'] = 13;
cat['eye color'] = 'yellow';
cat.meow = function () {
  console.log('miau, miau');
};

cat.meow();

const dog = {
  name: 'Gandzia',
  age: 12,
  'eye color': 'brown',
  barking: function () {
    console.log('hau hau');
  },
  squeaking() {
    console.log('aaa uuuuu eeee');
  },
};

dog.barking();

dog.castrated = true;
dog.children = ['Kinga', 'Maks', 'Maja'];

console.log(`Gandzia opiekuje się dziećmi: ${dog.children.concat('')}`);

console.log(dog['eye color']);
delete dog['eye color'];
console.log(dog['eye color']);

console.log(`Moje zwierzęta to: ${cat.name} i ${dog.name}. <3`);

const result = {
  value: 1,
};

function plus() {
  result.value++;
}

plus();
console.log(`wartość po wywołaniu funkcji: ${result.value}`);

const counter = {
  score: 0,
  increment() {
    this.score++;
    console.log(this.score);
  },
};

counter.increment();
counter.increment();
