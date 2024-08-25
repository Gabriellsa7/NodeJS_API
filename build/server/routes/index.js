"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const controllers_1 = require("../controllers");
const router = (0, express_1.Router)();
exports.router = router;
router.get("/", (req, res) => {
    return res.send("product added");
});
router.post("/city", controllers_1.CityController.createValidation, controllers_1.CityController.create);
router.get("/city", controllers_1.CityController.getAllValidation, controllers_1.CityController.getAll);
router.get("/city/:id", controllers_1.CityController.getByIdValidation, controllers_1.CityController.getById);
router.put("/city/:id", controllers_1.CityController.updateByIdValidation, controllers_1.CityController.updateById);
router.delete("/city/:id", controllers_1.CityController.deleteByIdValidation, controllers_1.CityController.deleteById);
