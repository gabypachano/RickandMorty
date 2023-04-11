const axios = require('axios')


const getCharById = (res, id) => {
axios(`https://rickandmortyapi.com/api/character/${id}`)
.then (response => { 

    let character = {
        id: id,
        name: response.data.name,
        gender: response.data.gender,
        species: response.data.species,
        origin: response.data.origin,
        status: response.data.status,
        image: response.data.image
    }
    res
        .writeHead(200, {"Content-type": "application/json"})
        .end(JSON.stringify(character))

})

    .catch(err => 
        res
        .writeHead(500, {"Content-type": "text/plain"})
        .end(`El personaje con id: ${id} no existe`))
}




module.exports = getCharById