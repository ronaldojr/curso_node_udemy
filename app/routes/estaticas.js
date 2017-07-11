module.exports = app => {

	let controllers = app.app.controllers.estaticas

	app.get('/', controllers.home)
	app.get('/about', controllers.about)

}
