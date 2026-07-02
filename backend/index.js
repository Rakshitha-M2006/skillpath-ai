import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Allows our frontend to talk to this server safely
app.use(express.json()); // Allows our server to parse JSON data sent in request bodies

// Simple Test Route
app.get('/api/test', (req, res) => {
  res.json({ message: "SkillPath AI Backend API is alive and kicking!" });
});

// Start Server Listener
app.listen(PORT, () => {
  console.log(`🚀 Server is successfully running on http://localhost:${PORT}`);
});