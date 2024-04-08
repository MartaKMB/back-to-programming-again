const users = [
    {id: 1, name: 'Adam'},
    {id: 2, name: 'Marysia'},
    {id: 3, name: 'Jagna'}
];

module.exports = {
    showUsers() {
        console.log('Uzytkownicy to: ');

        const names = users.map(user => user.name);
        names.forEach(name => console.log(name));
    },

    showUserObj(id) {
        console.log('Szukany uzytkownik:');

        const user = users.find(user => id === user.id);
        console.log(user);
    },

    userListLength: users.length
}