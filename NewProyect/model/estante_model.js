const mongoose = require('mongoose');

const estantesSchema = new mongoose.Schema({
  libros: [{
    libroId: {
      
      
      required: true,
      unique: true
    },
    position: String,
  }],
  categoria: String,
});

const Estantes = mongoose.model('estantes', estantesSchema);

module.exports = Estantes;

