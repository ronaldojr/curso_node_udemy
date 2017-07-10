const mysql = require('mysql')

let connMySQL = () => {
	return mysql.createConnection({
		"host"    : 'localhost',
		"user"    : 'root',
		"password": '',
		"database": 'curso_node'
	})
}


module.exports = () => {
	return connMySQL
}

