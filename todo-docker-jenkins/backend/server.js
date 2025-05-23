const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const todoRoutes = require('./routes/todoRoutes');
const { errorHandler } = require('./middleware/errorMiddleware');
dotenv.config();
connectDB();

const app = express();
app.use(cors({
  origin: 'http://43.204.131.219:5173', 
  methods: ['GET', 'POST'],
}));
app.use(express.json());

app.use('/api/todos', todoRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => console.log(`Server running on port ${PORT}`));
