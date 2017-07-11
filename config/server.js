const porta = 3000
const express = require('express')
const consign = require('consign')
const bodyParser = require('body-parser')
const expressValidator = require('express-validator')

const app = express()
app.set('view engine', 'ejs')
app.set('views', './app/views')

app.use(express.static('./app/public'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(expressValidator())

consign()
  .include('/config/dbConnection.js')
  .then('app/models')
  .then('app/controllers')
  .then('app/routes')
  .into(app)

module.exports = { 
	app
   ,porta
} 
