import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import bodyParser from 'body-parser';
import cors from 'cors';
import dbConnection from './src/config.js';
import SignupModel from './src/models/signupModels.js';
const jwtSecret = 'onesimulation||onelearning';
import path from 'path';

// Initialize Express app
const app = express();
app.use(cors(
  {
    origin: ["https://one-simulation-client-ten.vercel.app"],
    methods: ["POST","GET"],
    credentials: true
  }
));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const PORT = 4000;


// Connect to MongoDB
dbConnection();

app.get('/',(req, res) => {
  res.json("helloworld")
})
// routing for the teacher page
app.get('/teachers', (req, res) => {
  res.sendFile(path.join(__dirname, 'teachers.html')); // Serve the send.html file when /send is accessed
});

//routing the student page
app.get('/students', (req, res) => {
  res.sendFile(path.join(__dirname, 'students.html')); // Serve the receive.html file when /receive is accessed
});

// Register (Signup) route
app.post('/signup', async (req, res) => {
  const { fullname, email, password } = req.body;

  try {
    // Check if the user already exists
    const existingUser = await SignupModel.findOne({ email }); // Change from username to email
    if (existingUser) {
      return res.status(400).send('User already exists');
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save the user to the database
    const user = new SignupModel({
      fullname: fullname,
      email: email,
      password: hashedPassword,
    });

    await user.save();
    console.log('Registration successful: ', user._id);

    // Generate JWT token
    const token = jwt.sign({ id: user._id }, jwtSecret, { expiresIn: '1h' });

    const result = { message: 'User successfully signed up', token: token };
    res.status(200).send(result);
  } catch (error) {
    console.log('Server error:', error.message);
    res.status(500).send({ message: 'Server error', error: error.message });
  }
});

// Login route
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the user in the database
    const user = await SignupModel.findOne({ email });
    if (!user) {
      console.log('User does not exist');
      return res.status(400).send('Invalid email or password');
    }

    // Compare the password with the stored hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      console.log('Invalid email or password');
      return res.status(400).send('Invalid email or password');
    }

    // Generate a JWT token
    const token = jwt.sign({ id: user._id }, jwtSecret, { expiresIn: '1h' });

    const result = { message: 'Login successful', token: token };
    console.log(result);
    res.status(200).send(result);
  } catch (error) {
    console.log('Server error:', error.message);
    res.status(500).send({ message: 'Server error', error: error.message });
  }
});


let clients = [];

app.post('/teacher-graph-data', (req, res) => {
  // console.log(req.body);
  const  simulatedData = req.body;
  if (simulatedData) {
    try {
      console.log('simulated Data on server: ', simulatedData);
      sendEventsToAll(simulatedData); // Send the data to all clients via SSE
      res.status(200).json({ message: 'Data sent to students', data: simulatedData });
    } catch (error) {
      res.status(500).json({ error: 'Failed to broadcast data' });
    }
  } else {
    res.status(400).json({ error: 'No data received from teachers' });
  }
});


app.get('/transferData', (req, res) => {
  // Set headers for SSE (text/event-stream)
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');  // Prevent caching
  res.setHeader('Connection', 'keep-alive');   // Keep the connection alive

  // Send an initial keep-alive message to the client
  res.write(': keep-alive\n\n');  // ':' sends a comment, which is ignored by the client
  
  // Add the client to the list of connected clients
  clients.push(res);

  // console.log('Client connected. Total clients:',clients);

  // Remove the client from the list when they disconnect
  req.on('close', () => {
    clients = clients.filter(client => client !== res);
    console.log('Client disconnected. Total clients:', clients.length);
  });

  // Do not send a response like `res.send()`, as the connection should stay open
});

const sendEventsToAll = (data) => {
  // Convert the object data to a JSON string
  const jsonData = JSON.stringify(data);

  // Loop through all clients and send the data in SSE format
  clients.forEach((client) => {
    client.write(`data: ${jsonData}\n\n`); // Send the JSON string to each client
  });
};

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
