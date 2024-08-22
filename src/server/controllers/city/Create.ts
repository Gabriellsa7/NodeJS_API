import { Request, RequestHandler, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from "yup";
import { validation } from "../../shared/middleware";

interface ICity {
  city: string;
}

interface IFilter {
  filter?: string;
}

//Validation Schema
const bodyValidation: yup.Schema<ICity> = yup.object().shape({
  city: yup.string().required().min(3),
});

//Validation Schema with yup and query
const queryValidation: yup.Schema<IFilter> = yup.object().shape({
  filter: yup.string().required().min(3),
});

export const createValidation = validation(queryValidation);
export const createBodyValidator = validation(bodyValidation);

export const create = async (req: Request<{}, {}, ICity>, res: Response) => {
  console.log(req.body);

  return res.send("hy");
};
