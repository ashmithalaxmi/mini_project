const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://ashmitharengasamy96:<gwJenBY7wv86bDnI>@finalproj.l7bz8hb.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});


mongoose.connection.on('connected', () => {
    console.log('Mongoose connected to MongoDB');
  });
  
  mongoose.connection.on('error', (err) => {
    console.error('Mongoose connection error:', err);
  });
  
  mongoose.connection.on('disconnected', () => {
    console.log('Mongoose disconnected from MongoDB');
  });
  
  // Close the Mongoose connection when the Node process exits
  process.on('SIGINT', () => {
    mongoose.connection.close(() => {
      console.log('Mongoose connection disconnected due to app termination');
      process.exit(0);
    });
  });

  
  const Schema = mongoose.Schema;

  const userSchema = new Schema({
    username: String,
    email: { type: String, unique: true },
    password: String
  });
  
  const User = mongoose.model('User', userSchema);
  
  // Now you can use the User model to perform CRUD operations on the 'users' collection
  