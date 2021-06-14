import React, { ReactElement, memo, useEffect } from "react";
import { renderRoutes, RouteConfigComponentProps } from "react-router-config";
import { CatalogLayout } from "../layouts/Catalog/CatalogLayout";

const CatalogRoute = ({ route }: RouteConfigComponentProps): ReactElement => {
  // console.log("Render CatalogRoute");
  // console.log("route", route);
  /*
  {
    component: CatalogRoute
    routes:[{
      component:
      path: "/role-permission"
    }]
  }  
  */
  return <CatalogLayout>{renderRoutes(route.routes)}</CatalogLayout>;
};

export default CatalogRoute;
