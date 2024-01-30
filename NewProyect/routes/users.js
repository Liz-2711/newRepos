var express = require('express');
var router = express.Router();
//import dotenv from 'dotenv'
//dotenv.config()
var axios = require('axios');

 

/* GET users listing. */
router.get('/', function(req, res, next) {
 // res.send('respond with a resource');

  res.send(`Hello ${process.env.NAME}`)
  
//console.log(process.env)


});

router.get('/Weather', async (req, res, next) => {

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
