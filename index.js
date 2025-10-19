// variables in javascript
let name = "Aditya";
let age = 20;

console.log(name, age)

const account = 1234;
console.log(account);

// Since we are using const keyword we cannot change the value of account
// the below code will throw error.
// account = 23;
// console.log(account);


// Datatypes in javascript:- 1. Primitive and 2. Non-Primitive.
// Primitive Datatypes:- number, string, boolean, undefined, null, bigint, symbol.

// Number
let a = 10;
let b = 20;
console.log(a, b);

// String
let c = "Strike is coming.";
let d = 'Kumar';
console.log(c, d);

// Boolean
let login = true;
let f = false;
console.log(login, f);

// Undefined: when no value is assigned to a variable.
let user;
console.log(user);

// Bigint
let num = 1227647324861298462356892378n;
console.log(num);

// Null
let weather = null;
console.log(weather);

// SymbolA
const id1 = Symbol("id");
const id2 = Symbol("id");
console.log(id1, id2);

// console.log(id1 == id2), this will return false.

// Non-Primitive Datatypes:- array, object, function, in this datatype 
// every datatype is of object type.

// Array:
let arr = [12, 21, 11, 'Aditya', true];
console.log(arr);

// Obejct
let user1 = {
    name : "Aditya",
    account : 12312,
    age : 26,
    category : 'ST'
}
console.log(user1);

// Function
function add(){
    console.log("Hello");
}
add();


let s = function print(){
    console.log("Hello World");
}
// This will print the name of the function.
console.log(s);