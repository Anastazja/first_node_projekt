const express = require('express');
const router = express.Router();
const petController = require('./../controller/petController');

router.get('/',(req, res) => petController.getAll(req, res));
router.get('/:id',(req, res) => petController.get(req, res));
router.post('/', (req, res) => petController.create(req, res));
router.patch('/:id', (req, res) => petController.edit(req, res));
router.delete('/:id', (req, res) => petController.remove(req, res));

module.exports = router;