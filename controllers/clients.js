const express = require('express');
const Job = require('../models/Client');

const router = express.Router();

// INDEX
// GET api/clients
router.get('/', (req, res) => {
	Client.find().then((clients) => res.json(clients));
});

// SHOW
// GET api/clients/5a7db6c74d55bc51bdf39793
router.get('/:id', (req, res) => {
	Client.findById(req.params.id).then((client) => res.json(client));
});

// CREATE
// POST api/clients
router.post('/', (req, res) => {
	Client.create(req.body).then((client) => res.json(client));
});

// UPDATE
// PUT api/clients/5a7db6c74d55bc51bdf39793
router.put('/:id', (req, res) => {
	Client.findOneAndUpdate({ _id: req.params.id }, req.body, {
		new: true,
	}).then((client) => res.json(client));
});

// DESTROY
// DELETE api/clients/5a7db6c74d55bc51bdf39793
router.delete('/:id', (req, res) => {
	Client.findOneAndDelete({
		_id: req.params.id,
	}).then((client) => res.json(client));
});

module.exports = router;
