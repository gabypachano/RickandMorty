const axios = require('axios')


const getCharById = (res, id) => {
axios(`https://rickandmortyapi.com/api/character/${id}`)
.then(response => response.data)
.then(data => {
    let char = {
        id: data.id,
        name: data.name,
        gender: data.gender,
        species: data.species,
        origin: data.origin.name,
        status: data.status,
        image: data.image
    }
    res
        .writeHead(200, {"Content-type": "application/json"})
        .end(JSON.stringify(char))

})

    .catch(err => 
        res
        .writeHead(500, {"Content-type": "text/plain"})
        .end(`El personaje con id: ${id} no existe`))
}




module.exports = getCharById