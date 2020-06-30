import connect from 'mongodb';
;
'use strict'

const { MongoClient } = require('mongodb'),
    {USER_DB,
     PASS_DB,
     HOST_DB,
     NAME_DB
    } = process.env,
    mongoUrl = 'mongo+srv://${USER_DB}:${PASS_DB}@${HOST_DB}'
    let connection 
    let connectDb = async() => {
        if(connection) return connection
        let cliente 
        try {
            
        }
    }