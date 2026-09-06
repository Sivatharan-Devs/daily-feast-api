class APIFeatures {
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }

  filter() {
    //   basic filtering
    // shallow copy of our queryString object
    const queryObj = { ...this.queryString };
    // exclude the special field names
    const excludedFields = ['sort', 'limit', 'page', 'fields'];
    // exclude those fields from our queryObj
    excludedFields.forEach((field) => delete queryObj[field]);

    // Advanced
    const advancedQueryObj = {};
    Object.keys(queryObj).forEach((key) => {
      const match = key.match(/^(.+)\[(gte|gt|lte|lt)\]$/);
      if (match) {
        const field = match[1];
        const operator = `$${match[2]}`;

        advancedQueryObj[field] = {
          ...(advancedQueryObj[field] || {}),
          [operator]: queryObj[key],
        };
      } else {
        advancedQueryObj[key] = queryObj[key];
      }
    });

    this.query = this.query.find(advancedQueryObj);

    return this;
  }

  //   sort
  sort() {
    if (this.queryString.sort) {
      if (typeof this.queryString.sort !== 'string') {
        throw new Error('Sort parameter must be a string.');
      }
      const sortBy = this.queryString.sort.split(',').join(' ');
      this.query = this.query.sort(sortBy);
    }
    return this;
  }

  //   limit
  limitFields() {
    if (this.queryString.fields) {
      if (typeof this.queryString.fields !== 'string') {
        throw new Error('Fields parameter must be a string.');
      }
      const fields = this.queryString.fields.split(',').join(' ');
      this.query = this.query.select(fields); // projection
    } else {
      this.query = this.query.select('-__v');
    }
    return this;
  }

  //   Pagination
  paginate() {
    const page =
      this.queryString.page === undefined ? 1 : Number(this.queryString.page);
    const limit =
      this.queryString.limit === undefined
        ? 100
        : Number(this.queryString.limit);

    // check valid or not
    if (
      !Number.isInteger(page) ||
      !Number.isInteger(limit) ||
      page < 1 ||
      limit < 1 ||
      limit > 100
    ) {
      throw new Error(
        'Page must be a positive integer and limit must be between 1 and 100.'
      );
    }

    const skip = (page - 1) * limit;

    this.query = this.query.skip(skip).limit(limit);
    return this;
  }
}

export default APIFeatures;
