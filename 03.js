const fs = require('fs');

// Read JSON Data

if (fs.existsSync('./data/user.json')) {

  const bufferedData = fs.readFileSync('./data/user.json');
  const data = bufferedData.toString();

  const user = JSON.parse(data);
  console.log(user);

} else {
  console.log('404: File Not Found');
}

// Read Array Data

if (fs.existsSync('./data/users.txt')) {
  
  const data = fs.readFileSync('./data/users.txt').toString();
  const users = data.split(',');

  console.log(users);

} else {
  console.log('404: File Not Found');
}

// Rename a File

if (fs.existsSync('./data/sample.data')) {
  fs.renameSync('./data/sample.data', './data/dummy.data');
} else {
  console.log('404: File Not Found');
}