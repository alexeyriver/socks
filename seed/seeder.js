const mongoose = require('mongoose');
const User = require('../models/users');
const Sock = require('../models/socks');
const BaseSock = require('../models/basesocks');

mongoose.connect('mongodb://localhost:27017/socks', { 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
});




// seeder for base socks
