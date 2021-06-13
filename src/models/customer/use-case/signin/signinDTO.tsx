import { ICustomerDTO } from "../../data-fetching/dtos/ICustomerDTO";

export interface ISigninReqDTO {
  userEmail: string;
  userPWD: string;
}

export interface ISigninResDTO {
  customer: ICustomerDTO;
}
