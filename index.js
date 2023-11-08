import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import UserRoute from './routes/UserRoute.js';
import TodoRoute from './routes/TodoRoute.js';
import AuthRoute from './routes/AuthRoute.js';
import cookieParser from 'cookie-parser';

const app = express();

dotenv.config();

mongoose.connect(process.env.MONGODB);

const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('Database Connected to MongoDB'));

app.use(cors());
app.use(express.json());

app.use(cookieParser());

app.get('/api', (req, res) => {
  try {
    const successMessage = 'API Response Success!';
    res.status(200).json({ message: successMessage });
  } catch (error) {
    const errorMessage = 'Terjadi kesalahan dalam memproses permintaan.';
    res.status(500).json({ error: errorMessage });
  }
});

app.use('/api', UserRoute);
app.use('/api', TodoRoute);
app.use('/api/auth', AuthRoute);

app.listen(5000, () => console.log('Server berjalan...'));

// MIDDLEWARE HANDDLE ERROR
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal server Error';
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
