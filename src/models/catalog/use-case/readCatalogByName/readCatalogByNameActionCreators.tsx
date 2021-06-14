import {
  READING_CATALOG,
  READING_CATALOG_SUCCESS,
  READING_CATALOG_FAILURE,
} from "./readCatalogByNameActionNames";
import { ICatalogAction } from "../ICatalogAction";
import { IReadCatalogByNameResDTO } from "./readCatalogByNameDTO";

export function readingCatalogByTicker(): ICatalogAction {
  return {
    type: READING_CATALOG,
  };
}
export function readingCatalogByTickerSuccess(
  data: IReadCatalogByNameResDTO
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
