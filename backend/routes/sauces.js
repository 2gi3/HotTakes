const express = require('express');
const auth = require('../middleware/auth');
const router = express.Router();
const saucesCtrl = require('../controllers/sauces');

  router.post('/', auth, saucesCtrl.createSauce);  
  router.get('/', auth, saucesCtrl.getAllSauces);
  router.get('/:id', auth, saucesCtrl.getOneSauce);
  router.delete('/:id', auth, saucesCtrl.deleteOneSauce);

module.exports = router;
