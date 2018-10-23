const mongoose = require('mongoose');
const keys = require('./keys');

// Map global promises
mongoose.Promise = global.Promise;
// Mongoose Connect
mongoose
  .connect('mongodb://sham:12345678gbm@ds043987.mlab.com:43987/ratingpoll')
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));
