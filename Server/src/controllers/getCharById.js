const URL = require("https://rickandmortyapi.com/api/character/")
const axios = require("axios")


const getCharById = (req, res) => {
    const {id} = req.params

    axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then(response => {
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
        .catch(error => {
            if(error.response.status === 404) {
                res.status(404).json({message: "Not fount"})
            } else {
                res.status(500).json({error: error.message})
            }
        })
        
        
    })
}




module.exports = getCharById;

