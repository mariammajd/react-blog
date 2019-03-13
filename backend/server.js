const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
config = require('./config/DB');
var path = require('path');
cors = require('cors');
var logger = require('morgan');
// const config = require('./db');

const users = require('./routes/user'); 
const index = require('./routes/index'); 
const postroutes = require('./routes/PostRoute');

mongoose.Promise = global.Promise;
    mongoose.connect(config.DB).then(
      () => {console.log('Database is connected') },
      err => { console.log('Can not connect to the database'+ err)}
    );

const app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname,'../frontend/build'),{index:false,extensions:['html'],maxAge:'7d'}))

app.use(logger('dev'));
app.use(cors());

app.use('/', index);
app.use(passport.initialize());
require('./passport')(passport);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use('/posts', postroutes);
app.use('/api/users', users);
// const port = process.env.PORT || 5000;
 const port = process.env.PORT || 4000;
const server = app.listen(port, function(){
    console.log('Listening on port ' + port);
   });