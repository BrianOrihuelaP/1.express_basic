const express = require('express') //importando un modulo express (dependencia)
const app = express()
//express pide inicializar objeto y definir puerto
const port = 3000 //localhost 3000

//app.get('/', (request (peticion), response (respuesta)) => {}) '/' : raiz = localhost 3000
app.get('/', (req,res) => {
    res.send("Hola a todos explorers")
})

app.listen(port , () => { 
    //express requiere escuchar peticion para inicializar, 
    //inicializa el puerto y podemos poner mensaje de inicio 
    console.log("Server Listo!");
})


