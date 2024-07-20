const doBtn = document.querySelector('#doBtn');

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
