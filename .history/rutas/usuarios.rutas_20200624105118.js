;
'use strict'

const express = require('express');

let api = express.Router(),
    usuarioControl = require('../')

api.get('/prueba', usuarioControl.prueba )

module.exports = api