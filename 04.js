const fs = require('fs');


fs.writeFile('./data/dummy.data', 'Hey', 'utf-8', (error) => {
  if (error) throw error;
  console.log('Data has been written into File');

  fs.exists('./data/dummy.data', exists => {
    if (!exists) {
      console.log('404: File Not Found');
      return;
    }

    fs.appendFile('./data/dummy.data', ', I am Madhav!!', 'utf-8', (error) => {
      if (error) throw error;
      console.log('Data has been appended into File');
    });
  
    fs.readFile('./data/dummy.data', 'utf-8', (error, data) => {
      if (error) throw error;
      console.log('Data has been read and here it is ...');
      console.log(data);
    });
  
  });
  
});

