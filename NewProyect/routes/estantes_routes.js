const express = require('express');
const router = express.Router();
const estantesController = require('../controllers/estantesController');

router.post('/', estantesController.createShelf);
router.get('/', estantesController.getAllShelves);
router.patch('/:id', estantesController.updateShelf);
router.delete('/:id', estantesController.deleteShelf);

module.exports = router;
