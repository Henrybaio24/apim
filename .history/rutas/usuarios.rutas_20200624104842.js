;
'use strict'

const express = require('express');

let api = express.Router(),
    usuarioControl = require('../controles/usuarios.control')

api.get('/prueba', usuarioControl )

module.exports = api