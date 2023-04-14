let myFavorites = [];

const postFav = (req, res) => {
    const {character} = req.body
    
    myFavorites.push(character)
    res.status(200).json(myFavorites)
}

const deleteFav = (req, res) => {
    const {id} = req.params
    let favorites = myFavorites.filter(fav => fav.id !== Number(id))
    res.status(200).json(favorites)
}

//! Duda: Creo un nuevo arreglo donde saco el personaje que tiene el mismo id o creo un nuevo arreglo que contenga todos los personajes excepto ese?

module.exports = {postFav, deleteFav}