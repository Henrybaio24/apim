; 
'use strict'

const connectDb = require('../config/db'),
      fs = require ('fs')
const { ObjectId } = require('mongodb')

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

let insertarUno = async (req, res) => {
    let db = await connectDb();
    let data = req.body
    db.collection('usuarios').insert(data)
    .then(data => {
        res.status(200).json({
            transaction: true,
            data,
            msg: 'datos guardados...'
        })
    })
    .catch(err => {
        res.status(500).json({
            transaction: false,
            data: null,
            msg: `El error es: ${err}`
        })
    })
}

let insertarMuchos = async (req, res ) => {
    let db = await connectDb()
    let personas = req.body.personas
    db.collection('usuarios').insertMany(personas)
    .then(data => {
        res.status(200).json({
            transaction: true,
            data,
            msg: 'datos guardados...'
        })
    })
    .catch(err => {
        res.status(500).json({
            transaction:false,
            data: null,
            msg: `El error es: ${err}`
        })
    })
}

let porId = async (req, res) => {
    const id = new ObjectId(req.params.id)
    let db = await connectDb()
    db.collection('usuarios').findOne({_id: id})
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

let porNombre = async (req, res) => {
    let db = await connectDb()
    let campos = req.query.campo
    let elemento = req.query.elemento

    db.collection('usuarios').find({'nombre': elemento}).toArray()
}

let eliminar = async (req, res) => {
    const id = new ObjectId(req.params.id)
    let db = await connectDb()
    db.collection('usuarios').deleteOne({_id: id})
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
                            edad: 24
                        }
                    }

                    req.body.nombre

                    {
                        nombre: gabriela,
                        apellido: perez,
                        edad. 24
                    }
    */
}

let postmanQuery = (req, res) => {
    let nombre = req.query.nombre
    let apellido = req.query.apellido
    let edad = req.query.edad
    let persona = req.query
    console.log(req.query)
    console.log(persona)
    let data = {
        nombre,
        apellido,
        edad
    }
    res.status(200).json({
        transaction: true,
        data,
        msg:''
    })
    

}

let postmanParams = (req, res) => {
    let nombre = req.params.nombre
    let apellido = req.params.apellido
    let edad = req.params.edad
    let persona = req.params
    console.log(persona)
    let data = {
        nombre,
        apellido,
        edad
    }
    res.status(200).json({
        transaction: true,
        data,
        msg:''
    })
    
    
}
let postmanBody = (req, res) => {
    let nombre = req.body.nombre
    let apellido = req.body.apellido
    let edad = req.body.edad
    let persona = req.body
    console.log(persona)
    let data = {
        nombre,
        apellido,
        edad
    }
    res.status(200).json({
        transaction: true,
        data,
        msg:''
    })
    
}

module.exports = {
    prueba,
    getUsuarios,
    porId,
    eliminar,
    insertarUno,
    insertarMuchos,

    postmanQuery,
    postmanParams,
    postmanBody
}