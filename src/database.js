//-----BASE-DE-DATOS-PRODUCCION-----//
const mongoose = require('mongoose');
// const URI = 'mongodb+srv://unicoreptiles:Elizabeth123@unicoreptiles.okzuz.mongodb.net/unicoreptiles?retryWrites=true&w=majority';
const connectDB = async () => {
  await mongoose.connect('mongodb+srv://admin:RataEgipcia123@fb-ballpythons.lrb4u.mongodb.net/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  console.log('DataBase is connected ...');
}

//-----BASE-DE-DATOS-DESARROLLO-----//
// const mongoose = require('mongoose');

// const connectDB = async () => {
//   mongoose.connect('mongodb://localhost/fb', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//   })

//   .then(db => console.log('Base de datos conectada'))
//   .catch(err => console.log(err));
// }

module.exports = connectDB;