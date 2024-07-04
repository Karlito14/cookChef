require('dotenv').config();
const mongoose = require('mongoose');

mongoose
  .connect(`mongodb+srv://leiroz26:${process.env.PASSWORD_DATABASE}@cluster0.ivycwjk.mongodb.net/cookchef?retryWrites=true&w=majority&appName=Cluster0`)
  .then(() => {
    console.log('connexion DB OK');
  })
  .catch((e) => {
    console.log('connexion KO', e);
  });
