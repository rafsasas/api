const { body, param } = require("express-validator");

const validations = {
  
    validationInsertUser: () => {
      return [
        body("email").isEmail(),
        body("password").isLength({ min: 8 }),
        body("name").isLength({ min: 1 }),
      ];
    },
  
  
  
      validationDeleteUser: () => {
          return[
              param("id").isLength({ min :1 })
          ];   
      },
  
  
  
      validationPutUser: () => {
        return[
            param("id").isLength({ min: 1 }),
            body("email").isEmail(),
            body("password").isLength({ min: 8}),
            body("name").isLength({ min: 1})
        ]   
      }
};


module.exports = validations;
