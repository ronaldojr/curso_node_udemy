const porta = 3000;
const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req,res) => {
	res.render("index");
});

app.listen(porta, () => {
	console.log(`escutando na porta ${porta}`);
});