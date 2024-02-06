const Estantes = require('../models/estantes');

async function createShelf(req, res) {
  try {
    const shelf = new Estantes(req.body);
    await shelf.save();
    res.status(201).send(shelf);
  } catch (error) {
    res.status(400).send(error);
  }
}

async function getAllShelves(req, res) {
  try {
    const shelves = await Estantes.find();
    res.send(shelves);
  } catch (error) {
    res.status(500).send(error);
  }
}


module.exports = {
  createShelf,
  getAllShelves,
 
};
