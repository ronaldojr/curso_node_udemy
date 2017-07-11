

module.exports = app => {

	let controllers = app.app.controllers.admin

	app.get('/noticia/cadastro', controllers.formulario_cadastro_noticia)
	app.post('/noticia/salvar', controllers.noticia_salvar)


}

