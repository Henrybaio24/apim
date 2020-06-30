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
                    endPoint >>> api.get('get_usuario'....)
                    req.query.nombre  req.query.apellido   req.query.edad
        
        params >>>  http://localhost:3500/api/endPoint/Gabriela/Perez/24
                    endPoint >>> api.get('get_usuario/:id')
                                 api.get('get_usuario/apellido/edad')
                    req.params.nombre   req.params.apellido    req.params.edad
        
        body >>>    http://localhost:3500/api/endPoint
                    api.post('crear_usuario', ...)
                    req.body.data

                    {
                        data: {
                            nombre:Gabriela,
                            apellido: Perez
                            
                        }
                    }
    */
}

module.exports = {
    prueba,
    getUsuarios
}