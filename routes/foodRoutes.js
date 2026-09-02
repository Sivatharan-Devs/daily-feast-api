import express from 'express';
import {
  getAllFoods,
  getFood,
  createFood,
  updateFood,
  deleteFood,
} from '../controllers/foodControllers.js';

// create router
const router = express.Router();

router.route('/').get(getAllFoods).post(createFood);
router.route('/:id').get(getFood).patch(updateFood).delete(deleteFood);

export default router;
