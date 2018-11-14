const express = require('express');
const router = express.Router();
const userController = require('./../controller/userController');

router.get('/', (req, res) => userController.getAll(req, res));
router.get('/:id', (req, res) => userController.get(req, res));
router.post('/', (req, res) => userController.create(req, res));
router.patch('/:id', (req, res) => userController.edit(req, res));
router.delete('/:id', (req, res) => userController.remove(req, res));

module.exports = router;