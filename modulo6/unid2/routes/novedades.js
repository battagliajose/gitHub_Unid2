var express = require('express');
var router = express.Router();
var novedadesModel = require('../models/novedadesModel.js');

/* GET home page. */
router.get('/', async function(req, res, next) {
    var novedades = await novedadesModel.getNovedades();

    res.render('novedades', { 
      title: 'Las Moras', 
      usuario: req.session.nombre,
      novedades
    });
});

router.get('/agregar', (req, res, next) => {
  res.render('admin/agregar' , {
    
  });
});

router.post('/agregar', async (req, res, next) => {
  try {
    if (req.body.titulo != "" && req.body.subtitulo != "" && req.body.cuerpo != "") {
      await novedadesModel.insertNovedad(req.body);
      res.redirect('/novedades')
    } else {
      res.render('admin/agregar' , {
        error: true, message: 'Todos los campos son requeridos'
      })
    }
  } catch (error) {
    console.log(error)
    res.render('admin/agregar', {
      error: true, message: 'No se cargó la novedad'
    });
  }
});

module.exports = router;
