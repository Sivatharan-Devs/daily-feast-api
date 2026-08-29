import dotenv from 'dotenv';
import express from 'express';

dotenv.config({ path: './config.env' });

const app = express();

// Middlewares
// third-party middleswares
app.use(express.json());

export default app;
