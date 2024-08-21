import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from "yup";

interface ICity {
  city: string;
}

//Validation Schema
const bodyValidation: yup.Schema<ICity> = yup.object().shape({
  city: yup.string().required().min(3),
});

export const create = async (req: Request<{}, {}, ICity>, res: Response) => {
  let validatedData: ICity | undefined = undefined;

  try {
    validatedData = await bodyValidation.validate(req.body);
  } catch (error) {
    const yupError = error as yup.ValidationError;
    return res.json({
      errors: {
        default: yupError.message,
      },
    });
  }

  console.log(validatedData);

  return res.send("hy");
};
