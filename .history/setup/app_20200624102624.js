;
'use strict'

const express = require('express'),
      bodyParser = require('body-parse')

let app = express(),
    us
app.use(bodyParser.urlencoded({
    extended: false
}))

app.use(bodyParser.json())

app.use('/api', ruta)

module.exports = app