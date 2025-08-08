const express = require('express');
const cors = require('cors');
const connectDB = require('./config/database');

// Load environment variables
require('dotenv').config();



// Initialize Express app
const app = express();

// Connect to database
connectDB();

// Middleware
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? 'your-frontend-domain.com' 
    : 'http://localhost:3000',
  credentials: true
}));

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/auth', require('./routes/auth'));

// Health check route
app.get('/api/health', (req, res) => {
  res.json({ 
    message: 'Engineering Platform API is running!',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV
  });
});

// Handle undefined routes
app.use('*', (req, res) => {
  res.status(404).json({ 
    message: `Route ${req.originalUrl} not found` 
  });
});

// Global error handler
app.use((error, req, res, next) => {
  console.error('Global error:', error);
  res.status(500).json({
    message: 'Something went wrong!',
    error: process.env.NODE_ENV === 'development' ? error.message : undefined
  });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(` Server running on port ${PORT}`);
  console.log(` API URL: http://localhost:${PORT}`);
  console.log(`̀ Health check: http://localhost:${PORT}/api/health`);
});