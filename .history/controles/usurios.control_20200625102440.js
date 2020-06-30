; 
'use strict'

const connectDb = require('../config/db'),
      fs = require ('fs')

let prueba = (req, res) =>{
    res.status(200).send('Hola API')
}

let getUsuarios = async (req, res) => {
    let db = await connectDb()
    db.collection('usuarios').find().toArray()
    .then(data => {
        res.status(200).json({
            transaction: true,
            data: data,
            msg: 'listo'
        })
    }).catch(err => {
        res.status(500).json({
            transaction: false,
            data: null,
            msg: err
        })
    })
}

let postman = (req, res) => {
    /*
        query >>> http://localhost:3500/api/endPoint?nombre=Gabriela&apellido=Perez
        
        params >>> req.query.nombre  req.query.apellido  
        body >>>
    */
}

module.exports = {
    prueba,
    getUsuarios
}