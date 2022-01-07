var express = require('express');
var router = express.Router();

require('dotenv').config();
var pool = require('../models/bd');



/* GET home page. */
router.get('/', function(req, res, next) {
    pool.query('select * from novedades').then(function (resultados){
      console.log(resultados)
    });
    res.render('novedades', { title: 'Las Moras' });
});

module.exports = router;
