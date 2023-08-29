const printInConsole = (txt, number) => {
  for (let i = number; i >= 0; i--) {
    console.log(txt, i);
  }
};

printInConsole('przykład: ', 1000);

document.addEventListener('click', () => {
  console.log('click');
});

setInterval(() => printInConsole('next przykład: ', 10000), 5000);

fetch('http://api.nbp.pl/api/cenyzlota/last/10?format=json')
  .then((res) => res.json())
  .then((data) => console.log('nbp data: ', data));

const promise = new Promise((resolve, reject) => {
  const data = '{"name": "Jan", "age": 20}';
  resolve(data);
  //   reject('promise rejected');
});

promise
  .then((jsonData) => {
    const data = JSON.parse(jsonData);
    console.log('promise data: ', jsonData, data);
    return data;
  })
  .then((data) => console.log('name from promise ', data.name))
  .catch((err) => console.log('err: ', err))
  .finally(() => console.log('final'));

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve('promise 2'), 2000);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve('promise 3'), 1000);
});

Promise.all([promise, promise2, promise3])
  .then((data) => console.log('Promise all: ', data))
  .catch((err) => console.log('Promise all err: ', err))
  .finally(() => console.log('Promise all final'));

console.log('after promise');
