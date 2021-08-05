"user strict"
console.log('hello');

const MAX_VALUE = 12;
const relatyve_value = 23 + 4;
//////////////////////////////////////////////////////
console.log(typeof relatyve_value);
console.log(relatyve_value);

//////////////////////////////////////////////////////
let number = 14;
console.log(2 + number);
number = String(number);
console.log(2 + number);
//////////////////////////////////////////////////////
let myArray = [[123, 46, 678, 544], [343, 46, 68, 998], [34, 112, 257, 878], [12, 467, 989, 322]];
console.log(myArray[1][2]);
//////////////////////////////////////////////////////
let num_1 = 12, num_2 = 15, myString = '2435';
//////////////////////////////////////////////////////
let userProfil = {
   name: 'Андрій',
   age: 12
}
userProfil.age = '65576'
console.log(userProfil.age);
//////////////////////////////////////////////////////
let bool;
if (12 > 3) {
   console.log("true");
}
//////////////////////////////////////////////////////
let message = "привіт";
let messageEnd = (5 > 1) ? ", Вася!" : ", Оля!";
message += messageEnd;
console.log(message);
console.log("////////////////////////////");

let num = 0;
do {
   console.log(num);
   num++;
} while (num < 5);
console.log('/////////////////////');
function calcSum(numOne, numTwo) {
   result = 1;
   for (let i = 0; i < numTwo; i++) {
      result *= numOne;
   }
   return result;
}
console.log(calcSum(2, 3));
console.log('//////////////////////////////////');
let numse = 212323325;
console.log(numse.toString(16));