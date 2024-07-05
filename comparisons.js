// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);
// console.log(2 === 1);

console.log(null > 0); // converts null to 0
console.log(null == 0);
console.log(null >= 0); // converts null to 0 then checks

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);
/*
avoid such conversions
*/
console.log("2" === 2);