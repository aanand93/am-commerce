const mongoose = require('../db/connection');

const clientSchema = new mongoose.Schema({
	apparel_type: String,
	quantity: Number,
	apparel_color: String,
	type_of_application: String,
	ink_color: String,
	thread_color: String,
	email: String,
	name: String,
	company_name: String,
	phone_number: Number,
	date_needed: String,
});

module.exports = mongoose.model('Client', clientSchema);
