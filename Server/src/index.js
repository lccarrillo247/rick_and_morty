const http = require("http");
const PORT = 3001;
// const characters = require('./utils/data')
const getCharById = require('./controllers/getCharById')

http.createServer((req,res)=> {
    const {url} = req
    res.setHeader('Access-Control-Allow-Origin', '*');

    if(url.includes('rickandmorty/character')) {
    let urlId = url.split("/").pop();
    getCharById(res,urlId);

}

// if(url.includes('rickandmorty/character')) {
//     let urlId = url.split("/").pop() // url.split("/")[3], o [url.length -1], o url.split("/"").at(-1)
//     let character = characters.filter((char) => 
//     char.id === Number(urlId));
//         res.writeHead(200, {
//             "Content-Type": "application/json",
//         }).end(JSON.stringify(character[0]))
// }

}).listen(PORT, "localhost");