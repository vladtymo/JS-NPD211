const doBtn = document.querySelector('#doBtn');
const list = document.querySelector('ol');

console.log("Start application!");

// ---------- async methods: setTimeout(), setInterval()

// setTimeout(() => {
//     for (let i = 0; i < 10; i++) {
//         let x = Math.pow(2, i);
//         console.log("2^? = ", x);
//     }
// }, 3000);

// doBtn.onclick = () => {
//     for (let i = 0; i < 10; i++) {
//         let x = Math.pow(2, i);
//         console.log("2^? = ", x);
//     }
// }

// ---------- Promise
// ! promise starts automatically

// Promise states: pending -> fullfiled/rejected
const work = new Promise((resolve, rej) => {
    // promse code...
    console.log("Promise started!");

    // 50% fail chance
    if (Math.random() < 0.5) {
        rej(new Error("Something went wrong!"));
    }

    setTimeout(() => {
        let result = '';
        for (let i = 0; i < 5; i++) {
            let x = Math.floor(Math.random() * 100);
            result += x + " ";
        }
        //console.log("Result:", result);
        resolve(result);
    }, 1000);

    // set promise result: resolve, reject
});

// wait for promise result?
work
    .then((res) => {
        console.log("Promise fullfiled:", res);
    })
    .catch(err => {
        console.warn(err.message);
    });

console.log("Finish Application!");

function doHardWork() {
    return new Promise((resolve, rej) => {
        // promse code...
        console.log("Promise started!");

        // 50% fail chance
        if (Math.random() < 0.5) {
            rej(new Error("Something went wrong!"));
        }

        setTimeout(() => {
            let result = '';
            for (let i = 0; i < 5; i++) {
                let x = Math.floor(Math.random() * 100);
                result += x + " ";
            }
            //console.log("Result:", result);
            resolve(result);
        }, 1000);

        // set promise result: resolve, reject
    });
}

doHardWork()
    .then(res => alert(res))
    .catch(err => alert(err.message));

// -------- fetch
fetch('https://dummyjson.com/products')
    .then(res => {
        console.log("Status:", res.status);
        return res.json();
    })
    .then(data => console.log(data))
    .catch(err => console.warn(err.message));

// --------- async & await
async function loadProducts() {
    const res = await fetch('https://dummyjson.com/products');
    console.log("Status:", res.status);

    const data = await res.json();
    console.log(data);

    // ----- render products
    for (const i of data.products) {
        list.innerHTML += `<li>${i.title} | ${i.price}$</li>`
    }
}

loadProducts();