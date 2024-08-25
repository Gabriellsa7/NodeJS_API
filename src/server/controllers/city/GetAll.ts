import { Request, Response } from "express";
import * as yup from "yup";
import { validation } from "../../shared/middleware";
import { StatusCodes } from "http-status-codes";

interface IQueryProps {
  page?: number | null;
  limit?: number | null;
  filter?: string | null;
}

export const getAllValidation = validation((getSchema) => ({
  body: getSchema<IQueryProps>(
    yup.object().shape({
      page: yup.number().notRequired().moreThan(0),
      limit: yup.number().notRequired().moreThan(0),
      filter: yup.string().notRequired(),
    })
  ),
}));

export const getAll = async (
  req: Request<{}, {}, {}, IQueryProps>,
  res: Response
) => {
  res.setHeader("access-control-expose-headers", "x-total-count");
  res.setHeader("x-total-count", 1);

  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json([
    {
      id: 1,
      name: "Matatas",
    },
  ]);
};
