const express = require('express');
const connectDB = require('./config/db');
const userRoutes = require('./routes/users');
const taskRoutes = require('./routes/tasks');

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json());

app.get('/', (req, res) => res.send('API Running'));

app.use('/api/users', userRoutes);
app.use('/api/tasks', taskRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
