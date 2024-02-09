const mongoose = require('mongoose');

const estantesSchema = new mongoose.Schema({
  id: String,
  categoria: String,
  libroId: String,
});

const Estantes = mongoose.model('estantes', estantesSchema);

module.exports = Estantes;
