const Estantes = require('../model/estante_model');
const Libro = require('../model/libreria_model');


async function createEstante(req, res) {
  try {
    const { libros, categoria } = req.body;
    const estante = new Estantes({ libros, categoria });
    await estante.save();
    res.status(201).send(estante);
  } catch (error) {
    console.error(`Error creating estante: ${error}`);
    res.status(500).send(error);
  }
}

// ... (Other functions remain the same)


async function getAllEstantes(req, res) {
  try {
    const estantes = await Estantes.find();
    res.send(estantes);
  } catch (error) {
    console.error(`Error getting estantes: ${error}`);
    res.status(500).send(error);
  }
}


async function getEstanteWithLibros(req, res) {
  try {
    const { categoria } = req.body;

    if (!categoria) {
      return res.status(400).json({ error: 'Categoria is required in the request body' });
    }

    const estante = await Estantes.findOne({ categoria });

    if (!estante) {
      return res.status(404).json({ error: 'Estante not found' });
    }

    // Retrieve details for each libro using libroId
    const librosDetails = await Promise.all(estante.libros.map(async (libro) => {
      const libroDetails = await Libro.findById(libro.libroId);
      console.log(libroDetails.nombre);
      
      return {
        libroId: libro.libroId,
        position: libro.position,
        // Include other fields from the Libro model that you want to display
        nombre: libroDetails.nombre,
        // Add more fields as needed
        
      };
    }));

    // Replace the libros array with the detailed information
    estante.libros = librosDetails;

    res.send(librosDetails);
  } catch (error) {
    console.error(`Error getting estante with libros: ${error}`);
    res.status(500).send(error);
  }
}




async function getEstanteById(req, res) {
  try {
    const estanteId = req.params.id;
    const estante = await Estantes.findById(estanteId);
    
    if (!estante) {
      return res.status(404).json({ error: 'Estante not found' });
    }

    res.send(estante);
  } catch (error) {
    console.error(`Error getting estante by ID: ${error}`);
    res.status(500).send(error);
  }
}

async function updateEstante(req, res) {
  try {
    const { id, ...updateData } = req.body;

    const estante = await Estantes.updateOne({ _id: id }, updateData);

    if (estante.n === 0) {
      console.log(`Estante with ID ${id} not found`);
      return res.status(404).json({ error: 'Estante not found' });
    }

    console.log(`Estante with ID ${id} successfully updated`);
    res.send({ message: 'Estante successfully updated' });
  } catch (error) {
    console.error(`Error updating estante: ${error}`);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function deleteEstante(req, res) {
  try {
    const { id } = req.body;
    const estante = await Estantes.findByIdAndDelete(id);
    if (!estante) {
      return res.status(404).json({ error: 'Estante not found' });
    }
    res.send(estante);
  } catch (error) {
    console.error(`Error deleting estante: ${error}`);
    res.status(500).send(error);
  }
}

module.exports = {
  createEstante,
  getAllEstantes,
  getEstanteById,
  updateEstante,
  deleteEstante,
  getEstanteWithLibros,
};
