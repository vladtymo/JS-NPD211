// -=-=-=-=-=-=- objects -=-=-=-=-=-=-

let number = 20;
let client = "Vlad Tymo";
let quantity = 4;
let totalPrice = 3400;
//...

// function showOrder(num, client, ... ) {
// }

// -------- create an object
// 1 - using new
//var order = new Object();
var order = {};

order.number = 10;
order.client = "Bob";

// 2 - using {}
var order = {
    // initi with properties
    number: 10,
    discount: 15,
    client: "John Smith",
    complete: false,
    price: 1200
};

console.log("Order client:", order.client);

console.log("Order type:", typeof order); // object

// -- add new properties
order.date = new Date();
order.products = ["Apple", "Cherry", "Banana", "Pineapple"];
order.address = {
    city: "Rivne",
    street: "Soborna",
    builing: "5a"
};

// -- override values
order.price += 30;

// -- read object properties
// 1 - object.property
// 2 - object["property"]

console.log(`Order info: ${order["number"]} at ${order["date"]}`);
console.log(`[${order.number}] ${order.client} ordered ${order.products.length} items!`);
console.log(`Client address: ${order.address.city}, ${order.address.street}...`);

order.speed = 100;
// -- delete existin prop
delete order.speed;

console.log("Value:", order.speed); // undefined

// -- using object as a parameters
function showOrder(order) {
    console.log("Order: ", order.number);
    console.log("Products:", order.products);
}

function addNewItem(order, newItem) {
    order.products.push(newItem);
}

addNewItem(order, "Lemon");
showOrder(order);

// -- create object array
const coord = { x: 4, y: 9, z: 12 };

const coords = [
    { x: 1, y: 5 },
    { x: 4, y: -1 },
    { x: 0, y: 8 }
];

console.log("X2:", coords[1].x); // 4

// -- get all object keys
console.warn("Order properties:");

for (const key in order) {
    console.log(key + ": ... " + order[key]);
}

// ------------ methods
const product = {
    // proeprties
    name: 'Radeon RX 6600',
    price: 11499,
    rating: 4.8,
    inStock: true,

    // object methods
    applyDiscount: function (value) {
        // this - reference to this object
        this.price -= this.price / 100 * value;
    },
    showPrice() {
        let price = 999; // ignored
        console.log(`Price: ${this.price}$`);
    }
};

product.showPrice();
product.applyDiscount(15);
product.showPrice();

// ------------- simple class
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    show() {
        console.log(this.name);
    }
}

let pr1 = new Product("iPhone", 1000);
let pr2 = new Product("iPhone", 1000);
let pr3 = new Product("iPhone", 1000);