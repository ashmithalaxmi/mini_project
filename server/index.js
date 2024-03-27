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
