// Import the Express module
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
app.use(express.json())
require('dotenv').config()
const PORT = 5000;


app.use(cors());

mongoose.connect(process.env.MONGODB_URI)
.then(()=>{
    console.log("mongodb is connected");
})
.catch((error)=>{
    console.log("Failed to load",error);
})

// Root route
app.get('/', (req, res) => {
    res.send('Welcome to the Express server!');
});
                                          
// /ping route
app.get('/ping', (req, res) => {
    res.send('pong');
});


app.use('/players', require('./playerRoutes'));

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
