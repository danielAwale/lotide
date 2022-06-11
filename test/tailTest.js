const assertEqual = require('../assertEqual');
const tail = require('../tail');

 
const words = [1,2,3,4,5,6,7,8,9];
tail(words);
assertEqual(words.length, 9);