const mongoose = require('mongoose');
// const User = require('../models/users');
// const Sock = require('../models/socks');
const BaseSock = require('../models/basesocks');

mongoose.connect('mongodb://localhost:27017/socks', { 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
});

async function createBaseSocks() {

  const baseSock1 = new BaseSock({
    color: [{
      name: 'white'
    },
    {
      name: 'red'
    },
    {
      name: 'blue'
    },
    {
      name: 'black'
    }],
    pic: [{
      name: 'watermelon',
      url: 'https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/4081793/original/a54344eed0876c32419f2af12432f1f49a53c57e.jpg'
    },
    {
      name: 'leaves',
      url: 'https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/63200734/original/200e2a1d8a6f707edb1208534027a082c5c00d59.jpg'
    },
    {
      name: 'balloon',
      url: 'https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/187984828/original/0eab5bd06704efd318f3d2defe78ccb3f38f4b71.jpeg'
    },
    {
      name: 'whales',
      url: 'https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/107456603/original/a64c4427a3d04aed753c7a2cf8c0f86816019c21.jpeg'
    }],
    pattern: [{
      name: 'lines',
      url: 'https://img.freepik.com/free-vector/abstract-colorful-topographic-map-design-vector_1035-14092.jpg?size=626&ext=jpg&ga=GA1.2.1858535104.1612958726'
    },
    {
      name: 'points',
      url: 'https://img.freepik.com/free-vector/random-square-halftone-pattern_1409-1062.jpg?size=626&ext=jpg&ga=GA1.2.1858535104.1612958726'
    },
    {
      name: 'circles',
      url: 'https://img.freepik.com/free-vector/geometric-groovy-pattern_23-2148854270.jpg?size=626&ext=jpg&ga=GA1.2.1858535104.1612958726'
    },
    {
      name: 'leaves',
      url: 'https://img.freepik.com/free-vector/nature-background-with-gray-blue-leaves_52683-25369.jpg?size=626&ext=jpg&ga=GA1.2.1858535104.1612958726'
    }]
  })

  await baseSock1.save();
  mongoose.connection.close()
}

    createBaseSocks()

// seeder for base socks
