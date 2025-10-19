// Scope, closure and High Order Function(HOF)

// Closure:- When a function is defined in the function and the inner function can 
//           access the outer variable even after the outer function is closed.
let a = 10;
const b = 20;

const greetings = () =>{
    c = 30;
    console.log(c);
}
if(true){
    console.log(a);
}
greetings();
console.log(a);