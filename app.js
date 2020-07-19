const express = require('express')
const bodyParser =require('body-parser')
const servicioRoute = require('./routes/servicioRoute')
const clienteRoute = require('./routes/clienteRoute')
const puntuacionesRoute = require('./routes/puntuaciones2Route')
const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/v1',servicioRoute)
app.use('/v1',clienteRoute)
app.use('/v1',puntuacionesRoute)


module.exports = app