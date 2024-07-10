const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const User = require('./models/User'); 

// MongoDB URI
const uri = "mongodb+srv://Joy:01756202157@joyapi.3lrsb78.mongodb.net/Joy?retryWrites=true&w=majority&appName=JoyAPI";

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected successfully to server"))
  .catch(e => console.error(e));

// Registration Route
app.post('/register', async (req, res) => {
  try {
    const newUser = new User(req.body);
    const savedUser = await newUser.save();
    console.log(`Registration successful for user: ${savedUser.username}`);
    res.status(201).json({ success: true, message: 'Registration successful' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: err.message });
}});

// Login Route
app.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username, password });
    if (user) {
      console.log(`Login successful for user: ${username}`);
      res.status(200).json({ success: true, message: 'Login successful' });
    } else {
      console.log(`Login failed for user: ${username}`);
      res.status(401).json({ success: false, message: 'Login failed' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: err.message });
  }
});

// Profile Route
app.get('/profile/:userId', async (req, res) => {
  const { userId } = req.params;
  const user = await User.findById(userId);
  if (user) {
    res.send(user);
  } else {
    res.status(404).send({ message: 'User not found' });
}});

// Example route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start server after MongoDB connection is established
mongoose.connection.once('open', () => {
  const PORT = process.env.PORT || 8000; 
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});