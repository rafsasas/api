const { validationResult } = require("express-validator");

const intercept = {
  intercept: (req, res, next) => {
    const { errors } = validationResult(req);

    if (errors.length) {
      return res.status(400).send(errors);
    }

    next();
  },
};

module.exports = intercept;
