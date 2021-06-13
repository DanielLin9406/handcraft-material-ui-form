import {
  SIGNING_IN,
  SIGNING_IN_SUCCESS,
  SIGNING_IN_FAILURE,
  INIT_AUTH_SUCCESS,
  INIT_AUTH_FAILED,
} from "../use-case/signin/signinActionNames";
// import {
//   READING_ME,
//   READING_ME_SUCCESS,
//   READING_ME_FAILURE,
// } from "../use-case/readMe/readMeActionNames";
// import {
//   SIGNING_UP,
//   SIGNING_UP_SUCCESS,
//   SIGNING_UP_FAILURE,
// } from "../use-case/signup/signupActionNames";
import { ICustomerState } from "./state-models/ICustomerState";
// import { authService } from "../../shared/services";
import { ICustomerAction } from "../use-case/ICustomerAction";

const initCustomerState: ICustomerState = {
  customer: {},
  isAuthenticated: false,

  isSigningIn: false,
  isSigningInSuccess: false,
  isSigningInFailure: false,

  error: "",
};

export const customerReducer = (
  state: ICustomerState = initCustomerState,
  action: ICustomerAction
): ICustomerState => {
  switch (action.type) {
    case SIGNING_IN:
      return {
        ...state,
        isSigningIn: true,
      };
    case SIGNING_IN_SUCCESS:
      return {
        ...state,
        customer: action.data.customer,
        isSigningIn: false,
        isSigningInSuccess: true,
        isAuthenticated: true,
      };
    case SIGNING_IN_FAILURE:
      return {
        ...state,
        isSigningIn: false,
        isAuthenticated: false,
        isSigningInFailure: true,
        error: action.error,
      };
    default:
      return state;
  }
};
