import dotenv from 'dotenv';
import express from 'express';
import morgan from 'morgan';

dotenv.config({ path: './config.env' });

const app = express();

// Middlewares
// third-party middleswares
app.use(express.json());
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

export default app;
