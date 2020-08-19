const fetch = require('node-fetch');

var githubUser = process.argv[2];
var apiURL = `https://api.github.com/users/${githubUser}/repos`;
console.log(apiURL);

var result = [];

printResult = (res) => res.forEach(x => console.log(x));

fetch(apiURL)
    .then(res => res.json())
    .then(res2 => {
        res2.forEach(x => result.push(x['name']));
    })
    .then(() => printResult(result))