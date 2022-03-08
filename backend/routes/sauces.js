const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');
const saucesCtrl = require('../controllers/sauces');

  router.post('/', auth, multer, saucesCtrl.createSauce);  
  router.get('/', auth, saucesCtrl.getAllSauces);
  router.put('/:id', auth, multer, saucesCtrl.modifySauce);
  router.get('/:id', auth, saucesCtrl.getOneSauce);
  router.delete('/:id', auth, saucesCtrl.deleteOneSauce);
  router.post('/:id/like', auth, saucesCtrl.likeSauce);


module.exports = router;
