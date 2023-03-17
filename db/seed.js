const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
const Present = require('../models/present');
const MONGO_URL = 'mongodb://0.0.0.0:27017/dear-santa';
const presents = require('../db/data');

mongoose.connect(MONGO_URL)
  .then(response => {
    console.log(`Connected to the database ${response.connection.name}`);
    return Present.deleteMany({});
  })
  .then(() => {
    return Present.insertMany(presents); 
  })
  .then(createdPresents => {
    console.log(`Inserted ${createdPresents.length} regalicos in the database`);
    mongoose.connection.close();
  })
  .catch(err => console.error('Error seeding data:', err));
