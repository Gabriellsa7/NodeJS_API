import { RequestHandler } from "express";
import { StatusCodes } from "http-status-codes";
import { Schema, ValidationError } from "yup";

type TValidation = (scheme: Schema<any>) => RequestHandler;

export const validation: TValidation =
  (scheme: Schema<any>) => async (req, res, next) => {
    try {
      await scheme.validate(req.query, {
        abortEarly: false,
      });
      //pass to the next controller
      return next();
    } catch (error) {
      const yupError = error as ValidationError;
      const errors: Record<string, string> = {};

      yupError.inner.forEach((error) => {
        error.message;
        if (!error.path) return;

        errors[error.path] = error.message;
      });

      return res.status(StatusCodes.BAD_REQUEST).json({
        errors,
      });
    }
  };
