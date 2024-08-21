import * as create from "./Create";
//simplifica o uso das controlles no arquivo de rotas
export const CityController = {
  ...create,
};

CityController.create;
