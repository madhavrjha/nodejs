const fs = require('fs');

// Create a folder named Thapa
if (!fs.existsSync('./data/Thapa')) {
  fs.mkdirSync('./data/Thapa');
}

// Create a File named bio.txt with Some Dummy Data
fs.writeFileSync('./data/Thapa/bio.txt', `Hey, am Madhav, Learning NodeJS from Vinod Bahadur Thapa`);

// Appending the File
if(fs.existsSync('./data/Thapa/bio.txt')){
  fs.appendFileSync('./data/Thapa/bio.txt', ', and am committed to 30 days node.js journey without any distractions');
}
else {
  console.log('Folder Already Exists');
}

// Read data without receiving the buffering data
fs.readFileSync('./data/Thapa/bio.txt', 'utf-8', (error, data) => {
  if (error) throw error;
  console.log(data);
});

// Rename The File
if (fs.existsSync('./data/Thapa/bio.txt')) {
  fs.renameSync('./data/Thapa/bio.txt', './data/Thapa/mybio.txt');
}
else {
  console.log(`404: File Not Found. So, Can't Rename`);
}

// Delete the File & Folder

if (fs.existsSync('./data/Thapa/mybio.txt')) {
  fs.unlinkSync('./data/Thapa/mybio.txt');
}
else {
  console.log(`404: File Not Found. So, can't Delete`);
}

if (fs.existsSync('./data/Thapa/')) {
  fs.rmdirSync('./data/Thapa/');
}
else {
  console.log(`404: Folder Not Found. So, can't Delete`);
}