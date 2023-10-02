//importar modulo de espress y lo guardo en una constante llamada express

const express = require('express');
//instanciar el modulo de una app
//desde aqui va a ser llamado en futuros endpoint

const app = express();

//configuro la primera respuesta a una solicitud

//Solicitudes INDEX
app.get('/',(req,res) =>{
    res.send('hola');
})
//LOGIN
app.get('/login',(req,res) =>{
    res.send('Bienvenidos al login');
})
//AVIONES
app.get('/aviones',(req,res) =>{
    res.send('Listar aviones');
})

app.put('/updateaviones',(req,res) =>{
    res.send('Listar aviones');
})

//AUTOS
app.get('/autos',(req,res) =>{
    res.send('Listar autos');
})

//MOTOS
app.get('/motos',(req,res) =>{
    res.send('Listar motos');
})

//configuro el puerto por el cual se va a estar 'escuchando' solicitudes
app.listen(3000, () =>{
    console.log('Servidor en puerto 3000');
})
