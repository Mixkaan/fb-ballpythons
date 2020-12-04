const { Router } = require('express');
const router = Router();

// HOME-PAGE
router.get('/', (req, res) => {
  res.render('01_homepage/01_homepage');
});

module.exports = router;