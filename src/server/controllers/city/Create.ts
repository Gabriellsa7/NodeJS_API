import { Request, Response } from "express";
import * as yup from "yup";
import { validation } from "../../shared/middleware";

interface ICity {
  city: string;
}

interface IFilter {
  filter?: string;
}

export const createValidation = validation((getSchema) => ({
  body: getSchema<ICity>(
    yup.object().shape({
      city: yup.string().required().min(3),
      filter: yup.string().required().min(3),
    })
  ),
  query: getSchema<IFilter>(
    yup.object().shape({
      filter: yup.string().required().min(3),
    })
  ),
}));
// export const createBodyValidator = validation("body", bodyValidation);

export const create = async (req: Request<{}, {}, ICity>, res: Response) => {
  console.log(req.body);

  return res.send("hy");
};
