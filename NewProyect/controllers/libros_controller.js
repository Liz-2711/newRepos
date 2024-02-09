const Library = require('../model/libreria_model');
const mongoose = require('mongoose');


async function createLibro(req, res) {
  try {
    const libro = new Library(req.body);
    await libro.save();
    res.status(201).send(libro);
  } catch (error) {
    if (error.name === 'ValidationError') {
      return res.status(400).json({ error: error.message });
    }

    console.error(`Error creating libro: ${error}`);
    res.status(500).send(error);
  }
}

async function getAllLibros(req, res) {
  try {
    const libros = await Library.find();
    res.send(libros);
  } catch (error) {
    console.error(`Error getting libros: ${error}`);
    res.status(500).send(error);
  }
}


async function updateLibro(req, res) {
  try {
    const { id, ...updateData } = req.body;

    const libro = await Library.updateOne({ _id: id }, updateData);

    if (libro.n === 0) {
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

async function getlibroById(res, req){

  try{
    const {id } =req.body;

    const libro = await Library.find( id );
    
      if(libro.length > 0){
      res.status(200).json(libro);

      }else
      return res.status(404).json({ error: 'Libro not found' }); 
  
}
 catch (error) {
  console.log(error.message);
   res.status(500).json({ message: error.message });
}
}

async function deleteLibro(req, res) {
  try {
    const { id } = req.body;
    const libro = await Library.findByIdAndDelete(id);
    if (!libro) {
      return res.status(404).json({ error: 'Libro not found' });
    }
    res.send(libro);
  } catch (error) {
    console.error(`Error deleting libro: ${error}`);
    res.status(500).send(error);
  }
}

 
 module.exports = {
   createLibro,
   getAllLibros,
   updateLibro,
   deleteLibro,
   getlibroById
 };
 







