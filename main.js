const {app, porta} = require('./config/server');

app.listen(porta, () => {
	console.log(`Servidor ON na porta ${porta}`);
});