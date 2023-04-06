
// create a promoise to display a mesaage and cal the promise.
const promise = new Promise((resolve, reject) => {
    resolve("This is test message.");
});

promise.then(message => console.log(message));