import { Request, Response } from "express";
import * as yup from "yup";
import { validation } from "../../shared/middleware";
import { StatusCodes } from "http-status-codes";

interface ICity {
  name: string;
}

export const createValidation = validation((getSchema) => ({
  body: getSchema<ICity>(
    yup.object().shape({
      name: yup.string().required().min(3),
    })
  ),
}));
// export const createBodyValidator = validation("body", bodyValidation);

export const create = async (req: Request<{}, {}, ICity>, res: Response) => {
  console.log(req.body);

  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send("Not Implemented");
};
