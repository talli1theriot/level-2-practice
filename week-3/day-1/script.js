// Day 1 — Variables, arrays, objects, functions
// Read each Example, then write YOUR truck's version under the TODOs.
// See the results in the console (right-click the page → Inspect → Console).

// ---------- Step 1: Variables ----------
// Example:
// Create 3 variables using "let" or "const"
const exampleName = "Taco Rocket";   // string (text)
const exampleYears = 3;              // number
const exampleIsOpen = true;          // boolean (true or false)

// Log variables
console.log(exampleName, exampleYears, exampleIsOpen);
console.log(typeof exampleName);     // typeof tells you the type

// TODO: Make 3 variables for YOUR truck: a name, a number, and a true/false.
const truckName = "Potato Tornado";
const yearsOpen = 4;
const isOpen = true; 

// TODO: console.log them, and log the typeof each one.
console.log(truckName,yearsOpen,isOpen);
console.log(typeof truckName, typeof yearsOpen, typeof isOpen);

// ---------- Step 2: An array (a list) ----------
// Example:
const exampleMenu = ["taco", "burrito", "nachos"];
console.log(exampleMenu[0]);         // first item: index 0
console.log(exampleMenu.length);     // how many items

// TODO: Make an array of 3 or more things YOUR truck sells.
const myMenu = ["Old Fashioned", "Cheesy Spud", "Lotsa Meatsa", "Bet Cha Butter", "Steak Gravy", "Pizza Potato", "Burger Tater"];

// TODO: Log the first item, the last item, and how many items there are.
console.log (myMenu[0]);
console.log(myMenu[6]);
console.log(myMenu.length);

// ---------- Step 3: An object (one thing with details) ----------
// Example:
const exampleItem = { name: "taco", price: 4.5, spicy: true };
console.log(exampleItem.name);       // dot notation
console.log(exampleItem["price"]);   // bracket notation

// TODO: Make an object for one of YOUR menu items (name, price, spicy).
const menuItem = { name: "Old Fashioned", price: 7, spicy: false };

// TODO: Log one property with dot notation and one with bracket notation.
console.log(menuItem.name);
console.log(menuItem["price"]);

// ---------- Step 4: A function ----------
// Example:
function addTip(price, tip) {
  return price + tip;
}
console.log(addTip(10, 2));          // 12

// TODO: Write a function orderTotal(price, quantity) that RETURNS price * quantity.
function orderTotal(price, quantity) {
  return price * quantity;
}

// TODO: Before you run it, guess what orderTotal(4.5, 3) gives. Then log it.
console.log(orderTotal(4.5, 3))


// ---------- Extra practice (if you finish early) ----------
// 1. Change your menu item's price AFTER you made the object, then log it again.
// 2. Write isCheap(price): return "cheap!" if price is under 5, otherwise "fancy".
