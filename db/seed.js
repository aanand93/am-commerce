const Client = require('../models/Client');

const seedData = require('./seeds.json');

Client.deleteMany()
	.then(() => Client.insertMany(seedData))
	.then(console.log)
	.catch(console.error)
	.finally(process.exit);
