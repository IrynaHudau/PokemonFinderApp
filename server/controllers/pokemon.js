const https = require('https');

const getPokemonFullDescription = (name) => {
    return new Promise((resolve, reject) => {
        const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
        let req = https.get(url, res => {
            if(res.statusCode < 200 || res.statusCode >= 300){
                return reject(new Error('statusCode = ' + res.statusCode));
            }
            let body = [];
            res.on('data', chunk => {
                body.push(chunk);
            });

            res.on('end', () => {            
                const data = JSON.parse(Buffer.concat(body).toString());        
                resolve({
                    id: data.id,
                    name: data.name,
                    height: data.height,
                    weight: data.weight,
                    types: data.types,
                    abilities: data.abilities,
                    experience:data.base_experience,
                    location : data.location_area_encounters,
                    moves:  data.moves,
                    stats: data.stats,
                    past_types: data.past_types,
                });
            });

            req.on('error', error => {
                reject(error);
              });   
            req.end;
        });
    });
}

const getPokemon = (req, res) => {
    let name = req.params.name;
    let pokemonData = {};
    getPokemonFullDescription(name).then(
        data => {
            pokemonData["id"] = data.id;
            pokemonData["name"] = data.name;
            pokemonData["height"] = data.height;
            pokemonData["weight"] = data.weight;
            pokemonData["types"] = data.types;
            pokemonData["abilities"] = data.abilities;
            pokemonData["experience"] = data.experience;
            pokemonData["location"] = data.location;
            pokemonData["moves"] = data.moves;
            pokemonData["stats"] = data.stats;
            pokemonData["img"] = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`;
            pokemonData["past_types"] = data.past_types;
            res.send(pokemonData);
        }
    );
};

module.exports = {getPokemon};