const express = require("express");
const { allowedNodeEnvironmentFlags } = require("process");
const app = express();
const port = 3000;

app.use(express.static('public'))
app.listen(port,()=>{
    console.log('Escuchando en 3000');
})

app.get('/home', (req,res)=>{
    res.sendFile(__dirname+ '/views/home.html')
})

app.get('/about', (req,res) => {
    res.sendFile(__dirname + "/views/about.html")
})

app.get("/works", (req, res) => {
    res.sendFile(__dirname + "/views/works.html")
})

app.get("/photogallery", (req, res) => {
    res.sendFile(__dirname + "/views/photogalery.html")
})