import React from "react";
import { hydrate, render } from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Switch } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import { isServer, encapsulatedStore } from "./models/shared/infra/reduxStore";
import { AppRouteRootList } from "./pages/routes";
import { loadableReady } from "@loadable/component";

const root = document.querySelector("#root");

const Application = (
  <Provider store={encapsulatedStore()}>
    <BrowserRouter>
      <Switch>
        <>{renderRoutes(AppRouteRootList)}</>
      </Switch>
    </BrowserRouter>
  </Provider>
);

if (isServer) {
  loadableReady(() => {
    hydrate(Application, root);
  });
} else {
  render(Application, root);
}
