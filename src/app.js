const path = require('path');
const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
//rutas

// connection to db
mongoose.connect('mongodb://localhost/crud-mongo')
  .then(db => console.log('db connected'))
  .catch(err => console.log(err));

const indexRoutes = require('./routers/index');
//configuraciones

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));

//rutas
app.use('/', indexRoutes);

//inicio de servidor
app.listen(app.get('port'), ()=>{
	console.log(`Server on port ${app.get('port')}`);
});