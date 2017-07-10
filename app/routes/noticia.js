module.exports = app => {
	app.get('/noticia/:id', (req,res) => {
		
		let id = req.params.id
		let connection = app.config.dbConnection()
		let noticiasModel = new app.app.models.Noticias(connection)


		noticiasModel.getNoticia(id, (err, result) => {
			res.render("../views/noticias/noticia", {noticia: result[0]});
		})
		
	})
} 
