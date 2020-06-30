;
'use strict'

const express = require('express');

let api = express.Router(),
    usuarioControl = require('../controles/usurios.control')

//ENDOINT DE USUARIOS
api.get('/prueba', usuarioControl.prueba )
api.get('/get_usuarios', usuarioControl.getUsuarios)
api.get('/get_usuarios/:id', usuarioControl.porId)
api.post('/crear_usuario', usuarioControl.insertarUno)
api.post('/crear_usuarios', )
api.delete('/eliminar_usuario/:id', usuarioControl.eliminar)



api.get('/postman_query', usuarioControl.postmanQuery)
api.get('/postman_params', usuarioControl.postmanParams)
api.get('/postman_query', usuarioControl.postmanQuery)


module.exports = api