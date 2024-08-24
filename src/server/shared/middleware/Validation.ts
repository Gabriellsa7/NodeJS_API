import { RequestHandler } from "express";
import { StatusCodes } from "http-status-codes";
import { Schema, ValidationError } from "yup";

type TProperty = "body" | "header" | "params" | "query";

//this function return just one schema
type TGetSchema = <T>(schema: Schema<T>) => Schema<T>;

type TAllSchemas = Record<TProperty, Schema<any>>;

//this function return all schemas
type TGetAllSchemas = (getSchema: TGetSchema) => Partial<TAllSchemas>;

type TValidation = (getAllSchemas: TGetAllSchemas) => RequestHandler;

//middleware validation with yup
export const validation: TValidation =
  (getAllSchemas) => async (req, res, next) => {
    //pass a arrow function to pass all values to schemas
    const schemas = getAllSchemas((schema) => schema);
    const errorsResult: Record<string, Record<string, string>> = {};

    Object.entries(schemas).forEach(async ([key, schema]) => {
      try {
        await schema.validateSync(req[key as TProperty], {
          abortEarly: false,
        });
      } catch (error) {
        const yupError = error as ValidationError;
        const errors: Record<string, string> = {};

        yupError.inner.forEach((error) => {
          error.message;
          if (!error.path) return;

          errors[error.path] = error.message;
        });
        errorsResult[key] = errors;

        //pass to the next controller
        // return next();
        // return res.status(StatusCodes.BAD_REQUEST).json({
        //   errors,
        // });
      }
    });

    if (Object.entries(errorsResult).length === 0) return next();
    else
      return res.status(StatusCodes.BAD_REQUEST).json({
        errors: errorsResult,
      });
  };
