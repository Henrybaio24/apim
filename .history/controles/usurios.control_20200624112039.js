; 
'use strict'

const connectDB = require('../config/db'),
      fs = require {'fs'}

let prueba = (req, res) =>{
    res.status(200).send('Hola API')
}

let getUsuarios = (req, res) => {
    let db = connectDb()
    db.collection
}

module.exports = {
    prueba
}