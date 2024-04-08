console.log('jestem w app.js');

// const notes = require('./notes');
// console.log(notes.txt);

// const counter = require('./counter');

// counter();
// counter();
// counter();

// counter.add(3);
// counter.add(33);

const users = require('./users');

users.showUsers();
users.showUserObj(2);

console.log(users.userListLength);
