// ----------- console -----------
console.log("Some info message!");
console.warn("Some warning message!");
console.error("Some error message!");
console.table(["C#", "C++", "JS"]);

// ----------- data types -----------
let price = 10;             // number
let koef = 4.99;            // number
let notANumber = NaN;       // number
let infinity = Infinity;    // number

let login = 'vladtymo';     // string
let letter = 'A';           // string

let message = "Hello, dear \"Vlad\";!";

let isValid = true;              // boolean

let currentUser = null;          // null
let undefinedObject = undefined; // undefined (bad practice)

let array = [1, 2, 3];
let coord = {
    x: 10,
    y: 20
}

console.log(array[1]);  // 2
console.log(array[10]); // undefined

console.log(coord.x);   // 10
console.log(coord.z);   // undefined

// ------ JS is dynamic/weak typing language
console.log(typeof (price));
price = "3400$";

// ---- chech data type: typeof
console.log(typeof (price));

// ------------ browser dialogs ------------
alert("Some alert message!");

const email = prompt("Enter your email:");

// 1 - string concat: str + str
console.log("Hello, dear " + email + "!");
// 2 - string interpolation: `...${}...`
console.log(`Hello, dear ${email}!`);

// TASK: show next year
// convert string to number: Number(str) +str
const year = +prompt("Enter current year:");

console.log("Current year: ", year);
console.log("Next year: ", year + 1); // "2024" + 1 = "20241"
console.log("Previous year: ", year - 1);

const like = confirm("Do you like JS?");
console.log("Wow! You are", like ? "crazy man" : "normal", "!");

// ------- statements
if (5 > 10) {

} else {

}

switch (letter) {
    case 'A':
        break;
    default:
        break;
}

for (let i = 0; i < array.length; i++) {

}