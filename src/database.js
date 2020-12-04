//-----BASE-DE-DATOS-PRODUCCION-----//
// const mongoose = require('mongoose');
// // const URI = 'mongodb+srv://unicoreptiles:Elizabeth123@unicoreptiles.okzuz.mongodb.net/unicoreptiles?retryWrites=true&w=majority';
// const connectDB = async () => {
//   await mongoose.connect('mongodb+srv://unicoreptiles:Elizabeth123@unicoreptiles.okzuz.mongodb.net/unicoreptiles?retryWrites=true&w=majority', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//   })
//   console.log('DataBase is connected ...');
// }

//-----BASE-DE-DATOS-DESARROLLO-----//
const mongoose = require('mongoose');

const connectDB = async () => {
  mongoose.connect('mongodb://localhost/unico', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })

  .then(db => console.log('Base de datos conectada'))
  .catch(err => console.log(err));
}

module.exports = connectDB;