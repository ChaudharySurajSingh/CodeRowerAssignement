require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const configurationsRouter = require('./routes/configurations');

const app = express();
app.use(cors());            
app.use(express.json()); 

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;
mongoose.connect(MONGO_URI).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('MongoDB connection error:', err.message);
  process.exit(1);
});
app.use('/api/configurations', configurationsRouter);
app.get('/', (req, res) => res.send('Coderower backend running'));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
