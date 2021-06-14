import React, { ReactElement, useEffect } from "react";
import { LoadingOrChildren } from "../shared/loadingOrChildren";
import {
  useIdentityAPIFacade,
  useIdentityStateFacade,
} from "./customerAPIFacase";
import { ISigninReqDTO } from "../../models/customer/use-case/signin/signinDTO";

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
      const { setSignin } = useIdentityAPIFacade();

      function handleSignin(reqDTO: ISigninReqDTO) {
        setSignin(reqDTO);
      }

      return (
        <UILogicContainer
          {...props}
          handleSignin={handleSignin}
        ></UILogicContainer>
      );
    };
  };
}

export const useAuth = () => {
  const { setReadMe } = useIdentityAPIFacade();
  useEffect(() => {
    setReadMe();
  }, []);
};
