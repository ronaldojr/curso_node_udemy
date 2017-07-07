const {app, porta} = require('./config/server');

let rotaHome = require('./app/routes/home')(app)
let rotaAbout = require('./app/routes/about')(app)

app.listen(porta, () => {
	console.log(`Servidor ON na porta ${porta}`);
});