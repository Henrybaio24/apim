;
'use strict'

const express = require('express');

let api = express.Router(),
    usuarioControl = require('../controles/')

api.get('/prueba', usuarioControl.prueba )

module.exports = api