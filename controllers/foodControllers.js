export const getAllFoods = (req, res, next) => {
  res.status(500).json({
    status: 'fail',
    message: 'Test:getAllFoods',
  });
  next();
};

export const getFood = (req, res, next) => {
  res.status(500).json({
    status: 'fail',
    message: 'Test:getFood',
  });
  next();
};

export const createFood = (req, res, next) => {
  res.status(500).json({
    status: 'fail',
    message: 'Test:createFood',
  });
  next();
};

export const updateFood = (req, res, next) => {
  res.status(500).json({
    status: 'fail',
    message: 'Test:updateFood',
  });
  next();
};

export const deleteFood = (req, res, next) => {
  res.status(500).json({
    status: 'fail',
    message: 'Test:deleteFood',
  });
  next();
};
