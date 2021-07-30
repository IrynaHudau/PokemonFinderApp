const express = require('express');
const app = express();
const pokemonListRoutes = require('./routes/pokemons');
const log = require('pino-http')();
const cors = require('cors');

app.use(cors());
//app.use(log);

app.use('/',pokemonListRoutes)

const port = 8080;
app.listen(port, (error) => {
    if(error){
        console.log('Something went wrong', error);
    }else{
        console.log('Server is listening on port' + port);
    }
});