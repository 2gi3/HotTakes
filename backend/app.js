// mongoDB connection link: mongodb+srv://ocproject6:<password>@project6.lvb15.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
// mongoDB project6 password: pr6oc

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const sauceRoutes = require('./routes/sauces');
const userRoutes = require('./routes/user');
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

app.use('/api/sauces', sauceRoutes) 
app.use('/api/auth', userRoutes);

module.exports = app;