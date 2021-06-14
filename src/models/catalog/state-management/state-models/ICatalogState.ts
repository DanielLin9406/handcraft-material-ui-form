import { ICatalogDTO } from "../../data-fetching/dtos/ICatalogDTO";

export interface ICatalogState {
  catalogs: ICatalogDTO[];

  isReadingCatalog: boolean;
  isReadingCatalogSuccess: boolean;
  isReadingCatalogFailure: boolean;

  error: string;
}
