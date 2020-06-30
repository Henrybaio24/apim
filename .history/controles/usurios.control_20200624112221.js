; 
'use strict'

const connectDB = require('../config/db'),
      fs = require ('fs')
const { ok } = require('assert')

let prueba = (req, res) =>{
    res.status(200).send('Hola API')
}

let getUsuarios = (req, res) => {
    let db = connectDb()
    db.collection('usuarios').find().toArray()
    .then(data => {
        res.status(200).json({
            transaction:ok,
            data
        })
    })
}

module.exports = {
    prueba
}