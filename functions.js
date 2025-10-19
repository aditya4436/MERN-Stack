// function greetings(){
//     console.log("Hello Aditya");
// }

// If only two values are passed in function call than num3 and num4 will
// be take its default value that initialize in the function itself.
// function addNumber(num1, num2, num3 = 0, num4 = 0){
//     sum = num1 + num2 + num3 + num4;
//     console.log(sum);
// }

// In this case (...) it is known as rest operator.
// function addNumber(...num){
//     let sum = 0;

//     for(let n of num){
//         sum += n;
//     }

//     console.log(sum);
// }

// Here (...) is a spread operator which is used to merge two arrays.
// const arr1 = [10, 20, 30, 40, 50];
// const arr2 = [60, 70, 80, 90, 100];
// const arr = [...arr1, ...arr2];
// console.log(arr);

// Function call.
// // greetings();
// addNumber(2, 3);
// addNumber(2, 3, 4);
// addNumber(2, 3, 4, 5);

// In javascript function can be written in the form of expression.
// const addNumber = function(num1, num2){
//     return num1 + num2;
// }

// console.log(addNumber(2, 4));

// Arrow Function
// const addNumber = (num1, num2)=>{
//     sum = num1 + num2;
//     console.log(sum);
// }

// const squareNumber = num=>{
//     square = num * num;
//     console.log(square);
// }

// If we have only one argument than we don't need to
// encapsulate the variable into parenthesis or (). 
// const cubeNumber = num => num * num * num; 

// In arrow function to handle the object we encapsulate the object
// along with the curly braces, inside the parenthesis i.e., ().
// const greetings = () => ({name: "Aditya", age: 26});

// addNumber(3, 4);
// squareNumber(3);
// console.log(cubeNumber(4));
// console.log(greetings());

// IIFE:- Immediately invoked function i.e., the function is called immediately called.
// (function greetings(){
//     console.log("Helloji");
// })()

// Call - back function()
function greet(){
    console.log("Hello ji, kaise ho?");
}

function meet(callback){
    console.log("I am going to meet someone.");
    callback();
}

// greet is a function which is passed as argument but without parenthesis 
meet(greet);