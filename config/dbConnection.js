const mysql = require('mysql')

let connMySQL = () => {
	return mysql.createConnection({
		"host"    : 'localhost',
		"user"    : 'root',
		"password": 'root',
		"database": 'curso_node'
	})
}


module.exports = () => {
	return connMySQL
}

