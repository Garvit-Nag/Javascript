let score = "33" // if u put "33abc" here it will convert into number but if u print the value it will print NaN

console.log(typeof score); // or console.log(typeof(score));

// want to convert string to number

let valueInNumber  = Number(score) // converts string to number

console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33" -> 33
// "33abc" -> Nan
// true -> 1; false -> 0


let isLoggedIn = 1

let booleanisLoggedIn = Boolean(isLoggedIn)
console.log(booleanisLoggedIn);

// 1 -> true
// "" -> flase
// "Garvit" -> true

let somenumner = 33
let Stringnumber = String(somenumner)
console.log(Stringnumber);
console.log(typeof Stringnumber);



// *********************************** Operations ***************************

let value = 3
let negvalue = -value

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2); // 2^2
// console.log(2/2);
// console.log(2%2);

let str1 = "Hello"
let str2 = " Garvit"
let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

let num1 , num2 ,num3
num1 = num2 = num3 = 2 + 2

let gameCounter = 100
gameCounter++; // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment
console.log(gameCounter);