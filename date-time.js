// Dates

let myDate = new Date()
console.log(myDate.toString());

console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(typeof(myDate));

let newDate = new Date(2023, 0 , 23) // custom date, also months start from zero

console.log(newDate.toDateString());

// for formats

let customDate = new Date("01-14-2023") // array main 1 se start hoga zero se ni
console.log(customDate.toLocaleDateString());;

let myTimeStamp = new Date()

console.log(myTimeStamp);
console.log(myTimeStamp);

console.log(customDate.getTime()); // values in milisecond

console.log(Math.floor(Date.now()/1000)); //converting to seconds


let defDate = new Date()

console.log(defDate.getFullYear());

let displayDate = defDate.toLocaleString('default', {
    weekday: "long",
    hour: "2-digit",
})

console.log(displayDate);
