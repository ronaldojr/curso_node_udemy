const porta = 3000;
const express = require('express');

const app = express();

app.get('/', (req,res) => {
	res.send("home");
});


app.listen(porta, () => {
	console.log(`escutando na porta ${porta}`);
});