const https = require('https');

exports.getPokemonList = (startId, limit) => {
    return Promise((resolve, reject) => {
        const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${startId}`;
        let req = https.get(url, res => {
            if(res.statusCode < 200 || res.statusCode >= 300){
                return reject(new Error('statusCode = ' + res.statusCode));
            }
            let body = [];
            req.on('data', data => {
                body.push(data);
            });

            req.on('end', () => {
               // try{
                    body = JSON.parse(Buffer.concat(body).toString());
                // }catch(err){
                //     reject(err);
                // }
                resolve(body);
            });

            req.on('error', error => {
                reject(error);
              });
            req.end;
        });
    });
};

exports.getPokemon = () => {
    return new Promise((resolve, reject) => {
        const url = `https://pokeapi.co/api/v2/pokemon`;
        let req = https.get(url, res => {
            if(res.statusCode < 200 || res.statusCode >= 300){
                return reject(new Error('statusCode = ' + res.statusCode));
            }
            let body = [];
            res.on('data', chunk => {
                body.push(chunk);
            });

            res.on('end', () => {
               // try{
                    body = JSON.parse(body);
                    
                // }catch(err){
                //     reject(err);
                // }
                resolve(body);
            });

            req.on('error', error => {
                reject(error);
              });
            req.end;
        });
    });
};

