const path = require('path');

const fileLocation = 'e:/user/bin/hello/madhav.jpg';

console.log(`Our Path is '${fileLocation}'`);

console.log(`The Directory is ${path.dirname(fileLocation)}`);
console.log(`The Extension is ${path.extname(fileLocation)}`);
console.log(`The File Name is ${path.basename(fileLocation)}`);

const  fileLocationObj = path.parse(fileLocation);

console.log(`

  Directory Name:     ${fileLocationObj.dir}
  Base Name:          ${fileLocationObj.base}
  Extension:          ${fileLocationObj.ext}
  File Name:          ${fileLocationObj.name}
  Root:               ${fileLocationObj.root}

`);