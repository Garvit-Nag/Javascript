// # Primtive  data types

// 7 types : String , Number , Boolean, null, undefined, Symbol, BigInt

const score = 100
const scorevalue = 100.3
const isLoggedIn = false
const outsidetemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId);

const bigNumber = 34515645646546546n

// # Refrence type (non primitve)
// Array, Objects, Functions

const hero = ["Garvit", "Garry", "Gonza"];
let myObj = {
    name: "Garvit",
    age : 22,
}

const myFunction = function(){
    console.log("hello");
}

console.log(typeof bigNumber); // typeof null will be object