var express = require('express');
var router = express.Router();
import axios from 'axios';

router.get('/', async function(req, res, next) {
  try {
    // Make a GET request using Axios
    const response = await axios.get('https://api.example.com/data');

    // Render the 'index' view with the response data
    res.render('index', { title: 'branchhh', data: response.data });
  } catch (error) {
    console.error('Error fetching data:', error);
    // Handle the error as needed
    res.status(500).send('Internal Server Error');
  }
});

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'branchhh' });


// });

module.exports = router;
//view puede /* archivos estaticos, pdfs,  crear utils, config, middle ware,  */