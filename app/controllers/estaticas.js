module.exports = app => {
	
	let controllers = {}

	controllers.home = (req, res) => {
		res.render("index")
	} 

	controllers.about = (req, res) => {
		res.render("about")
	}

	return controllers
}