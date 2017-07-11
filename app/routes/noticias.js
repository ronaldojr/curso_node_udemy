module.exports = app => {

	let controllers = app.app.controllers.noticias

	app.get('/noticias', controllers.listarNoticias)
	app.get('/noticia/:id', controllers.exibirNoticiaPorId)
} 
