import fs from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Food from '../../models/foodModel.js';

dotenv.config({ path: './config.env' });

// Read file sample food data
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const foods = JSON.parse(
  fs.readFileSync(`${__dirname}/food-samples.json`, 'utf-8')
);

// connection string
const DB = process.env.DB_CONNECTION_STRING.replace(
  '<APP_NAME>',
  process.env.APP_NAME
)
  .replace('<DB_USERNAME>', process.env.DB_USERNAME)
  .replace('<DB_PASSWORD>', process.env.DB_PASSWORD);

//   connect to db
mongoose.connect(DB).then(() => console.log('db connected successfully'));

const importData = async () => {
  try {
    await Food.create(foods);
    console.log('Data successfully loaded');
  } catch (err) {
    console.log(err);
  }
};
const deleteData = async () => {
  try {
    await Food.deleteMany();
    console.log('Data successfully deleted');
  } catch (err) {
    console.log(err);
  }
};

console.log(process.argv);

if (process.argv[2] === '--import') {
  importData();
} else if (process.argv[2] === '--delete') {
  deleteData();
}
