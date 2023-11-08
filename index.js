import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import UserRoute from './routes/UserRoute.js';
import TodoRoute from './routes/TodoRoute.js';

const app = express();

dotenv.config();

mongoose.connect(process.env.MONGODB);

const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('Database Connected to MongoDB'));

app.use(cors());
app.use(express.json());
app.use('/api', UserRoute);
app.use('/api', TodoRoute);

app.listen(5000, () => console.log('Server berjalan...'));
