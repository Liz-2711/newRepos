const express = require('express');
const router = express.Router();
const libraryController = require('../controllers/libros_controller');

router.post('/', libraryController.createBook);
router.get('/', libraryController.getAllBooks);
router.patch('/:id', libraryController.updateBook);
router.delete('/:id', libraryController.deleteBook);

module.exports = router;
