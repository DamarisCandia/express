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

app.add('/postavion',(req,res) =>{
    res.send('creando avion');
})

app.delete('/deleteavion', (req,res) =>{
    res.send('eliminando avion')
})

//AUTOS
app.get('/autos',(req,res) =>{
    res.send('Listar autos');
})

app.put('/updateautos',(req,res) =>{
    res.send('Listar autos');
})

app.add('/postauto',(req,res) =>{
    res.send('creando auto');
})

app.delete('/deleteauto', (req,res) =>{
    res.send('eliminando auto')
})

//MOTOS
app.get('/motos',(req,res) =>{
    res.send('Listar motos');
})

app.put('/updatemotos',(req,res) =>{
    res.send('Listar motos');
})

app.add('/postauto',(req,res) =>{
    res.send('creando moto');
})

app.delete('/deletmoto', (req,res) =>{
    res.send('eliminando moto')
})

//TRENES

app.get('/trenes',(req,res) =>{
    res.send('Listar trenes');
})

app.put('/updatetrenes',(req,res) =>{
    res.send('Actualizar trenes');
})

app.add('/posttren',(req,res) =>{
    res.send('creando tren');
})

app.delete('/deletetren', (req,res) =>{
    res.send('eliminando trem')
})

//configuro el puerto por el cual se va a estar 'escuchando' solicitudes
app.listen(3000, () =>{
    console.log('Servidor en puerto 3000');
})
