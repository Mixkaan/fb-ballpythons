const { Router } = require('express'),
  router = Router();

//- MODELS ---------------------------------------------------------- //>
const Python = require('../models/Python');

//- ROUTES
router.get('/disponible', async ( req, res ) => {
  const pythons = await Python.find();
  res.render('02_avialable/01_avialable', {pythons});
});

module.exports = router;