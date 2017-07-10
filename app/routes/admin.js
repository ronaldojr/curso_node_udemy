

module.exports = app => {

	app.get('/noticia/cadastro', (req, res) => { 
		app.app.controllers.admin.formulario_cadastro_noticia(app, req, res)
    })

	app.post('/noticia/salvar', (req, res) => {
		app.app.controllers.admin.noticia_salvar(app, req, res)
	})
}

