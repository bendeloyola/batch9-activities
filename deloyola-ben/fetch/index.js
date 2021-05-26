const fetch = require('node-fetch');
let data = fetch("https://api.chucknorris.io/jokes/random")
.then((res) => res.json())


async function getJoke(){
    let result = await data; 
    console.log(` The Joke: ${result.value}`);
}

getJoke();