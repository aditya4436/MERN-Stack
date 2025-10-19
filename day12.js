// forEach loop in javascript.
// const arr = [10, 20, 30, 11, 90];
// sum = 0;

// arr.forEach((number) =>{
//     sum += number;
// })
// console.log(sum);
// In forEach loop there are three aruguments out which two are optional.
// In this case index and arr are optional.
// arr.forEach((number, index, arr) =>{
//     console.log(number);
// })

// Filter in javascript
// const arr = [10, 20, 30, 11, 90];
// sum = 0;

// const newArray = arr.filter((number) => number > 25);
// console.log(newArray);

// Map a function of javscript in javascript
// const products = [
//   {
//     id: 1,
//     name: "Laptop",
//     category: "Electronics",
//     price: 1200,
//     inStock: true,
//   },
//   {
//     id: 2,
//     name: "Headphones",
//     category: "Electronics",
//     price: 200,
//     inStock: false,
//   },
//   {
//     id: 3,
//     name: "Smartphones",
//     category: "Electronics",
//     price: 800,
//     inStock: true,
//   },
// ];

// const ans = products.map((product) => ({name: product.name, price: product.price}));
// console.log(ans);

// Reduce in javascript
// const totalPrice = products.reduce((accumulator, currentValue) => {
//   if (currentValue.inStock) {
//     return accumulator + currentValue.price;
//   } 
//   else {
//     return accumulator;
//   }
// }, 0);
// console.log(totalPrice);

// Set in javascript
// const arr = [10, 20, 30, 10, 25, 15, 10, 20];
// console.log(arr);

// const s1 = new Set(arr);
// console.log(s1);
// console.log(s1.has(20));

// console.log(s1.delete(20));
// console.log(s1);

// const email = ["ak@gm", "bk@gm", "ck@gm", "ak@gm"];
// const s1 = new Set(email);

// for(let num of s1){
//     console.log(num);
// }

// Map in javascript
const m1 = new  Map([
    ["Aditya", 26],
    [2, "Kumar"],
    [true, 11],
    [10, 30, 11, "Mohit"]
])
console.log(m1);
m1.set({name: "Mansih", age:26}, false);
console.log(m1);
console.log(m1.has("Aditya"));

for(let [keys, value] of m1){
    console.log(keys, value);
}