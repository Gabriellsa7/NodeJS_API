import { Request, Response } from "express";
import * as yup from "yup";
import { validation } from "../../shared/middleware";
import { StatusCodes } from "http-status-codes";

interface IParamProps {
  id?: number | null;
}

export const deleteByIdValidation = validation((getSchema) => ({
  params: getSchema<IParamProps>(
    yup.object().shape({
      id: yup.number().integer().moreThan(0),
    })
  ),
}));

export const deleteById = async (req: Request<IParamProps>, res: Response) => {
  console.log(req.params);

  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send("Not Implemented");
};
