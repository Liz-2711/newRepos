const mongoose = require('mongoose');

const librarySchema = new mongoose.Schema({
  id: String,
  nombre: String,
  author: String,
  num_pag: Number,
  fecha_public: Date,
  editorial: String,
  ISBN: String,
  genero: String,
  comentarios: String,
  edicion: String,
});

const Library = mongoose.model('Library', librarySchema);

module.exports = Library;
