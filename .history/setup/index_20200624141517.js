;
'use strict'

const env = require('dotenv').config(),
      app = require('./app'),
      port = process.env.PORT || 3000

console.log(process.env)

app.listen(port, (err) => {
    if(!err){
        console.log(``)
    } else {
        console.log("el servicio no esta funcionando")
    }
})