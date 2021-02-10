///base socks

const mongoose = require("mongoose");

const BaseSock = mongoose.model('baseSocks', {
  color: [{
    name: String,
    url: String
  }],
  pic: [{
    name: String,
    url: String
  }],
  pattern: [{
    name: String,
    url: String
  }]
})

module.exports = BaseSock;
