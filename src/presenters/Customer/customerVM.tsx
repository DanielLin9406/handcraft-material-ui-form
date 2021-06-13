import React, { useReducer, createContext, ReactElement } from "react";
import { LoadingOrChildren } from "../shared/loadingOrChildren";
import {
  useIdentityAPIFacade,
  useIdentityStateFacade,
} from "./customerAPIFacase";

export function WithIdentityState({ ...props }): Function {
  return (UILogicContainer): Function => {
    return (): ReactElement => {
      const { identityGlobalState } = useIdentityStateFacade();

      const { isReadingMe, error } = identityGlobalState;
      return LoadingOrChildren({
        isLoading: isReadingMe,
        errMsg: error,
        children: () => (
          <UILogicContainer {...props} {...identityGlobalState} />
        ),
      });
    };
  };
}

export function WithIdentityAPIHandler({ ...props }): Function {
  return (UILogicContainer): Function => {
    return (): ReactElement => {
      const { setSignin, setReadMe, setSignup } = useIdentityAPIFacade();

      function handleSignin(reqDTO: ISigninReqDTO) {
        setSignin(reqDTO);
      }
      function asyncReadMe() {
        setReadMe();
      }

      return (
        <UILogicContainer
          {...props}
          handleSignin={handleSignin}
          asyncReadMe={asyncReadMe}
        ></UILogicContainer>
      );
    };
  };
}
