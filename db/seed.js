const { default: mongoose } = require('mongoose');
mongoose.set('strictQuery', true);
const Present = require('../models/present');
const MONGO_URL = 'mongodb://0.0.0.0:27017/dear-santa';
const presents = require('../db/data');

mongoose.connect(MONGO_URL)
  .then(response => console.log(`Connected to the database ${response.connection.name}`))
  .then(() => {
    return Present.create(presents)
  });
  
  Present.insertMany(presentsData)
  .then(presents => {
    console.log(`Seeded ${presents.length} presents`);
    mongoose.connection.close();
  })
  .then(createdPresents => console.log(`Inserted ${createdPresents.length} regalicos in the database`))
  .then(() => mongoose.connection.close())
  .catch(err => console.error(err))
  .catch(err => console.error('Error seeding data:', err));

