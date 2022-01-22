var express = require('express');
var router = express.Router();
var novedadesModel = require('../models/novedadesModel.js');

require('dotenv').config();
var pool = require('../models/bd');



/* GET home page. */
router.get('/', async function(req, res, next) {
    var novedades = await novedadesModel.getNovedades();
    pool.query('select * from novedades').then(function (resultados){
      console.log(resultados)
    });
    res.render('novedades', { 
      title: 'Las Moras', 
      //layout: 'admin/layout',
      usuario: req.session.nombre,
      novedades
    });
});

module.exports = router;
