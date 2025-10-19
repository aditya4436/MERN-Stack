// Objects:- Stores data in key - value format.

// Creating objects
// const user = {
//     name: "Aditya",
//     age: 26,
//     emailId: "aditya9436967626@gmail.com",
//     amount: 1300,
//     "home address": "Siwan"
// }

// console.log(typeof user);
// console.log(user);

// CRUD Operation:- Its full form is Create, Read, Update and Delete
// Accessing single key value from the object.
// console.log(user.age);
// console.log(user.name);
// console.log(user.emailId);
// console.log(user.amount);

// In object Aadhar number will be updated.
// user.aadhar = 1234;
// user.amount = 4321;
// console.log(user);
// console.log(user.amount);

// This will delete the emailId in the user object.
// delete user.emailId;
// console.log(user);

// Another method to print the data.
// console.log(user["name"]);
// console.log(user["home address"]);

// const user = {
//     name: "Aditya",
//     age: 26,
//     emailId: "aditya9436967626@gmail.com",
//     amount: 1300,
//     "home address": "Siwan"
// }

// Since objects are copied by reference therefore if we alter the
// in user2, the user will also get updated.
// const user2 = user;

// Updating user2 age
// user2.age = 23;
// console.log("This is user2 here we have changed the data:\n", user2);
// console.log("Sonce we have altered the data in user2 here also the object gets updated:\n", user);

// This creates an array and store's the key.
// console.log("Keys of the objects that we have created:\n", Object.keys(user));

// This creates an array and store's the value.
// console.log("\nValues of the object that we have created:\n",Object.values(user));

// This creates an array and store both the key and the value.
// console.log("\nKey and Values of the object that we have created:\n",Object.entries(user));

// Printing key and values using for in loop.
// for(let keys in user){
//     console.log(keys, user[keys]);
// }

// Printing keys using for in loop.
// for(let key of Object.keys(user)){
//     console.log(key);
// }

// Printing values using for in loop.
// for(let value of Object.values(user)){
//     console.log(value);
// }

// Printing values using for in loop by destructuring.
// for(let [keys, values] of Object.entries(user)){
//     console.log(keys, values);
// }

// Printing both key and values using for in loop.
// for(let entry of Object.entries(user)){
//     console.log(entry);
// }

// In Javascript this is called destructuring of object.
// const {name, age} = user;
// console.log(name, age);

// const {name : userName, age : userAge} = user;
// console.log(userName, userAge);

// In Javascript this is called destructuring of array.
// const arr = [10, 20, 30, 40, 50];
// const [first, second] = arr;
// console.log(first, second);

// const user = {
//   name: "Aditya",
//   age: 26,
//   emailId: "aditya9436967626@gmail.com",
//   amount: 1300,
//   "home address": "Siwan",

//   greetings: function () {
//     // console.log(`Strike is coming soon ${user.name}.`);

//     // Below method is recommended.
//     console.log(`Strike is coming soon ${this.name}.`);
//     return 20;
//   },
// };

// Calling the function which is object.
// let a = user.greetings();
// console.log(a);

// Nested Object
const user = {
    name: "Aditya",
    age: 26,
    emailId: "aditya9436967626@gmail.com",
    amount: 1300,
    "home address": "Siwan",

    // Object inside the object.
    address: {
        city: "Pune",
        state: "Maharashtra"
    }
}

// console.log(user);

// This will print the name of the city in which is in the nested object.
console.log(user.address.city);