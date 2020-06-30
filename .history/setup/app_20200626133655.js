;
'use strict'

const express = require('express'),
      bodyParser = require('body-parser'),
      connectDb = require('../config/db')

let app = express(),
    usuarioRuta = require('../rutas/usuarios.rutas'),
    db = connectDb()

app.use(bodyParser.urlencoded({
    extended: false
}))

app.use(bodyParser.json())

app.use('/api', usuarioRuta)
app

module.exports = app