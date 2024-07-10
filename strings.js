const name = "Gonza"
const repoCount = 50

// console.log(name + repoCount + " Value");
// above is outdated

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Gonza-FC -com')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('z'));


const newString = gameName.substring(0, 4)
console.log(newString);


const anotherString = gameName.slice(-7, 4) // slice obeys negative values starts from the end
console.log(anotherString);

const newString1 = "     hitesh    "
console.log(newString1);
console.log(newString1.trim());


const url = "hhtps://gona.com//gonza%20fc" // %20 is just blank space left in url that is give n by the browser

console.log(url.replace('%20', '-')); // replace "%20" with "-"

console.log(url.includes('gonza')); // to check if a keyword exists in string or not


console.log(gameName.split('-')); // split the string based on some criteria "-" into array 