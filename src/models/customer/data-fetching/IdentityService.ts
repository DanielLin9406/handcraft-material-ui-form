import { errorInstance, successInstance } from "../../shared/infra/EitherError";
import { APIResult } from "../../shared/infra/APIResult";
import { APIService } from "../../shared/infra/APIService";
import { IAxiosResDTO } from "../../shared/services/dtos/IAxiosDTO";
import { APIResponse } from "../../shared/infra/IAPIResults";
import { AxiosStatic, AxiosResponse } from "axios";
import { ISigninResDTO } from "../use-case/signin/signinDTO";

export interface IIdentityService {
  signin({ params, headers, data }): Promise<APIResponse<ISigninResDTO>>;
}

export class IdentityService extends APIService implements IIdentityService {
  constructor({ api }: { api: AxiosStatic }) {
    super({
      api,
    });
  }
  async signin({ params, headers, data }): Promise<APIResponse<ISigninResDTO>> {
    try {
      // const axiosRes: AxiosResponse<ISigninResDTO> = await this.post({
      //   url: "/login",
      //   params,
      //   headers,
      //   data,
      // });
      // const dto: ISigninResDTO = axiosRes.data;
      return successInstance(
        APIResult.ok<ISigninResDTO>({ customer: { customerName: "User1" } })
      );
    } catch (err) {
      return errorInstance(APIResult.fail<IAxiosResDTO>(err.response));
    }
  }
}
