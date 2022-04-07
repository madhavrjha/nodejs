const os = require('os');

const freeMemory = (os.freemem() / (1024 * 1024)).toFixed(2);
const totalMemory = (os.totalmem() / (1024 * 1024)).toFixed(2);

console.log(`You are using the ${os.arch()} Architecture`);
console.log(`You Have ${freeMemory} MB Free in Memory from ${totalMemory} MB`);
console.log(`The Name of Your System is ${os.hostname()}`);
console.log(`Location of Your Temporary Directory is ${os.tmpdir()}`);
console.log(`You are Using ${os.platform()} Platform`);
console.log(`You are Using ${os.type()} Operating System`);