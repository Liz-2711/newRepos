const mongoose = require('mongoose');

const estantesSchema = new mongoose.Schema({
  id: String,
  position: String,
  categoria: String,
  edicion: String,
});

const Estantes = mongoose.model('estantes', estantesSchema);

module.exports = Estantes;
