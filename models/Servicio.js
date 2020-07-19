const mongoose = require('mongoose')

const Schema = mongoose.Schema

const servicioSchema = Schema({
    service: String,
    costo: Number,
    status: String
})


module.exports = mongoose.model('Servicio', servicioSchema)