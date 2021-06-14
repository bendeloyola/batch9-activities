async function inOrder(one, two) {
    // await one()
    // await two()
    runFunc(await one(), await two())
}

var runFunc = (one, two) => {
    console.log('success');
}

var logOne = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("one!");
            resolve();
        }, Math.random() * 1000);
    })
}

var logTwo = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("two!");
            resolve();
        }, Math.random() * 1000);
    })
}



inOrder(logOne, logTwo);