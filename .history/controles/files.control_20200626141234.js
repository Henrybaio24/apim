; 
'use strict'

const connectDb = require('../config/db'),
        fs = require('fs'), 
        path = require('path')


let uploadFile = async (req, res) => {
    let db = await connectDb();
    let file =req.files.calculos
     console.log(file)
    if (file.originalFilename == "" || !file.originalFilename ) {
        fs.unlinkSync(file.path)
        return res.status(400).json({
            transaccion: false,
            data: null,
            msg: 'No existe'
        })
    }else {
        let url = file.path
        url = url.split('/')
        let urlFile = [url[url.length -1]]
        db.collection('archivos').insertOne({"nombre": file.originalFilename})
        return res.status(200).json({
            transaccion: true,
            data: urlFile,
            msg: urlFile.length
        })
    }
}


let actualizar = async (req, res) => {
    let db = await connectDb();
    let uno = req.body
    console.log(uno);
    db.collection("archivos").updateOne({ '_id': new ObjectId(uno.id)}, {$set:uno.data})
        .then((data) => {
            res.status(200).json({
                transaction: true,
                data,
                msg: "datos actualiazados...",
            });
        })
        .catch((err) => {
            res.status(500).json({
                transaction: false,
                data: null,
                msg: `El error es: ${err}`,
            });
        });
};



let verFileGaleria = (req, res) => {
    let urlFile = req.params.urlFile
    let pathfile = `./files/galeria/${urlFile}`
    fs.exists(pathfile, (exists)  => {

        if(exists) {
            return res.status(200).sendFile(path.resolve(pathfile))
        }else {
            return res.status(400).send('No existe')
        }
    })
}



module.exports = {
    uploadFile,
    verFileGaleria
}