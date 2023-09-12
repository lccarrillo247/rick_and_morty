const axios = require('axios');
const URL = "https://rickandmortyapi.com/api/character/";

async function getCharById(req, res) {

try {
    const {id} = req.params
    const {data} = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    const character = {
        id: data.id,
        status: data.status,
        name: data.name,
        species: data.species,
        origin: data.origin?.name, // así no hay undefined
        image: data.image,
        gender: data.gender,
    };

        if (character.name) {
        res.status(200).json(character)
        } else {
            res.status(404).send("Not found-Coleguilas");
        }

    } catch (error) {
        
    res.status(500).json({message: error.message});

    }
}
//     const {id} = req.params
//     axios.get(`https://rickandmortyapi.com/api/character/${id}`).then((response) => {
//         const {id, name, gender, species, origin, image, status} = response.data;

//         if (name) {
//         res.status(200).json({id, name, gender, species, origin, image, status})
//         } else {
//             res.status(404).send("Not found-Coleguilas");
//         }
//     }).catch((error) => {
//         res.status(500).json({message: error.message});
//     })

// }


// function getCharById(res, id) {
//     axios.get(`https://rickandmortyapi.com/api/character/${id}`).then(({data}) => { //response
//     const {name,gender,species,origin,image,status} = data // response.data
//     res.writeHead(200,{"Content-Type": "application/json"}).end(JSON.stringify({name,gender,species,origin,image,status}))
//     }).catch((error) => {
//         res.writeHead(500, {"Content-Type": "text/plain"}).end(error.message) // error es un objeto, y en el enunciado nos dicen que tiene la propiedad message
//     })
// }

module.exports = getCharById