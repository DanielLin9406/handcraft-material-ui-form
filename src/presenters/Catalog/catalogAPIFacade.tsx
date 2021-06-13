import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { IRootState } from "../../models/shared/infra/reducerRoot";
import { readCatalogByName } from "../../models/catalog/use-case/readCatalogByName/readCatalogByNameUseCase";
import { IreadCatalogByNameReqDTO } from "../../models/catalog/use-case/readCatalogByName/readCatalogByNameDTO";

export function useCatalogStateFacade() {
  const catalogGlobalState = useSelector(
    (state: IRootState) => state.catalogState
  );
  return { catalogGlobalState };
}

export function useCatalogAPIFacade() {
  const dispatch = useDispatch();
  const setreadCatalogByName = (reqDTO: IreadCatalogByNameReqDTO) =>
    dispatch(readCatalogByName(reqDTO));

  return { setreadCatalogByName };
}

// export function useCatalogAPIFacadeSSR(
//   reqDTO: IreadCatalogByNameReqDTO,
//   dispatch
// ) {
//   dispatch(readCatalogByName(reqDTO));
// }
