;
'use strict'

const express = require('express'),
      bodyParser = require('body-parse')

let app = express()

app.use(bodyParser.urlencoded({
    extended: false
}))

app.use(bodyParser.json())

app.use('/api', ruta)

module