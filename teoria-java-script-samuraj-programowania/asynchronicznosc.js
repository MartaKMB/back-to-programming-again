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

function lessonCallback(lessonNumber, callback) {
  console.log(`I am learning lesson ${lessonNumber}`);
  setTimeout(() => {
    callback();
  }, 2000);
}

lessonCallback(1, () => {
  lessonCallback(2, () => {
    lessonCallback(3, () => {
      console.log('lessonCallback');
    });
  });
});

function lessonPromise(lessonNumber) {
  return new Promise((resolve, reject) => {
    console.log(`I am learning lesson ${lessonNumber}`);
    setTimeout(() => {
      resolve();
    }, 2000);
  });
}

lessonPromise(1)
  .then(() => lessonPromise(2))
  .then(() => {
    console.log('lessonPromise');
    return lessonPromise(3);
  });

function fetchData(url) {
  return new Promise((resolve, reject) => {
    console.log('wysłany request');
    fetch(url)
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch((err) => reject(err));
  });
}

fetchData('https://jsonplaceholder.typicode.com/users/10')
  .then((data) => console.log('DATA: ', data))
  .catch((err) => console.log('ERROR: ', err))
  .finally(() => console.log('zakończono'));

async function lessonAsyncAwait(lessonNumber) {
  await lessonPromise(1);
  await lessonPromise(2);
  await lessonPromise(3);
  console.log('koniec lessonAsyncAwait');
}

lessonAsyncAwait();

async function fetchDataAsyncAwait() {
  try {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/users/10'
    );
    const users = await response.json();
    console.log('fetchDataAsyncAwait USERS: ', users);
  } catch (error) {
    console.log('fetchDataAsyncAwait ERROR: ', error);
  }
}

fetchDataAsyncAwait();

const waitForMe = (time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //   resolve(`Czekano na odpowiedź ${time}ms`);
      reject(`Czekano na odrzucenie ${time}ms`);
    }, time);
  });
};

(async () => {
  try {
    const result = await waitForMe(1222);
    console.log('RESULT: ', result);
  } catch (err) {
    console.log('ERROR: ', err);
  }
})();
