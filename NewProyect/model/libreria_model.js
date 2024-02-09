const mongoose = require('mongoose');

const libroSchema = new mongoose.Schema({
  id: String,
  nombre: {type: String, required: true,
  },
  author: String,
  num_pag: Number,
  fecha_public: Date,
  editorial: String,
  ISBN: {
    type: String,
    unique: true,
  },
  genero: String,
  comentarios: String,
  edicion: String,
  posicion: String,
  copias: String


});

const Libro = mongoose.model('libros', libroSchema);

module.exports = Libro;
