const express = require('express');
const routes = express.Router();
const controllers = require("../pokemons");
const {getPokemonList, getPokemon} = require("../pokemons");
const https = require('https');
var logger = require('pino-http')();

const getPokemons = (req, res) => {
    // getPokemonList(0,100).then(result => {
    //     console.log(result);
    // });
    // getPokemon();
    // logger(req,res);
    // let body;
    // getPokemon().then(data => {
    //     body = data;
    //     console.log(data);
    // }).catch((err) => console.error(err));
    res.send("Get data ");
     res.json(req);



// const url = `https://pokeapi.co/api/v2/pokemon`;
// let pokenonRequest = https.get(url, res => {

//     let body = [];
//     res.on('data', chunk => {
//         body.push(chunk);
//     });

//     res.on('end', () => {
//         body = JSON.parse(body);
//         console.log(body);
//     });
// });
// pokenonRequest.on('error', error => {console.log(error)});
// pokenonRequest.end;
// console.log(res.body);
//res.send(res.json);
    //res.json(pokenonRequest.body);
}

routes.get('/', getPokemons);

///Get all pokemons
routes.get('/', controllers.getPokemonList);

///Patch get pokemon by id
routes.get('/:id',controllers.getPokemon);

module.exports = routes;