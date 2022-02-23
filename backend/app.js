// mongoDB connection link: mongodb+srv://ocproject6:<password>@project6.lvb15.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
// mongoDB project6 password: pr6oc

const express = require('express');

const app = express();

app.use((req, res, next) => {
  console.log('Request received!');
  next();
});

app.use((req, res, next) => {
  res.status(201);
  next();
});

app.use((req, res, next) => {
  res.json({ message: 'Your request was successful!' });
  next();
});

app.use((req, res, next) => {
  console.log('Response sent successfully!');
});

module.exports = app;