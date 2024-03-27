const mongoose = require('mongoose');
const User = require('../models/user');

const user = { ID: 1, Name: "Admin", Email: 'Admin@gmail.com', Password: "Admin123"}

async function seed() {
    try {
      await User.create(user);
      console.log('Data seeding complete');
    } catch (error) {
      console.error('Error seeding data:', error);
    } finally {
      mongoose.disconnect();
    }
  }
  
  seed();
