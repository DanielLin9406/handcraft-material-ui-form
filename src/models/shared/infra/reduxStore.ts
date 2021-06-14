import { createStore, applyMiddleware, compose, Store } from "redux";
import thunkMiddleware from "redux-thunk";
import { composedReducers } from "./reducerRoot";
import axios from "axios";

// For universal ("isomorphic") apps, prefix it with typeof window !== 'undefined' &&
const isServer = !(
  typeof window !== "undefined" &&
  window.document &&
  window.document.createElement
);

const encapsulatedStore = () => {
  let catalogEnv = appEnv;
  if (typeof window.appEnv !== "undefined") {
    catalogEnv = window.appEnv;
  } else {
    catalogEnv = appEnv;
  }

  const catalogAPI = axios.create({
    baseURL: `${catalogEnv.catalog.host}:${catalogEnv.catalog.port}/${catalogEnv.catalog.version}/`,
  });

  const initialState = isServer
    ? (window as any).INITIAL_STATE
    : (window as any).__PRELOADED_STATE__;

  const isElectronEnhancer = function () {
    const userAgent = navigator.userAgent.toLowerCase();
    if (userAgent.indexOf(" electron/") > -1) {
      return [];
    }
    if (
      userAgent.indexOf(" chrome") > -1 &&
      (window as any).__REDUX_DEVTOOLS_EXTENSION__
    ) {
      return [(window as any).__REDUX_DEVTOOLS_EXTENSION__()];
    }
    return [];
  };

  const enhancers: any = isServer ? [] : isElectronEnhancer();

  const middlewareList: any = [
    thunkMiddleware.withExtraArgument({ catalogAPI }),
  ];

  const composedEnhancers = compose(
    applyMiddleware(...middlewareList),
    ...enhancers
  );

  const store: Store = createStore(
    composedReducers,
    initialState,
    composedEnhancers
  );
  return store;
};

export { isServer, encapsulatedStore };
