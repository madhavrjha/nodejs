const fs = require('fs');

const user = {
    name: 'Madhav R. Jha',
    age: 22,
    country: 'India',
    phone: '973290693',
    email: 'madhav99jha@gmail.com'
};

fs.writeFileSync('./data/user.json', JSON.stringify(user));

fs.readFile('./data/user.json', 'utf-8', (err, data) => {
    if (err) throw err;
    console.log(JSON.parse(data));
});