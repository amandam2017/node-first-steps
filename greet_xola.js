//use figlet
const figlet = require('figlet');
//use chalk
const chalk = require('chalk');
//import the greet module that is in the current folder
const greet = require('./greet');

const styledMessage = chalk.bgGreen.black(figlet.textSync(greet('Xola')));

console.log(styledMessage);