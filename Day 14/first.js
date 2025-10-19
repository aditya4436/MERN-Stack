const newElement = document.createElement("h2");
newElement.textContent = "Strike is coming.";
newElement.id = "second";

const element = document.getElementById("first");
element.after(newElement);

const newElement2 = document.createElement("h3");
newElement2.textContent = "Diwali is coming";
newElement2.id = "third";

// Not recommended.
// newElement2.className = "Diwali";

// Recommended
newElement2.classList.add("Diwali");
newElement2.classList.add("Holi");
newElement2.classList.remove("Diwali");
newElement2.style.backgroundColor = "pink";
newElement2.style.fontSize = "20px";
element.before(newElement2);
console.log(newElement2);