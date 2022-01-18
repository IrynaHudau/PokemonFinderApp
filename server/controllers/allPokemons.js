const https = require('https');

const getPokemonList = (limit, offset) => {
    return new Promise((resolve, reject) => {
        const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
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
                //const data = JSON.parse(Buffer.concat(body).toString());           
                resolve(data);
            });

            req.on('error', error => {
                reject(error);
              });
            
            req.end;
        });
    });
};

const makeSynchronRequest = async(arrName) => {
    let pokemonDescriptionArray= [];
    try{
        for(let i=0; i<arrName.length; i++){
            let promise = getPokemonListDescription(arrName[i]);
            let responseBody = await promise;
            let pokemonDescription= {};
            if(arrName[i] === responseBody.name){
                pokemonDescription["id"] = responseBody.id;
                pokemonDescription["name"] = responseBody.name;
                pokemonDescription["weight"] = responseBody.weight;
                pokemonDescription["height"] = responseBody.height;
                pokemonDescription["imgURL"] = responseBody.imgURL;
                pokemonDescription["types"] = responseBody.types;
            }
            pokemonDescriptionArray.push(pokemonDescription);
        }
        return pokemonDescriptionArray;
    }catch(err){
        console.log(err);
    }
};

const createNewURLPagination = (url) => {
    if(url === null){
        return null;
    }else{
        let parser = new URL(url);
        let newLimit = parser.searchParams.get('limit');
        let newOffset = parser.searchParams.get('offset');
        let newURL = `http://localhost:3001/pokemon?limit=${newLimit}&offset=${newOffset}`
        return newURL;
    }
};

const getPokemonListDescription = (name) => {
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
                    name: data.name,
                    id: data.id,
                    types: data.types,
                    weight: data.weight,
                    height: data.height,
                    imgURL: data.sprites.other.dream_world.front_default,
                });
            });

            req.on('error', error => {
                reject(error);
              });   
            req.end;
        });
    });
}

const getAllPokemons = (req, res) => {
    let limit = req.query.limit;
    let offset = req.query.offset;
    let myData = {};
    let arrName = [];
    getPokemonList(limit, offset).then(
        data => {
            myData["count"] = data.count;
            myData["next"] = createNewURLPagination(data.next);
            myData["previous"] = createNewURLPagination(data.previous);
           data.results.map(elm => {
                arrName.push(elm.name);
           });
            makeSynchronRequest(arrName).then(data => {
                myData["results"] = data;
                res.send(myData);
            });
           //res.send(myData);
        }
    );
};

module.exports = {getAllPokemons};