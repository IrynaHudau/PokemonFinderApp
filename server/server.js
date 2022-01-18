const express = require('express');
const allPokemons = require('./routes/pokemons');
const app = express();

app.use(express.json());

app.use('/api/v2/pokemon', allPokemons)

const port = process.env.PORT || 3001;

app.listen(port, (error) => {
    if(error){
        console.log('Something went wrong', error);
    }else{
        console.log('Server is listening on port' + port);
    }
});