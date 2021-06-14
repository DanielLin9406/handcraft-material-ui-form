import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../models/shared/infra/reducerRoot";
import { readCatalogByName } from "../../models/catalog/use-case/readCatalogByName/readCatalogByNameUseCase";
import { IReadCatalogByNameReqDTO } from "../../models/catalog/use-case/readCatalogByName/readCatalogByNameDTO";

export function useCatalogStateFacade() {
  const catalogGlobalState = useSelector(
    (state: IRootState) => state.catalogState
  );
  return { catalogGlobalState };
}

export function useCatalogAPIFacade() {
  const dispatch = useDispatch();
  const setReadCatalogByName = (reqDTO: IReadCatalogByNameReqDTO) =>
    dispatch(readCatalogByName(reqDTO));

  return { setReadCatalogByName };
}
