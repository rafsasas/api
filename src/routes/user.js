const router = require("express").Router(); 
const user = require("../controllers/userController");
const validation = require('../validations/validations');
const {intercept} = require("../validations/intercept")

router.get("/users", user.getAll);

router.post("/users", validation.validationInsertUser(), intercept, user.insertUser);
 
router.delete("/users/:id", validation.validationDeleteUser(), intercept, user.deleteUser);

router.put("/users/:id", validation.validationPutUser(), intercept, user.updateUser);

module.exports = router;
