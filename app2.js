var express= require('express');
var app = express();
var port = 5000;

app.get('/', (req, res) => {
    res.send('Hello World!:D')
  })
  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
  app.post ('/guardar', (req,res) => {
    let usuario = req.body.username;
    let clave = req.body.password
    res.send('Ingresaste a '+ usuario)
})
