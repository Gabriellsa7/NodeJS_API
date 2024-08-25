"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validation = void 0;
const http_status_codes_1 = require("http-status-codes");
//middleware validation with yup
const validation = (getAllSchemas) => (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    //pass a arrow function to pass all values to schemas
    const schemas = getAllSchemas((schema) => schema);
    const errorsResult = {};
    Object.entries(schemas).forEach((_a) => __awaiter(void 0, [_a], void 0, function* ([key, schema]) {
        try {
            yield schema.validateSync(req[key], {
                abortEarly: false,
            });
        }
        catch (error) {
            const yupError = error;
            const errors = {};
            yupError.inner.forEach((error) => {
                error.message;
                if (!error.path)
                    return;
                errors[error.path] = error.message;
            });
            errorsResult[key] = errors;
            //pass to the next controller
            // return next();
            // return res.status(StatusCodes.BAD_REQUEST).json({
            //   errors,
            // });
        }
    }));
    if (Object.entries(errorsResult).length === 0)
        return next();
    else
        return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json({
            errors: errorsResult,
        });
});
exports.validation = validation;
