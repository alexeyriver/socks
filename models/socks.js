const mongoose = require("mongoose");
const { Types } = require("mongoose");

const Sock = mongoose.model('socks', {
  color: String,
  pic: String,
  pattern: String,
  author: { type: Types.ObjectId, ref: 'users' }
})

module.exports = Sock;
