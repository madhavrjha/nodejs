const http = require('http');

function getBooks () {
    const fs = require('fs');
    if (fs.existsSync('./data/books.json')) {
        const books = fs.readFileSync('./data/books.json', 'utf-8');
        return books;
    } else {
        return JSON.stringify({
            status: '404',
            message: 'books not found'
        });
    }
}

http.createServer((req, res) => {

    if (req.url == '/') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('Hello');
        res.end();
    }
    else if (req.url == '/books') {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.write(getBooks());
        res.end();
    } else {
        res.write('Not a Valid Path');
        res.end();
    }

}).listen(5000, '127.0.0.1', () => {
    console.log('Listening to 127.0.0.1:5000');
});