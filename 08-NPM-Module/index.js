import chalk from 'chalk';
import validator from 'validator';

const result = validator.isEmail('madhavrjha@gmail.com');
console.log(result ? chalk.green.inverse(result): chalk.red.inverse(result));