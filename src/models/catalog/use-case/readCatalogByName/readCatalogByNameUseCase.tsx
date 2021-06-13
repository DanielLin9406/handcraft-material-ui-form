import { IHandlerProps, APIHandler } from "../../../shared/use-case/Handler";
import {
  APIReadyState,
  APIFetchState,
  APISucessState,
  APIFailedState,
} from "../../../shared/use-case/APIStates";
import * as actionCreators from "./readCatalogByNameActionCreators";
import { Dispatch } from "redux";
import { AxiosStatic } from "axios";
import { CatalogService } from "../../data-fetching/CatalogService";
import { readCatalogByNameLogic } from "./readCatalogByNameLogic";
import { IreadCatalogByNameReqDTO } from "./readCatalogByNameDTO";

function sucessState(handler) {
  return () =>
    new APISucessState({
      handler,
      actionCreatorFunc: actionCreators.readingCatalogByTickerSuccess,
    });
}

function failedState(handler) {
  return () =>
    new APIFailedState({
      handler,
      actionCreatorFunc: actionCreators.readingCatalogByTickerFailure,
    });
}

export const apiCall = async (api, reqDTO) => {
  const payload = {
    headers: {},
    params: { ...reqDTO },
    data: {},
  };
  const service = new CatalogService({
    api,
  });
  return await service.readCatalogByName(payload);
};

function fetchState(
  handler,
  api: AxiosStatic,
  reqDTO: IreadCatalogByNameReqDTO
) {
  return () =>
    new APIFetchState({
      handler,
      apiService: {
        fetchAPI: () => apiCall(api, reqDTO),
      },
      nextSuccessState: sucessState(handler),
      nextFailedState: failedState(handler),
    });
}

export const readCatalogByName = (reqDTO: IreadCatalogByNameReqDTO) => {
  return async (
    dispatch?: Dispatch,
    getState: any,
    { stockAPI }: { stockAPI?: AxiosStatic }
  ) => {
    const handlerProps: IHandlerProps = {
      dispatch,
      getState,
    };
    const handler = new APIHandler(handlerProps);
    handler.transitionTo(
      new APIReadyState({
        handler,
        logicFunc: readCatalogByNameLogic,
        actionCreatorFunc: actionCreators.readingCatalogByTicker,
        nextStateNewFunc: fetchState(handler, stockAPI, reqDTO),
      })
    );

    await handler.runNextCommand();
  };
};
