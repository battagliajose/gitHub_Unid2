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

router.post('/modificar', async (req, res, next) => {
  try {
      let obj = {
        titulo: req.body.titulo,
        subtitulo: req.body.subtitulo,
        cuerpo: req.body.cuerpo
      }
      await novedadesModel.modificarNovedad(obj, req.body.id);
      res.redirect('/novedades')
  } catch (error) {
    console.log(error)
    res.render('admin/modificar', {
      error: true, message: 'No se cargó la novedad'
    });
  }
});

router.get('/eliminar/:id', async (req, res, next) => {
  var id = req.params.id;
  await novedadesModel.deleteNovedad(id);
  res.redirect('/novedades')
})

router.get('/modificar/:id', async (req, res, next) => {
  let id = req.params.id;
  let novedad = await novedadesModel.getNovedad(id);
  res.render('admin/modificar', {
    layout: 'admin/layout',
    novedad
  })
})

module.exports = router;
