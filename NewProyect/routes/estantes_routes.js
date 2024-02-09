const express = require('express');
const router = express.Router();
const estantesController = require('../controllers/estantes_controller');

// Create a new shelf in the estantes
router.post('/', estantesController.createEstante);

// Get all shelves in the estantes
router.get('/', estantesController.getAllEstantes);

// Update a shelf in the estantes by ID
router.patch('/', estantesController.updateEstante);

// Delete a shelf from the estantes by ID
router.delete('/', estantesController.deleteEstante);

router.get('/cat', estantesController.getEstanteWithLibros);

module.exports = router;
