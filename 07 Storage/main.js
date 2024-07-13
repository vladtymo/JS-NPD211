const key = "data-key";

const plusBtn = document.querySelector('button');
let numbers = [];

const p = document.querySelector('p');

plusBtn.onclick = () => {
    // ... application logic ...
    const item = +prompt("Enter number:");
    numbers.push(item);

    p.innerHTML += item + " - ";
}

function load() {
    // JSON.parse() - convert JSON string to object
    if (localStorage.getItem(key) != null)
        numbers = JSON.parse(localStorage.getItem(key));

    p.innerHTML += numbers.join(' - ');
}
function save() {
    // JSON.stringify() - convert object to JSON string

    // --- save data ---
    localStorage.setItem(key, JSON.stringify(numbers));
}

window.addEventListener('beforeunload', save);
window.addEventListener('load', load);
