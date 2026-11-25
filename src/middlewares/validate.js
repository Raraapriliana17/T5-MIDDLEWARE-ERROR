const AppError = require('../utils/AppError');

function validate(schema) {
  return (req, res, next) => {
    const { error, value } = schema.validate(req.body, {
      abortEarly: false,
      stripUnknown: true
    });

    if (error) {
      const pesanGabungan = error.details.map((d) => d.message).join('; ');
      return next(new AppError(pesanGabungan, 422, 'VALIDATION_ERROR'));
    }

    req.body = value;
    next();
  };
}

module.exports = validate;