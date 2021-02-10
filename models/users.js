///users model
const mongoose = require("mongoose");
const { Types } = require("mongoose");

const User = mongoose.model('users', {
  name: String,
  email: String,
  password: String,
  box: [{
    item: { type: Types.ObjectId, ref: 'socks' },
    amount: Number
  }],
  favourites: [{ type: Types.ObjectId, ref: 'socks' }]
})

module.exports = User;
