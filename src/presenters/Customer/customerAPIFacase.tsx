import { useDispatch, useSelector } from "react-redux";
import { ISigninReqDTO } from "../../models/customer/use-case/signin/signinDTO";
import { IRootState } from "../../models/shared/infra/reducerRoot";
import { signin } from "../../models/customer/use-case/signin/signinUseCase";

export function useIdentityStateFacade() {
  const identityGlobalState = useSelector(
    (state: IRootState) => state.customerState
  );
  return { identityGlobalState };
}

export function useIdentityAPIFacade() {
  const dispatch = useDispatch();
  const setSignup = (reqDTO: ISignupReqDTO) => dispatch(signup(reqDTO));
  const setSignin = (reqDTO: ISigninReqDTO) => dispatch(signin(reqDTO));
  const setReadMe = () => dispatch(readMe({}));

  return { setSignin, setReadMe, setSignup };
}
