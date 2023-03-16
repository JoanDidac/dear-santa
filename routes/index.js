const express = require('express');
const router = express.Router();
const Present = require('../models/Present');


// Route for all presents


router.get('/', (req, res) => {
  res.render('home');
});

router.get('/', (req, res) => {
  res.redirect('/presents');
});

router.get('/presents', async (req, res, next) => {
  try {
    const presents = await Present.find();
    res.render('presents', { presents });
  } catch (err) {
    next(err);
  }
});

// Route for a specific present
router.get('/presents/:id', async (req, res, next) => {
  try {
    const present = await Present.findById(req.params.id);
    res.render('present-details', { present });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
