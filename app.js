import dotenv from 'dotenv';
import express from 'express';
import morgan from 'morgan';
import foodRoute from './routes/foodRoutes.js';

dotenv.config({ path: './config.env' });

const app = express();

// Middlewares
// third-party middleswares
app.use(express.json());
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Mounting
app.use('/api/v1/foods', foodRoute);

export default app;
