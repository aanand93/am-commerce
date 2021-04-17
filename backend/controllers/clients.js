const express = require('express');
const Client = require('../models/Client');

const router = express.Router();

// INDEX
// GET api/clients
router.get('/', (req, res, next) => {
	Client.find()
		.then((clients) => res.json(clients))
		.catch(next);
});

// SHOW
// GET api/clients/5a7db6c74d55bc51bdf39793
router.get('/:id', (req, res, next) => {
	Client.findById(req.params.id)
		.then((client) => {
			if (!client) {
				res.sendStatus(404);
			} else {
				res.json(client);
			}
		})
		.catch(next);
});

// CREATE
// POST api/clients
router.post('/', (req, res, next) => {
	Client.create(req.body)
		.then((client) => res.status(201).json(client))
		.catch(next);
});

// UPDATE
// PUT api/clients/5a7db6c74d55bc51bdf39793
router.put('/:id', (req, res, next) => {
	Client.findOneAndUpdate({ _id: req.params.id }, req.body, {
		new: true,
	})
		.then((client) => {
			if (!client) {
				res.sendStatus(404);
			} else {
				res.json(client);
			}
		})
		.catch(next);
});

// DESTROY
// DELETE api/clients/5a7db6c74d55bc51bdf39793
router.delete('/:id', (req, res, next) => {
	Client.findOneAndDelete({
		_id: req.params.id,
	})
		.then((client) => {
			if (!client) {
				res.sendStatus(404);
			} else {
				res.sendStatus(204);
			}
		})
		.catch(next);
});

module.exports = router;
