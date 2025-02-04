const mongoose = require('mongoose'); 
 const URI = 'mongodb+srv://jhoalvipereira:jhoalvi5966947@web.r5if5a1.mongodb.net/?retryWrites=true&w=majority'; 
 mongoose.connect(URI)
     .then(db => console.log('Base de datos conectada'))
     .catch(err => console.error(err));  
 module.exports = mongoose; 