const mongoose = require("mongoose");
const { Types } = require("mongoose");

const Sock = mongoose.model('socks', {
  color: String,
  pic: {
    name: String,
    url: String
  },
  pattern: {
    name: String,
    url: String
  },
  author: { type: Types.ObjectId, ref: 'users' }
})

module.exports = Sock;
