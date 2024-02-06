 const Library = require('../model/estante_model');

async function createBook(req, res) {
  try {
    const book = new Library(req.body);
    await book.save();
    res.status(201).send(book);
  } catch (error) {
    res.status(400).send(error);
  }
}
async function updateBook(res,req)
{
try{
    constbook= pa
}
}

module.export={
    createBook,

}







