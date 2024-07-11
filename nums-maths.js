const score = 400
console.log(score); // here js assigns this as number on assumption

const balance  = new Number(100)
console.log(balance); // here we specify the value type as number


console.log(balance.toString());
console.log(balance.toFixed(2));


const otherNumber = 23.87567
const otherNum2 = 123.8759
const otherNum3 = 1123.78456
console.log(otherNumber.toPrecision(3)); 
console.log(otherNum2.toPrecision(3));
console.log(otherNum3.toPrecision(3)); // priotity beofre the decimal , so the numbers before the decimal get the prior for toPrecision

const hundreds = 1000000
console.log(hundreds.toLocaleString());
console.log(hundreds.toLocaleString('en-IN')); // for indian system

/// MATHS 

console.log("the MATHS LIBRARY");


console.log(Math.abs(-4)); // for converting neg to pos
console.log(Math.round(4.7)); // round off

console.log(Math.ceil(4.2)); // upper round off
console.log(Math.floor(4.9)); // lower round off

console.log(Math.sqrt(4)); 

console.log(Math.min(4 ,3 ,6 ,8)); // min vlaue in array 
console.log(Math.max(4 ,3 ,6 ,8)); // max ""
console.log(Math.random());
 console.log((Math.random()*10) + 1); // +1 is to avoid zero
 // IMPORTANT
 const min = 10
 const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) +min) // +1 is to avoid zero