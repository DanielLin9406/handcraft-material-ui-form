import { ICatalogDTO } from "../../data-fetching/dtos/ICatalogDTO";

export interface IreadCatalogByNameReqDTO {
  stockVID: string;
}

export interface IreadCatalogByNameResDTO {
  catalog: ICatalogDTO[];
}
