// function handleClick(){
//     const element = document.getElementById("first");
//     element.textContent = "Strike has arrived";
//     element.id = "second";
// }

// const element = document.getElementById("first");
// element.onclick = function handleClick(){
//     element.textContent = "Strike has arrived";
// }

// This will override the above the function hence this method is
// not recommended.
// element.onclick = function handleClick(){
//     element.textContent = "I am the best";
// }

// element.addEventListener('click', ()=>{
//     element.textContent = "I am the best";
// })

// element.addEventListener('click', ()=>{
//     element.style.backgroundColor = "brown";
// })

// const child1 = document.getElementById("child1");
// child1.addEventListener('click',()=>{
//     child1.textContent = "I am clicked";
// })

// const parent = document.getElementById("parent");
// console.log(parent.children);

// for(let child of parent.children){
//     child.addEventListener('click', ()=>{
//         child.textContent = "I am Clicked";
//     })
// }

// addEventListener also give objects below 'e' which is passed as argument
// in the function is the object we can use this object for every addEventListener
// function.
const grandparent = document.getElementById("grandparent");
grandparent.addEventListener('click', (e)=>{
    console.log(e);
    console.log("Grandparent is clicked");
}, true)

const parent = document.getElementById("parent");
parent.addEventListener('click', ()=>{
    console.log("Parent is clicked");
}, true)

const child = document.getElementById("child");
child.addEventListener('click', ()=>{
    console.log("Child is clicked");
}, true)