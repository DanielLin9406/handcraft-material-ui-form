import { IReadingCatalogActionType } from "./readCatalogByName/readCatalogByNameActionNames";

export type ICatalogAction = {
  [key: string]: IReadingCatalogActionType | any;
};
