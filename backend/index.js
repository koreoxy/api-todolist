import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import UserRoute from './routes/UserRoute.js';
import TodoRoute from './routes/TodoRoute.js';
import AuthRoute from './routes/AuthRoute.js';
import cookieParser from 'cookie-parser';
import path from 'path';

// DYNAMIC PATH
const __dirname = path.resolve();

const app = express();

dotenv.config();

mongoose.connect(process.env.MONGODB);

const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('Database Connected to MongoDB'));

app.use(cors());
app.use(express.json());

app.use(cookieParser());

app.use('/api', UserRoute);
app.use('/api', TodoRoute);
app.use('/api/auth', AuthRoute);

app.use(express.static(path.join(__dirname, '/frontend/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'dist', 'index.html'));
});

app.listen(3000, () => console.log('Server berjalan...'));

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
