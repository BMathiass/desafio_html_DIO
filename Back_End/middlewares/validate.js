const { validationResult } = require('express-validator');

const validate = (req, res, next) => {
  const errors = validationResult(req);
  
  if (!errors.isEmpty()) {
    return res.status(400).json({
      message: 'Erro de validação.',
      errors: errors.array()
    });
  }

  next();
};

module.exports = validate;
