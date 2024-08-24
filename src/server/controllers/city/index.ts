import * as create from "./Create";
import * as getAll from "./GetAll";
//simplify the use of controls in the routes file
export const CityController = {
  ...create,
  ...getAll,
};

CityController.create;
