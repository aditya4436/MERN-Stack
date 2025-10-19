const newElement = document.createElement("h2");
newElement.textContent = "Strike is coming.";
newElement.id = "second";

// Select Element After or before which you want insert the newElement.
const element = document.getElementById("first");
// element.before(newElement);
element.after(newElement);

const newElement2 = document.createElement("h3");
newElement2.textContent = "Diwali is coming"
newElement2.id = "third";

// newElement2.className = "diwali";
// // Giving another class name to newElement2
// newElement2.className += " Holi";

newElement2.classList.add("Diwali");
newElement2.classList.add("Holi");
newElement2.classList.remove("Diwali");
newElement2.style.backgroundColor = "pink";
newElement2.style.fontSize = "20px";

element.before(newElement2);

// This will give the name of the id.
console.log(newElement2.getAttribute("id"));

// This will give the name of the class.
console.log(newElement2.getAttribute("class"));

// li means list
const list = document.createElement("li");
list.textContent = "Milk";
const list2 = document.createElement("li");
list2.textContent = "Bread";
const list3 = document.createElement("li");
list3.textContent = "Halwa";
const list4 = document.createElement("li");
list4.textContent = "Paneer";

// const unorderedElement = document.getElementById("Listing");
// unorderedElement.append(list, list2);

// // This will add the list3 to the top.
// unorderedElement.prepend(list3);

// This display list4 after list.
// list.after(list4);

// When we don't have the access to the list = "Milk" than we can do it
// by index because list after all an array.
// unorderedElement.children[1].after(list4);

// const arr = ["Milk", "Halwa", "Paneer", "Tofu"];
// const unorderedElement = document.getElementById("Listing");


// Not an optimal way to display the content on the UI.
// for(let food of arr){
//     const list = document.createElement("li");
//     list.textContent = food;
//     unorderedElement.append(list);
// }

// Reccommended method
const arr = ["Milk", "Halwa", "Paneer", "Tofu"];
const unorderedElement = document.getElementById("Listing");
const fragment = document.createDocumentFragment();

for(let food of arr){
    const list = document.createElement("li");
    list.textContent = food;
    fragment.append(list);
}
unorderedElement.append(fragment);
