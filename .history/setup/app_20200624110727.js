;
'use strict'

const express = require('express'),
      bodyParser = require('body-parser'),
      connectDB = require()

let app = express(),
    usuarioRuta = require('../rutas/usuarios.rutas')

app.use(bodyParser.urlencoded({
    extended: false
}))

app.use(bodyParser.json())

app.use('/api', usuarioRuta)

module.exports = app