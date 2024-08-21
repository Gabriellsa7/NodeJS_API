import { Router } from "express";
import { StatusCodes } from "http-status-codes";

const router = Router();

router.get("/", (req, res) => {
  return res.send("produto adicionada");
});

router.post("/test", (req, res) => {
  return res.status(StatusCodes.OK).json(req.body);
});

export { router };
