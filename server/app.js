const bodyParser = require('body-parser')
const compression = require('compression')
const express = require('express')
const morgan = require('morgan')
const path = require('path')

const app = express()

// Support Gzip
app.use(compression())

// Suport post requests with body data (doesn't support multipart, use multer)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// Setup logger
app.use(morgan('combined'))

// Serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'build')))

const api = require('./api')
app.use('/api')

// Always return the main index.html, so react-router render the route in the client
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'))
})

module.exports = app
