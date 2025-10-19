
// // Array is data stucture that stores data of homogeneous datatypes.
// // But in javascript we can store heterogeneous datatypes in array
// // therefore in javascript array is not array it is an boject. This are mutable.

// let marks = [100, 80, "Aditya", 93];
// console.log("The size of the array is: ", marks.length);
// console.log("The array elements are: ", marks);
// console.log(typeof marks);

// marks[1] = 90;
// console.log("The array elements after updating index 1 are: ", marks);

// // Push function is used to insert an element at the end of amn array.
// marks.push(67);
// marks.push(`strike`);
// console.log("The array elements are: ", marks);

// // Pop function is used delete an element from the end of the array.
// marks.push();
// console.log("The array elements are: ", marks);

// // Unshift is used to insert at the beginning.
// marks.unshift(10);
// marks.unshift(50);
// console.log(marks);

// // Shift is used to delete from the beginning.
// marks.shift();
// marks.shift();
// console.log(marks);

// let arr = [21, 12, 32, 23, 34, 43];
// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }

// console.log("\n");

// Another method to iterate over the array. This is called "for of loop".
// for(let num of arr){
//     console.log(num)
// }

// let arr1 = [1, 3, 5, 7, 9];
// let arr2 = arr1;

// arr2.push(10);
// console.log("Array 2: ", arr2);

// // Since objects(non - primitive) is copied by reference hence arr1 will also get updated.
// // Primitive:- Copy by value.

// console.log("Array 1: ", arr1);

// This will give an error because we are changing thre entire array
// which changes the address of the array.
// const arr1 = [1, 3, 5, 7, 9];
// arr1 = [10, 30, 40];
// console.log(arr1);

// This will not give an error because here we not changing the entire array
// it is changing the value at the index 0
// const arr1 = [1, 3, 5, 7, 9];
// arr1[0] = 10;
// console.log(arr1);

// With slice original array is not changed.
// const arr = [1, 3, 5, 7, 9];
// const arr2 = arr.slice(2, 4);
// console.log("Original array: ", arr);
// console.log("Sliced array: ", arr2);

// With splice the original array is changed.
// Splice and Slice both first 2 argument are starting index and the last index
// const arr = [1, 3, 5, 7, 9];
// const arr2 = arr.splice(2, 4);
// console.log("The elements that are removed from the array: ", arr2);
// console.log("Original array after removing the elements: ", arr);


// With the help of splice in which first two argunments are starting index and the last index
// after that if we insert another arguments than that argument will take place of the removed
// element.
// const arr = [1, 3, 5, 7, 9];
// const arr2 = arr.splice(2, 4, "Aditya", 1);
// console.log("The elements that are removed from the array: ", arr2);
// console.log("Original array after removing the elements: ", arr);

// const arr = [1, 3, 5, 7, 9];
// const arr1 = ["Aditya", 1, true];
// const arr2 = [90, 70, false];

// concat() function used to merge but with this method a new array is created.
// const arr3 = arr.concat(arr1, arr2);
// (...) three dots are known as spread operator.
// const arr3 = [...arr, ...arr1, ...arr2];
// console.log(arr3);

// // toString():- This converts array to string.
// const names = ["Alice", "Aditya", "Bob", "Suraj", "Charlie"];
// // console.log(typeof names.toString());

// names.sort();
// console.log(names);

// const arr = [101, 90, 80, 32, 91];
// arr.sort();

// In javascript sort() function treats each the elements in character format
// and hence sorting is done on the basis of ASCII value. The reason is that in
// javascript the array stores heterogeneous data that is mixture of string, boolean,
// character, number, special characters etc that's why the sorting is done by ASCII value.
// console.log(arr);

// const arr = [101, 90, 80, 32, 91];
// arr.sort((a, b) => a - b);
// console.log("Ascending Order: ", arr);

// arr.sort((a, b) => b - a);
// console.log("Descending Order: ", arr);