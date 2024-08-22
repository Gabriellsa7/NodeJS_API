import { Router } from "express";
import { CityController } from "../controllers";

const router = Router();

router.get("/", (req, res) => {
  return res.send("produto adicionada");
});

router.post(
  "/city",
  CityController.createBodyValidator,
  CityController.createQueryValidator,
  CityController.create
);

export { router };
