const express = require('express');
const router  = express.Router();
const Celebrity = require('./../models/celebrity');

//const celebrities = require('./routes/celebrities');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/celebrities', (req, res, next) => {
  Celebrity.find()
  .then((celebrities)=>{
      const data = {
          celebrities
      }
      res.render('celebrities', data);
  })
})
module.exports = router
