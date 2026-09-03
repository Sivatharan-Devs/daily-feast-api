import Food from '../models/foodModel.js';

export const getAllFoods = async (req, res) => {
  try {
    // basic filtering
    const queryObj = { ...req.query };

    const excludedFields = ['page', 'sort', 'limit', 'fields'];
    excludedFields.forEach((el) => delete queryObj[el]);

    const foods = await Food.find(queryObj);
    res.status(200).json({
      status: 'success',
      length: foods.length,
      data: {
        foods,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err.message,
    });
  }
};

export const getFood = async (req, res) => {
  try {
    const food = await Food.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      data: {
        food,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err.message,
    });
  }
};

export const createFood = async (req, res) => {
  try {
    const newFood = await Food.create(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        food: newFood,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
};

export const updateFood = async (req, res) => {
  try {
    const updatedFood = await Food.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      status: 'success',
      data: {
        food: updatedFood,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err.message,
    });
  }
};

export const deleteFood = async (req, res) => {
  try {
    await Food.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err.message,
    });
  }
};
