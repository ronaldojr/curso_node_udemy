class Noticias {
	
	constructor(connection) {
		this._connection = connection
	}

	getNoticias(callback) {
		this._connection.query("SELECT * FROM noticias", callback)
	}

	getNoticia(id, callback) {
		this._connection.query("SELECT * FROM noticias where id=?", id, callback)
	}

	setNoticia(noticia, callback) {
		this._connection.query("INSERT INTO noticias set ?", noticia, callback)
	}

}

module.exports = () => {
	return Noticias
}