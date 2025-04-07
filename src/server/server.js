const express = require('express')
const path = require('path')

const startServer = (options) => {
    const app = express()
    app.use(express.static(options.path))
    app.get(/('.*')/, (req, res) => {
        const indexPath = path.join(__dirname + `../../../${options.path}/index.html`)
        res.sendFile(indexPath)
    })
    app.listen(options.port, () => {
        console.log('Escuchando en el puerto: ', options.port)
    })
}

module.exports = {
    startServer
}