import { AxiosStatic, AxiosResponse } from "axios";
import { errorInstance, successInstance } from "../../shared/infra/EitherError";
import { APIResult } from "../../shared/infra/APIResult";
import { APIService } from "../../shared/infra/APIService";
import { APIResponse } from "../../shared/infra/IAPIResults";
import { IReadMeResDTO } from "../use-case/readMe/readMeDTO";
import { IAxiosResDTO } from "../../shared/services/dtos/IAxiosDTO";

export interface ICustomerService {
  readMe({ params, headers }): Promise<APIResponse<IReadMeResDTO>>;
}

export class CustomerService extends APIService implements ICustomerService {
  constructor({ api }: { api: AxiosStatic }) {
    super({
      api,
    });
  }
  public async readMe({
    params,
    headers,
  }): Promise<APIResponse<IReadMeResDTO>> {
    try {
      const axiosRes: AxiosResponse<IReadMeResDTO> = await this.get({
        url: "/customer",
        params,
        headers: {
          ...headers,
          Authorization: "Bearer ",
        },
      });
      const dto: IReadMeResDTO = axiosRes.data;
      return successInstance(APIResult.ok<IReadMeResDTO>(dto));
    } catch (err) {
      return errorInstance(APIResult.fail<IAxiosResDTO>(err.response));
    }
  }
}
