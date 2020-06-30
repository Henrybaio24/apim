;
'use strict'

const express = require('express');

let api = express.Router(),
    usuarioControl = require('../controles/usurios.control')


api.get('/prueba', usuarioControl.prueba )
api.get('/get_usuarios', usuarioControl.getUsuarios)

module.exports = api