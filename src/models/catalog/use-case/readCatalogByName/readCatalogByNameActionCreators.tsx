import {
  READING_CATALOG,
  READING_CATALOG_SUCCESS,
  READING_CATALOG_FAILURE,
} from "./readCatalogByNameActionNames";
import { ICatalogAction } from "../ICatalogAction";
import { IreadCatalogByNameResDTO } from "./readCatalogByNameDTO";

export function readingCatalogByTicker(): ICatalogAction {
  return {
    type: READING_CATALOG,
  };
}
export function readingCatalogByTickerSuccess(
  data: IreadCatalogByNameResDTO
): ICatalogAction {
  console.log(data);
  return {
    type: READING_CATALOG_SUCCESS,
    data,
  };
}
export function readingCatalogByTickerFailure(
  error: Error | string
): ICatalogAction {
  return {
    type: READING_CATALOG_FAILURE,
    error,
  };
}
