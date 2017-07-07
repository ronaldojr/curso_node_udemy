const porta = 3000
const express = require('express')
const app = express()
app.set('view engine', 'ejs')
app.set('views', './app/views')

module.exports = { 
	app
   ,porta
} 
