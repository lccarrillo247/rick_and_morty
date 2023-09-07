const axios = require('axios');

function getCharById(res, id) {
    axios.get(`https://rickandmortyapi.com/api/character/${id}`).then(({data}) => { //response
    const {name,gender,species,origin,image,status} = data // response.data
    res.writeHead(200,{"Content-Type": "application/json"}).end(JSON.stringify({name,gender,species,origin,image,status}))
    }).catch((error) => {
        res.writeHead(500, {"Content-Type": "text/plain"}).end(error.message) // error es un objeto, y en el enunciado nos dicen que tiene la propiedad message
    })
}

module.exports = getCharById