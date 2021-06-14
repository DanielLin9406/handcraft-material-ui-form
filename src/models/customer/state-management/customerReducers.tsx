import {
  SIGNING_IN,
  SIGNING_IN_SUCCESS,
  SIGNING_IN_FAILURE,
} from "../use-case/signin/signinActionNames";
import {
  READING_ME,
  READING_ME_SUCCESS,
  READING_ME_FAILURE,
} from "../use-case/readMe/readMeActionNames";
import { ICustomerState } from "./state-models/ICustomerState";
import { ICustomerAction } from "../use-case/ICustomerAction";

const initCustomerState: ICustomerState = {
  customer: {},
  isAuthenticated: false,

  isReadingMe: false,
  isReadingMeSuccess: false,
  isReadingMeFailure: false,

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
    case READING_ME:
      return {
        ...state,
        isReadingMe: false, // set false to prevent re-render when login
      };
    case READING_ME_SUCCESS:
      return {
        ...state,
        customer: action.data.customer,
        isReadingMe: false,
        isReadingMeSuccess: true,
        isAuthenticated: true,
      };
    case READING_ME_FAILURE:
      return {
        ...state,
        isReadingMe: false,
        isReadingMeFailure: true,
        error: action.error,
      };
    case SIGNING_IN:
      return {
        ...state,
        isSigningIn: true,
      };
    case SIGNING_IN_SUCCESS:
      return {
        ...state,
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
