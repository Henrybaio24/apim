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
        name: 'sessionID',
        cookie: {
            httpOnly: false,
            maxAge: parseInt(process.env.TIEMPO)
        }
    },
    corsOptions = {
        origin: 'http://localhost:3500',
        optionsSuccessStatus: 200
    }

app.use(bodyParser.urlencoded({
    extended: false
}))

app.use(bodyParser.json())

//cors 
app.use(cors(corsOptions))
app.use(session(sess))

//passport
app.use(passport.initialize())
app.use(passport.session)

//Ejemplos
app.use((req, res, next) => {
    if(!req.session.views){
        req.session.views = {}
    }
    let pathname = pa
})

app.use('/api', usuarioRuta)
app.use('/api', archivoRuta)


module.exports = app