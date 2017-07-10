const connection = require('../../config/dbConnection')()

module.exports = app => {
	app.get('/news', (req,res) => {
		connection.query("SELECT * FROM noticias", (err, result) => {
			res.render("../views/news", {noticias: result});
		})
	})
} 
