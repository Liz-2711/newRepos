const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const libroRoutes = require('./routes/libros_routes');
const estanteRoutes = require('./routes/estantes_routes');

const app = express();

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/librarydb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

app.use('/libros', libroRoutes);
app.use('/estantes', estanteRoutes);

// Global error handler middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});




//---------------------CLASES ANTERIORES -------------------------
// var createError = require('http-errors');
// var express = require('express');
// var path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');


// const mongoose = require('mongoose');

// const libraryRoutes = require('./routes/libros_routes');
// const estantesRoutes = require('./routes/estantes_routes');



// // Set up MongoDB connection
// //mongoose.connect('mongodb://localhost:27017/yourdatabase', { useNewUrlParser: true, useUnifiedTopology: true });

// // Use the routes
// app.use('/library', libraryRoutes);
// app.use('/estantes', estantesRoutes);


// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

// var app = express();


// mongoose.connect('mongodb+srv://cluster0.fq5n7fj.mongodb.net/')
//   .then(() => console.log('Connected!'));

// require('dotenv').config()
// console.log(process.env)

// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });


// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });





// module.exports = app;
