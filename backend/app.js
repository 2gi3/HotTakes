// mongoDB connection link: mongodb+srv://ocproject6:<password>@project6.lvb15.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
// mongoDB project6 password: pr6oc

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const sauce = require('./models/sauce');
// mongoose.connect(process.env.KEY)   Why is this not working?
mongoose.connect('mongodb+srv://ocproject6:pr6oc@project6.lvb15.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
  .then(() => {
    console.log('Successfully connected to MongoDB Atlas!');
  })
  .catch((error) => {
    console.log('Unable to connect to MongoDB Atlas!');
    console.error(error);
  });

  app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

  // add a new sauce to the database
  app.post('/api/sauces', (req, res, next) => {
    const sauce = new sauce({
      title: req.body.title,
      description: req.body.description,
      imageUrl: req.body.imageUrl,
      price: req.body.price,
      userId: req.body.userId
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
  });

  // get array of all sauces
  app.get('/api/sauces', (req, res, next) => {
    sauce.find().then(
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
  });

  // get a single sauce by id
  app.get('/api/sauces/:id', (req, res, next) => {
    sauce.findOne({
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
  });

  //delete a sauce from database
  app.delete('/api/sauces/:id', (req, res, next) => {
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
  });

module.exports = app;