const express = require('express');

const router = express.Router();
const saucesCtrl = require('../controllers/sauces');

  router.post('/', saucesCtrl.createSauce);  
  router.get('/', saucesCtrl.getAllSauces);
  router.get('/:id', saucesCtrl.getOneSauce);
  router.delete('/:id', saucesCtrl.deleteOneSauce);

module.exports = router;