; 
'use strict'



let prueba = (req, res) =>{
    res.status(200).send('Hola API')
}

let getUsuarios = {req, res} => {
    res.status(200).send('HOLA api')
}

module.exports = {
    prueba
}