import React from "react";
import { RouteConfig, RouteConfigComponentProps } from "react-router-config";
import AppRoute from "./AppRoute";
import AuthedRoute from "../../pages/routes/RequireAuthedRoute";
import RedirectIfAuthedRoute from "../../pages/routes/RedirectAuthedRoute";
import LoginRoute from "../routes/LoginRoute";
import CatalogRoute from "./CatalogRoute";
import { useCatalog } from "../../presenters/Catalog/catalogVM";
import { useAuth } from "../../presenters/Customer/customerVM";
import LoginPage from "../components/Identity/IdentityPageLoadable";
import CatalogPage from "../components/Catalog/CatalogPageLoadable";
import NotFoundPage from "../components/system/404";
import RedirectToNotFoundPage from "../components/system/RedirectTo404";
import {
  dashboardRouteConfig,
  signInRouteConfig,
  mainPagePaths,
} from "./paths";

export const dashboardRouteList: RouteConfig[] = [
  {
    component: ({ ...props }: RouteConfigComponentProps) => {
      // const { ticker } = useParams<any>();
      useAuth();
      useCatalog();
      return <CatalogPage {...props} />;
    },
    path: dashboardRouteConfig.product.url,
    pars: dashboardRouteConfig.product,
  },
];

export const loginRouteList = [
  {
    ...LoginPage,
    path: signInRouteConfig.login.url,
    pars: signInRouteConfig.login,
  },
];

export const appRouteList = [
  {
    component: ({ ...props }: RouteConfigComponentProps) => (
      <RedirectIfAuthedRoute>
        <LoginRoute {...props} />
      </RedirectIfAuthedRoute>
    ),
    exact: true,
    routes: loginRouteList,
    path: signInRouteConfig.login.url,
  },
  {
    component: ({ ...props }: RouteConfigComponentProps) => (
      <AuthedRoute>
        <CatalogRoute {...props} />
      </AuthedRoute>
    ),
    exact: true,
    routes: dashboardRouteList,
    path: dashboardRouteConfig.product.url,
  },
  { ...NotFoundPage, path: mainPagePaths.notfound },
  { ...RedirectToNotFoundPage },
];

export const AppRouteRootList: RouteConfig[] = [
  {
    component: ({ ...props }: RouteConfigComponentProps) => {
      return <AppRoute {...props} />;
    },
    routes: appRouteList as RouteConfig[],
  },
];
