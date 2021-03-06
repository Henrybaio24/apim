; 
'use strict'

const connectDB = require('../config/db'),
      fs = require ('fs')

let prueba = (req, res) =>{
    res.status(200).send('Hola API')
}

let getUsuarios = (req, res) => {
    let db = connectDb()
    db.collection('usuarios').find().toArray()
    .then(data => {
        res.status(200).json({
            transaction:ok,
            data,
            msg: data.length()
        })
    }).catch(err => {
        res.status(500).json({
            transaction: false,
            data: null,
            msg: err
        })
    })
}

module.exports = {
    prueba
}