import { Router } from "express";
import { CityController } from "../controllers";

const router = Router();

router.get("/", (req, res) => {
  return res.send("product added");
});

router.post("/city", CityController.createValidation, CityController.create);
router.get("/city", CityController.getAllValidation, CityController.getAll);

export { router };
