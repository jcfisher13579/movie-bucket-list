const router = require("express").Router();

<<<<<<< HEAD
const userRoutes = require('./users-routes');
=======
const userRoutes = require("./users-routes");
>>>>>>> 3c821df14f8acb462816c224d0b1d4021b5b915b

router.use("/users", userRoutes);

module.exports = router;
