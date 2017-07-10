let validarCampos = (req) => {
	req.assert('titulo', 'Titulo é obrigatório').notEmpty();
	req.assert('resumo', 'Resumo deve conter entre 10 e 100 caracteres').len(10,100);
	req.assert('autor', 'Autor é obrigatório').notEmpty();
	req.assert('data_noticia', 'Data dos fatos é obrigatória').notEmpty().isDate({format: 'YYYY-MM-DD'});
	req.assert('noticia', 'Notícia é obrigatório').notEmpty();
}

module.exports = app => {
	app.get('/noticia/cadastro', (req, res) => {
		res.render('../views/admin/form_add_noticia', {erro: ""})
	})
	app.post('/noticia/salvar', (req, res) => {
		let noticia = req.body
		let connection    = app.config.dbConnection()
		let noticiasModel = new app.app.models.Noticias(connection) 

		validarCampos(req)

		req.getValidationResult()
		   .then(result => {
		   	  if (!result.isEmpty()) {
		   	  	res.render('../views/admin/form_add_noticia', {erro: result.array()})
		   	  	return
		   	  }
		   	  noticiasModel.setNoticia(noticia,  (err, result) => {
		    	if (err) console.log(err)
			    res.redirect('/noticias')
		      })
		   })

		

		
	})
}

