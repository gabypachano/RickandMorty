const axios = require("axios")

const getCharById = (req, res) => {
const URL = "https://rickandmortyapi.com/api/character/"

    const {id} = req.params

    axios.get(URL + id)
    .then(response => {
        if(response.data.name) {
        let character = {
            // id, status, name, species, origin, image y gender
            id: id,
            status: response.data.status,
            name: response.data.name,
            species: response.data.species,
            origin: response.data.origin,
            image: response.data.image,
            gender: response.data.gender
        }
        res.status(200).json(character)
    } else {
        res.status(404).json({message: "Character Not fount"})
    } 
})
    .catch(error => res.status(500).json({error: error.message}))
   
}


module.exports = getCharById;

