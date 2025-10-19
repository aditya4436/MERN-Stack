// let a = 10;
// let b = 392.321345;

// toFixed():- This function takes one argument and it is used to consider 
//             the required number of digits after decimal point and it converts
//             number to string.
// console.log(b.toFixed(2));

// toPrecisoin():- This function takes one argument and it is used to consider
//                 how many number we want to consider or take display in the output
//                 and this also converts number to string.
// console.log(b.toPrecision(6));

// toString():- This function converts the provided data into string.
// console.log(b.toString());

// This is the another way to declare a number but the type of this will
// be object. Here comparison is done by address.
// let a = new Number(10);
// let b = new Number(10);

// The output will be false since comparison is done by address 
// and a and b have different addresses.
// console.log(a == b);

// Non - Primitive:- Comparision is done on the basis of reference.
// Primitive:- Copy by value.

// console.log(Math.abs(-10));
// console.log(Math.PI);
// console.log(Math.LN10);
// console.log(Math.SQRT2);
// console.log(Math.ceil(2.1));
// console.log(Math.floor(2.1));

// The random function is used to generate random numbers or value
// and the range is 0 - 1, 1 is not included which means 1 will not
// be printed but 0 is included.
// console.log(Math.random());

// We can generalise this as:- Math.floor(Math.random() * totalNumberOfOutcomesRequired) + min.
// totalNumberOfOutcomesRequired = max - min + 1, max is the maximum number that we want to consider
// min = minimum number that we want to consider.
// console.log(Math.floor(Math.random() * 10));
// console.log(Math.floor((Math.random() * 15) + 10));
console.log(Math.floor((Math.random() * (9999 - 1000 + 1) + 1000)));