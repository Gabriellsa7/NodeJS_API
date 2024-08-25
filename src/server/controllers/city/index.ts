import * as create from "./Create";
import * as deleteById from "./DeleteById";
import * as getAll from "./GetAll";
import * as getById from "./GetById";
import * as updateById from "./Update";
//simplify the use of controls in the routes file
export const CityController = {
  ...create,
  ...getAll,
  ...getById,
  ...updateById,
  ...deleteById,
};

CityController.create;
