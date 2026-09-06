import express from 'express';
import {
  getAllFoods,
  getFood,
  createFood,
  updateFood,
  deleteFood,
  getTop5Foods,
  getTop10Foods,
  getPopularFoods,
  getDiscountedFoods,
} from '../controllers/foodControllers.js';

// create router
const router = express.Router();

router.route('/').get(getAllFoods).post(createFood);

// alias routes
router.route('/top-5-foods').get(getTop5Foods, getAllFoods);
router.route('/top-10-foods').get(getTop10Foods, getAllFoods);
router.route('/popular-foods').get(getPopularFoods, getAllFoods);
router.route('/discounted-foods').get(getDiscountedFoods, getAllFoods);

router.route('/:id').get(getFood).patch(updateFood).delete(deleteFood);

export default router;
