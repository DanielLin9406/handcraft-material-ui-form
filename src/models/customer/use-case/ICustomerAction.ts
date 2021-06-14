import { IReadMeAction } from "./readMe/readMeActionCreators";
import { ISigninMeAction } from "./signin/signinActionCreators";

export type ICustomerAction = ISigninMeAction | IReadMeAction;
