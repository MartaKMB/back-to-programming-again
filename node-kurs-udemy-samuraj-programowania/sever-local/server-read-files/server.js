const http = require('http');
const fs = require('fs');
const path = require('path');

const port = process.env.PORT || 3000;

const users = [
    {name: "adam", id: 1},
    {name: "ewa", id: 2}
]

http.createServer((req, res) => {
    res.writeHead(200, {'Content-type': 'text/html; charset=utf-8' })
    switch(req.url) {
        case '/':
            fs.readFile(path.join(__dirname, 'index.html'), (err, page) => {
                if(err) res.end('<p>nie udało się wczytać pliku</p>')
                else res.end(page)
            })
            // res.end('<p>strona główna</p>');
            break;
        case '/users':
            fs.readFile(path.join(__dirname, 'users.html'), (err, page) => {
                if(err) res.end('<p>nie udało się wczytać pliku</p>')
                else res.end(page)
            })
            // res.end('<p>strona uzytkownikow</p>');
            break;
        case '/api/users':
            res.writeHead(200, {'Content-type': 'application/json; charset=utf-8' })
            const usersJSON = JSON.stringify(users);
            res.end(usersJSON);
            break;
        case '/code.js':
            res.writeHead(200, {'Content-type': 'application/javascript; charset=utf-8' })
            res.end('console.log("przekazany JS")')
            break;
        case '/script.js':
            fs.readFile(path.join(__dirname, 'script.js'), (err, page) => {
                if(err) res.end('<p>nie udało się wczytać pliku</p>')
                else res.end(page)
            })
            break;
        default:
            res.end('<p>strona nie istnieje</p>')
    }
}).listen(port, '127.0.0.1', () => console.log('serwer nasługuje na porcie: ', port));