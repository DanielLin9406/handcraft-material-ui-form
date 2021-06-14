import { errorInstance, successInstance } from "../../shared/infra/EitherError";
import { APIResult } from "../../shared/infra/APIResult";
import { APIService } from "../../shared/infra/APIService";
import { APIResponse } from "../../shared/infra/IAPIResults";
import { IAxiosResDTO } from "../../shared/services/dtos/IAxiosDTO";
import { AxiosStatic, AxiosResponse } from "axios";
import { IReadCatalogByNameResDTO } from "../use-case/readCatalogByName/readCatalogByNameDTO";

export interface ICatalogService {
  readCatalogByName({
    params,
    headers,
  }): Promise<APIResponse<IReadCatalogByNameResDTO>>;
}

export class CatalogService extends APIService implements ICatalogService {
  constructor({ api }: { api: AxiosStatic }) {
    super({
      api,
    });
  }
  async readCatalogByName({
    params,
    headers,
  }): Promise<APIResponse<IReadCatalogByNameResDTO>> {
    try {
      const axiosRes: AxiosResponse<IReadCatalogByNameResDTO> = await this.get({
        url: "https://img.scupio.com/gym/interview_api/test.json",
        params,
        headers,
      });
      const dto: IReadCatalogByNameResDTO = axiosRes.data;
      return successInstance(APIResult.ok<IReadCatalogByNameResDTO>(dto));
    } catch (err) {
      console.log("error", err);
      return errorInstance(APIResult.fail<IAxiosResDTO>(err.response));
    }
  }
}
