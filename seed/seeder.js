const mongoose = require('mongoose');
const User = require('../models/users');
const Sock = require('../models/socks');
const BaseSock = require('../models/basesocks');

mongoose.connect('mongodb://localhost:27017/socks', { 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
});



// color black, red, blue, green

// pic art https://lh6.ggpht.com/HlgucZ0ylJAfZgusynnUwxNIgIp5htNhShF559x3dRXiuy_UdP3UQVLYW6c=s1200
// star wars https://cdn.commonwealthclub.org/s3fs-public/styles/hero/public/2019-11/hero%20star%20wars.png?itok=waMDC-JL
// sport https://static4.depositphotos.com/1013084/343/v/600/depositphotos_3430480-stock-illustration-sport-silhouettes.jpg
// pizza https://d1biw2rz2h5h5w.cloudfront.net/images/patterns/api/repeat/27899.jpg
// ice-creame https://d1biw2rz2h5h5w.cloudfront.net/images/patterns/api/repeat/10128.jpg
// wonderland https://d1biw2rz2h5h5w.cloudfront.net/images/patterns/api/repeat/7555.jpg
// polar animals https://d1biw2rz2h5h5w.cloudfront.net/images/patterns/api/repeat/5620.jpg

// water melon https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/4081793/original/a54344eed0876c32419f2af12432f1f49a53c57e.jpg
// leaves https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/63200734/original/200e2a1d8a6f707edb1208534027a082c5c00d59.jpg
// hot air balloon https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/187984828/original/0eab5bd06704efd318f3d2defe78ccb3f38f4b71.jpeg
// whales https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/107456603/original/a64c4427a3d04aed753c7a2cf8c0f86816019c21.jpeg

// pattern 
// lines https://img.freepik.com/free-vector/abstract-colorful-topographic-map-design-vector_1035-14092.jpg?size=626&ext=jpg&ga=GA1.2.1858535104.1612958726
// points https://img.freepik.com/free-vector/random-square-halftone-pattern_1409-1062.jpg?size=626&ext=jpg&ga=GA1.2.1858535104.1612958726
// circles https://img.freepik.com/free-vector/geometric-groovy-pattern_23-2148854270.jpg?size=626&ext=jpg&ga=GA1.2.1858535104.1612958726
// leaves https://img.freepik.com/free-vector/nature-background-with-gray-blue-leaves_52683-25369.jpg?size=626&ext=jpg&ga=GA1.2.1858535104.1612958726

// seeder for base socks
