const http = require('http');

const server = http.createServer((req, res) => {

  console.log(req.url);

  if (req.url == '/' || req.url == '/home') {
    res.end('Home');
  }
  else if (req.url == '/about') {
    res.write('About');
    res.end();
  } 
  else if (req.url == '/services') {
    res.write('Services');
    res.end();
  } 
  else {
    res.writeHead(404, {
      'Content-Type': 'text/html'
    });
    res.write('404: Not Found');
    res.end();
  }
});

server.listen(5000, '127.0.0.1', () => {
  console.log('Listening to 127.0.0.1:5000 ...');
});