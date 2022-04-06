const fs = require('fs');

// Create a Folder named Thapa

fs.exists('./Thapa', exists => {
  if (!exists) {
    fs.mkdir('./Thapa', error => {
      if (error) throw error;
      console.log('A Folder is Created Named Thapa');
    });
  } 
  else {
    console.log('Folder is Already Present');
  }
});

// Create a File named bio.txt

fs.exists('./Thapa/bio.txt', exists => {
  if (!exists) {
    fs.writeFile('./Thapa/bio.txt', 'Hey, am Madhav', error => {
      if (error) throw error;
      console.log('File Has been Created with Bio.txt');
    });
  }
  else {
    console.log('File is Already Present');
  }
});

// Append Data Into File

fs.exists('./Thapa/bio.txt', exists => {
  if (exists) {
    fs.appendFile('./Thapa/bio.txt', ', How are You?', error => {
      if (error) throw error;
      console.log('File has been appended with Some Data');
    })
  }
  else {
    console.log('File does not Exists');
  }
});

// Read the Data

fs.readFile('./Thapa/bio.txt', 'utf-8', (error, data) => {
  if (error) throw error;
  console.log('File data has been read and here it is...');
  console.log(data);
});

// Rename File

fs.rename('./Thapa/bio.txt', './Thapa/mybio.txt', error => {
  console.log(error);
});

// Delete File & Folder

fs.unlink('./Thapa/mybio.txt', (error) => {
  if (error) throw error;
  console.log('File has been deleted');

  fs.rmdir('./Thapa', error => {
    console.log('Folder has been removed');
  });
});