const Sauce = require('../models/sauce');

exports.createSauce= (req, res, next) => {
    const sauce = new Sauce({
      name: req.body.name,
      manifacturer: req.body.manifacturer,
      description: req.body.description,
      imageUrl: req.body.imageUrl,
      mainPepperIngredient: req.body. mainPepperIngredient,
      heat: req.body.heat
    });
    sauce.save().then(
      () => {
        res.status(201).json({
          message: 'Post saved successfully!'
        });
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  };

  exports.getAllSauces = (req, res, next) => {
    Sauce.find().then(
      (sauces) => {
        res.status(200).json(sauces);
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  };

  exports.getOneSauce =  (req, res, next) => {
    Sauce.findOne({
      _id: req.params.id
    }).then(
      (sauce) => {
        res.status(200).json(sauce);
      }
    ).catch(
      (error) => {
        res.status(404).json({
          error: error
        });
      }
    );
  };

  exports.deleteOneSauce = (req, res, next) => {
    Sauce.findOne({ _id: req.params.id }).then(
      (sauce) => {
        if (!sauce) {
          return res.status(404).json({
            error: new Error('Objet non trouvé !')
          });
        }
        if (sauce.userId !== req.auth.userId) {
          return res.status(401).json({
            error: new Error('Requête non autorisée !')
          });
        }
        sauce.deleteOne({_id: req.params.id}).then(
          () => {
            res.status(200).json({
              message: 'Deleted!'
            });
          }
        ).catch(
          (error) => {
            res.status(400).json({
              error: error
            });
          }
        );
      }
    );
  };