const mongoose = require('mongoose');
const express = require('express');
const cors = require("cors");
const UserModel = require("./models/user")
const bodyParser = require('body-parser')
const dotenv = require('dotenv');
dotenv.config();
const app = express();
app.use(cors())
app.use(express.json())
const PORT = process.env.PORT || 5001;
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(6001, () => console.log(`Server Port: ${PORT}`));
  })
  .catch((error) => console.log(error.message + " did not connect"));

  app.get('/getUsers', async (req,res) => {
    try {
        const users = await UserModel.find();
        res.json(users); // Send retrieved users as JSON response
    } catch (error) {
        console.error('Error retrieving users:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body)
  const user = await UserModel.findOne({ password });
  const u = await UserModel.find()
  console.log(u)
  console.log(user)
});

app.use(bodyParser.json());
app.post('/createUser', async (req, res) => {
try {
    const { name, email, password } = req.body;
    const newUser = new UserModel({
    Name : name,
    Email : email,
    Password : password,
    });

    // Save the user to the database
    await newUser.save();

    // Respond with success message
    res.status(201).json({ message: 'User created successfully', user: newUser });
} catch (error) {
    // Handle errors
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
}
});

