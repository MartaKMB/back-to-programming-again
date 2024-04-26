const http = require('http');

const port = process.env.PORT || 3000;

http.createServer((req, res) => {
    // res.write('<h1>Mój pierwszy serwer! :)</h1>');
    if(req.url === '/') {
        res.writeHead(200, {'Content-type': 'text/html; charset=utf-8' })
        res.write('<h2>strona główna</h2>')
        res.end();
    } else if(req.url === '/users') {
        res.writeHead(200, {'Content-type': 'text/html; charset=utf-8' })
        res.write('<h2>strona uzytkowników</h2>')
        res.end();
    } else {
        res.writeHead(404, {'Content-type': 'text/html; charset=utf-8' })
        res.write('<h2>brak strony o podanym adresie</h2>')
        res.end();
    }
}).listen(port, '127.0.0.1', () => console.log('serwer nasługuje na porcie: ', port));