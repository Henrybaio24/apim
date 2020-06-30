; 
'use strict'

const connectDB = require('../config/db'),
      fs = require {'fs'}

let prueba = (req, res) =>{
    res.status(200).send('Hola API')
}

let getUsuarios = () => {

}

module.exports = {
    prueba
}