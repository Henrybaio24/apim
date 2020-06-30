;
'use strict'

const express = require('express'),
      bodyParser = require('body-parser'),
      connectDb = require('../config/db'),
      passport = require('passport'),
      cors = require('cors')

let app = express(),
    session = require('express-session'),
    usuarioRuta = require('../rutas/usuarios.rutas'),
    archivoRuta = require('../rutas/file.ruta')
    db = connectDb(),
    sess = {
        secret: process.env.KEY_SESSION,
        resave: false,
        saveUnitialized: true,
        name: 'sessionID'
    }

app.use(bodyParser.urlencoded({
    extended: false
}))

app.use(bodyParser.json())

app.use('/api', usuarioRuta)
app.use('/api', archivoRuta)


module.exports = app