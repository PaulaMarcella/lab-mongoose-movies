const express = require('express');
const Celebrity = require('./../models/celebrity');
const router  = express.Router();



router.get('/celebrities', (req, res, next) => {
    Celebrity.find()
    .then((celebrities)=>{
        const data = {
            celebrities
        }
        res.render('celebrities', data);
    })
    
  });
  module.exports = router;
