const express = require('express');
const router = express.Router();
const librosController = require('../controllers/libros_controller');

// Create a new book in the library
router.post('/', librosController.createLibro);

// Get all books in the library
router.get('/', librosController.getAllLibros);

// Update a book in the library by ID
router.patch('/', librosController.updateLibro);

// Delete a book from the library by ID
router.delete('/', librosController.deleteLibro);

module.exports = router;
