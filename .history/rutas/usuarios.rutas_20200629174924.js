;
'use strict'

const express = require('express');

let api = express.Router(),
    usuarioControl = require('../controles/usurios.control')

//ENDPOINT DE USUARIOS
api.get('/prueba', usuarioControl.prueba)

api.get('/get_usuarios', usuarioControl.getUsuarios)
api.get('/get_usuarios/:id', usuarioControl.porId)
api.get('/get_nombre', usuarioControl.porNombre)
api.post('/crear_usuario', usuarioControl.insertarUno)
api.post('/crear_usuarios', usuarioControl.insertarMuchos)
api.put('/actualizar_usuario', usuarioControl.actualizarUno)
api.put('/actualizar_usuarios', usuarioControl.actualizarMuchos)
api.delete('/eliminar_usuario/:id', usuarioControl.eliminar)


api.post('/crear_user', usuarioControl.crearUsuario )
api.post('/login', usuarioControl.)



api.get('/postman_query', usuarioControl.postmanQuery)
api.get('/postman_params', usuarioControl.postmanParams)
api.get('/postman_query', usuarioControl.postmanQuery)


module.exports = api