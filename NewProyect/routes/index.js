var express = require('express');
var axios = require('axios');

var router = express.Router();
//import axios from 'axios';

// router.get('/', async function(req, res, next) {
//   try {
//     // Make a GET request using Axios
//     const response = await axios.get('https://api.example.com/data');

//     // Render the 'index' view with the response data
//     res.render('index', { title: 'branchhh', data: response.data });
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     // Handle the error as needed
//     res.status(500).send('Internal Server Error');
//   }
// });

/* GET home page. */
 router.get('/', function(req, res, next) {
  res.render('index', { title: 'branchhh' });

 });

 router.get('/weather', async (req, res, next) => {

  
    //http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=3f79d5e8a7087c6ebcec50ee9c2ce993
    try {
    const options = {
        method: 'GET', 
        url: `http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=${process.env.WEATHER_API}`
    };
  
    var response = await axios.request(options);
    console.log(response.data)
    res.send(response.data);
  } catch (e) {
      console.error("Error al obtener acciones:", e);
      
      res.send(e)
  }  
    
  });
  

module.exports = router;




//view puede /* archivos estaticos, pdfs,  crear utils, config, middle ware,  */