const { Router } = require('express');
const router = Router();

const Python = require('../models/Python');



// HOME-PAGE
router.get('/', async (req, res) => {
  const pythons = await Python.find();
  res.render('01_homepage/01_homepage', {pythons});
});

module.exports = router;