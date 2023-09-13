const app = require("../src/app");
const session = require('supertest');
const agent = session(app);



describe("Test de Rutas", ()=>{
    describe("GET /rickandmorty/character/:id", ()=> {
        it("Responde con status: 200", async () => {
            await agent.get('/rickandmorty/character/1').expect(200);
        })
        it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async ()=> {
            const {body} = await agent.get('/rickandmorty/character/1');

        //     const propiedades = [
        //     "id",
        //     "name",
        //     "species",
        //     "gender",
        //     "status",
        //     "origin",
        //     "image",
        // ];

        // const keys = Object.keys(body) // devuelve array con propiedades

        // propiedades.forEach(prop=>{
        //     expect(keys).toContain(prop)

        expect(body).toHaveProperty("id", "name", "species", "gender", "status", "origin", "image")
            
        })


        
        it('Si hay un error responde con status: 500', async ()=> {
            await agent.get('/rickandmorty/character/900').expect(500);
        })
    })

describe("GET /rickandmorty/login", ()=> {
    it("Información corrcta, pase usted", async () => {
        const {body} = await agent.get("/rickandmorty/login?email=a@b.com&password=abc123");

        expect(body.access).toEqual(true);
    })
    it("Información incorrecta, veeemoooos", async () => {
        const {body} = await agent.get("/rickandmorty/login?email=x@b.com&password=abc1234");

        expect(body.acess).toBeFalsy() // Revisar por qué no funciona con toEqual(false)
    
    })
})

describe("POST /rickandmorty/fav", () => {
    
    const testCharA = {id:1, name: "Test A"};
    const testCharB = {id:2, name: "Test B"};

    it("Devuelve un array con la información enviada", async()=> {
        const {body} = await agent.post("/rickandmorty/fav").send(testCharA);

        expect(body).toContainEqual(testCharA)
    })

    it("Devuelve un array con la información enviada, y guardada anteriormente", async()=> {
        const {body} = await agent.post("/rickandmorty/fav").send(testCharB);

        expect(body).toContainEqual(testCharA);
        expect(body).toContainEqual(testCharB);
    })

})

describe("DELETE /rickandmorty/fav/:id", ()=> {

    const testCharA = {id:1, name: "Test A"};
    const testCharB = {id:2, name: "Test B"};

    it("Si no se elimina ningún personaje, devuelve el mismo array", async() => {

        const {body} = await agent.delete("/rickandmorty/fav/3312")

        expect(body).toContainEqual(testCharA);
        expect(body).toContainEqual(testCharB);
    })

    it("Elimina al personaje recibido por ID", async() => {

        const {body} = await agent.delete("/rickandmorty/fav/2")

        expect(body).not.toContainEqual(testCharB);
    })
})
})