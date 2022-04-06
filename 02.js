const fs = require('fs');


// Writing Into A File
const user = {
  id: 'madhavrjha',
  name: 'Madhav Jha',
  dob: '30-11-1999',
  country: 'India',
  phone: '9673290693'
}

fs.writeFileSync('./data/user.json', JSON.stringify(user));


// Appending Into File

const users = ['Kajal', 'Amisha', 'Babita', 'Aishvariya', 'Neha', 'Kriti'];
fs.writeFileSync('./data/users.txt', users.toString());

const newUsers = ['Manjri', 'Madhuri', 'Chanda'];
fs.appendFileSync('./data/users.txt', `,${newUsers.toString()}`);

