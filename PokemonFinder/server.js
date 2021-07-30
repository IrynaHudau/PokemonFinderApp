const express = require('express');
const app = express();
const routes = require("./routes/pokemons");
// const {getPokemon} = require('./pokemons');
const pino = require('pino-http')();

app.use(pino);

app.use('/', routes);

const port = 3000;
app.listen(port, (error) => {
    if(error){
        console.log('Something went wrong', error);
    }else{
        console.log('Server is listening on port' + port);
    }
});

// const getPokemons = () => {
//     // getPokemonList(0,100).then(result => {
//     //     console.log(result);
//     // });
//     getPokemon().then(data => console.log(data));
// }

// getPokemons();

// const https = require('https');

// const url = `https://pokeapi.co/api/v2/pokemon`;

// let pokenonRequest = https.get(url, res => {

//     let body = [];
//     req.on('data', chunk => {
//         body.push(chunk);
//     });

//     req.on('end', () => {
//         console.log(body);
//     });
// });
// pokenonRequest.on('error', console.log(error));
// pokenonRequest.end;