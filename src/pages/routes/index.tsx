import React from "react";
import { useParams } from "react-router";
import { RouteConfig, RouteConfigComponentProps } from "react-router-config";
import AppRoute from "./AppRoute";
import AuthedRoute from "../../pages/routes/RequireAuthedRoute";
import RedirectIfAuthedRoute from "../../pages/routes/RedirectAuthedRoute";
import LoginRoute from "../routes/LoginRoute";
import CatalogRoute from "./CatalogRoute";
import { useCatalog } from "../../presenters/Catalog/catalogVM";
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
      const { ticker } = useParams<any>();
      useCatalog({ ticker });
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
      <CatalogRoute {...props} />
      // <AuthedRoute>
      // </AuthedRoute>
    ),
    routes: dashboardRouteList,
    path: dashboardRouteConfig.product.url,
  },
  {
    component: ({ ...props }: RouteConfigComponentProps) => (
      <LoginRoute {...props} />
      // <RedirectIfAuthedRoute>
      // </RedirectIfAuthedRoute>
    ),
    routes: loginRouteList,
    path: signInRouteConfig.login.url,
  },
  { ...NotFoundPage, path: mainPagePaths.notfound },
  { ...RedirectToNotFoundPage },
];

export const AppRouteRootList: RouteConfig[] = [
  {
    component: ({ ...props }: RouteConfigComponentProps) => {
      // useAuth();
      return <AppRoute {...props} />;
    },
    routes: appRouteList as RouteConfig[],
  },
];
