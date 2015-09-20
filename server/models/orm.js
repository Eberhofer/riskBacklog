var knex = require("knex")({
	client: "pg",
	connection: {
		host: "localhost",
		user: "postgres",
		password: "",
		database: "riskBacklogTest"
	}
});

var Bookshelf = require('bookshelf')(knex);

module.exports = Bookshelf
