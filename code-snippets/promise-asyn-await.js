// Article Link: https://javascript.info/async-await

// Example
async function f() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("Done!"), 1000);
    });

    let result = await promise; // wait until promise resolves

    console.log(result);    // "Done!"
}

f();

// await cannot be used in non-async function

/*
// Example 

function myPromise() {
    return new Promise(resolve => {
        setTimeout(() =>resolve('resolved'), 5000);
    })
}


async function getValue() {
    const v = await myPromise();
    console.log(v);     // Promise {<pending>}
}
*/