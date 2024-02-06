const Estantes = require('../model/estante_model');

async function createEstante(req, res) {
  try {
    const estante = new Estantes(req.body);
    await estante.save();
    res.status(201).send(estante);
  } catch (error) {
    console.error(`Error creating estante: ${error}`);
    res.status(500).send(error);
  }
}

async function getAllEstantes(req, res) {
  try {
    const estantes = await Estantes.find();
    res.send(estantes);
  } catch (error) {
    console.error(`Error getting estantes: ${error}`);
    res.status(500).send(error);
  }
}

async function updateEstante(req, res) {
  try {
    const { id, ...updateData } = req.body;

    const estante = await Estantes.updateOne({ _id: id }, updateData);


    if (estante.n === 0) {
      console.log(`Libro with ID ${id} not found`);
      return res.status(404).json({ error: 'Libro not found' });
    }

    console.log(`Libro with ID ${id} successfully updated`);
    res.send({ message: 'Libro successfully updated' });
  } catch (error) {
    console.error(`Error updating libro: ${error}`);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function deleteEstante(req, res) {
  try {
    const { id } = req.body;
    const estante = await Estantes.findByIdAndDelete(id);
    if (!estante) {
      return res.status(404).json({ error: 'Libro not found' });
    }
    res.send(estante);
  } catch (error) {
    console.error(`Error deleting libro: ${error}`);
    res.status(500).send(error);
  }
}

module.exports = {
  createEstante,
  getAllEstantes,
  updateEstante,
  deleteEstante,
};
