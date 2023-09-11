let myFavorites = [];

function postFav (req, res) {
    const character = req.body

    myFavorites.push(character) // myFavorites.push(req.body)
    res.status(200).json(myFavorites)
}

function deleteFav (req, res) {
const {id} = req.params

myFavorites = myFavorites.filter((fav) => fav.id !== Number(id));

res.status(200).json(myFavorites)

}

module.exports = {postFav, deleteFav};