import { ICatalogDTO } from "../../data-fetching/dtos/ICatalogDTO";

export interface IReadCatalogByNameReqDTO {
  catalogName: string;
}

export interface IReadCatalogByNameResDTO {
  catalog: ICatalogDTO[];
}
