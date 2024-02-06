const mongoose = require('mongoose');

const libroSchema = new mongoose.Schema({
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

const Libro = mongoose.model('libros', libroSchema);

module.exports = Libro;
