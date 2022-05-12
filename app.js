const express = require('express') //importando un modulo express (dependencia)
const app = express()
//express pide inicializar objeto y definir puerto
const port = 3000 //localhost 3000

//app.get('/', (request (peticion), response (respuesta)) => {}) '/' : raiz = localhost 3000
app.get('/', (req,res) => {
    res.send("Hola a todos explorers - Hello world with express")
})

app.get('/launchX', (req,res) => { //creando una url 
    res.send("Hello world with LaunchX & express")
})

app.get('/node', (req,res) => { //creando una url 
    const explorers0 = {name:"Brian Ulises", username:"BrianOrihuelaP", age:22}
    const explorers1 = {name:"Felipe", username:"Felip-ta", age:21}
    //creo objetos 
    const lista = [explorers0,explorers1]
    //creo una lista con los objetos
    res.send(lista)
    //envia una respuesta al cliente con la info de la lista    
})

app.get('/params:params', (req,res) => { //creando una url que pide un parametro ":"
    console.log(req.params);
    //req.params => parametro de la peticion
    res.send(req.params) //{ params: ':brian' }
    //envia el parametro de la peticion 
})

app.listen(port , () => { 
    //express requiere escuchar peticion para inicializar, 
    //inicializa el puerto y podemos poner mensaje de inicio 
    console.log("Server Listo!");
})


