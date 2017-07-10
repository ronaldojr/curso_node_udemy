module.exports = app => {
	app.get('/noticias', (req,res) => {

		let connection    = app.config.dbConnection()
		let noticiasModel = new app.app.models.Noticias(connection) 

		noticiasModel.getNoticias((err, result) => {
			res.render("../views/noticias/noticias", {noticias: result})
		})

		
	})
} 
