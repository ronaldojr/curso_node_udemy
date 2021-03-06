module.exports = app => {
	
	let controllers = {}

	controllers.listarNoticias = (req, res) => {

		let connection    = app.config.dbConnection()
		let noticiasModel = new app.app.models.Noticias(connection) 

		noticiasModel.getNoticias((err, result) => {
			res.render("../views/noticias/noticias", {noticias: result})
		})

	}

	controllers.exibirNoticiaPorId = (req, res) => {

		let id = req.params.id
		let connection = app.config.dbConnection()
		let noticiasModel = new app.app.models.Noticias(connection)
		

		noticiasModel.getNoticia(id, (err, result) => {
			res.render("../views/noticias/noticia", {noticia: result[0]});
		})

	}

	return controllers

}