const { Router } = require('express');
const router = Router()

// SECURE-MIDDLEWARES-REQUIES
const passport = require('passport');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const PassportLocal = require('passport-local').Strategy;

// MODELS ------------------------//
const Python = require('../models/Python');
const Product = require('../models/Product');

router.use(cookieParser('unico reptiles'));
router.use(session({
  secret: 'unico reptiles',
  resave: true,
  saveUninitialized: true,
}));
router.use(passport.initialize());
router.use(passport.session());
passport.use(new PassportLocal(function(
  username, password, done) {
  if(username === process.env.ADMIN_USER && password === process.env.ADMIN_PASSWORD)
    return done(null,{id: 1, name: 'victor'});
  done(null, false);
}));
passport.serializeUser(function(user, done){
  done(null, user.id);
});
passport.deserializeUser(function(id, done) {
  done(null, {id: 1, name: 'victor'})
});

//- LOGIN-ENTRY PAGE ------------------------------------------------ //>
router.get('/acceder', (req, res) => {
  res.render('06_admin/01_login')
});
//- LOGIN-POST-PETITION --------------------------------------------- //>
router.post('/logged', passport.authenticate('local',{
  successRedirect: '/admin',
  failureRedirect: '/acceder',
}));

// ADMIN-MAIN-PAGE ---------------------------------------- //
router.get('/admin', (req, res, next) => {
  //AUTH SECURE
  if(req.isAuthenticated()) return next();
  res.redirect('/acceder')},
  //ROUTE
  async(req, res) => {
  const pythons = await Python.find();
  const products = await Product.find();
  res.render('06_admin/02_admin', {pythons, products});
});

router.get('/admin/agregar/piton', (req, res, next) => {
  //AUTH SECURE
  if(req.isAuthenticated()) return next();
  res.redirect('/acceder')},
  //ROUTE
  async(req, res) => {
  res.render('06_admin/03_add/01_python');
});

// PRODUCT
router.get('/admin/agregar/producto', (req, res, next) => {
  //AUTH SECURE
  if(req.isAuthenticated()) return next();
  res.redirect('/acceder')},
  //ROUTE
  async(req, res) => {
  res.render('06_admin/03_add/01_python');
});

// CLOUDINARY -----
const cloudinary = require('cloudinary');
cloudinary.config({
  cloud_name: 'fb-ballpythons',
  api_key: '541343659118652',
  api_secret: '_RbvVFrtAahaX7miD2QVFptgKU'
});
// FS EXTRA
const { unlink } = require('fs-extra');

router.post('/admin/agregar/piton/POST', async(req, res) => {
  const {name, description, morph, price, gender, age} = req.body;
  const result = await cloudinary.v2.uploader.upload(req.file.path);
  const python = new Python({
    name, description, morph, price, gender, age,

    imageURL: result.url,
    public_id: result.public_id
  });
  await python.save();
  await unlink(req.file.path);
  res.redirect('/admin')
})
// router.get('/admin/agregar/animal/DELETE=:id', async(req, res) => {
//   const { id } = req.params;
//   const animal = await Animal.findByIdAndDelete(id);
//   await cloudinary.v2.uploader.destroy(animal.public_id)
//   res.redirect('/admin')
// });

// // PRODUCT
// router.post('/admin/agregar/producto/POST', async(req, res) => {
//   const {name, description, price, category} = req.body;
//   const result = await cloudinary.v2.uploader.upload(req.file.path);
//   const product = new Product({
//     name, description, price, category,

//     imageURL: result.url,
//     public_id: result.public_id
//   });
//   await product.save();
//   await unlink(req.file.path);
//   res.redirect('/admin')
// })
// router.get('/admin/agregar/producto/DELETE=:id', async(req, res) => {
//   const { id } = req.params;
//   const product = await Product.findByIdAndDelete(id);
//   await cloudinary.v2.uploader.destroy(product.public_id);
//   res.redirect('/admin')
// })

module.exports = router;