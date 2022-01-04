var express = require('express');
var router = express.Router();

require('dotenv').config();
var pool = require('../models/bd');

// pool.query('select * from novedades').then(function (resultados){
//   console.log(resultados)
// });

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('novedades', { title: 'Las Moras' });
});
router.post('/', function(req, res, next) {
  pool.query('select * from novedades', req.body.idnovedades, function(error,filas){
            if (error) {            
                console.log('error en la consulta');
                return;
            }
            if (filas.length>0) {
                res.render('novedades', {articulos:filas});
            } else {
                res.render('novedades', {mensaje:'No existe el codigo de articulo ingresado'});
            }    
        });
});


module.exports = router;
