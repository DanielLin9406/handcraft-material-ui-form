import React, { memo } from "react";
import { Redirect } from "react-router-dom";
import { WithIdentityState } from "../../presenters/Customer/customerVM";
import { RouteConfig } from "react-router-config";
import { signInRouteConfig } from "./paths";

const RequiredAuthedRoute = memo<RouteConfig>(
  ({
    isAuthenticated,
    isReadingMeFailure,
    asyncReadMe,
    children,
    ...props
  }) => {
    if (isAuthenticated == false && isReadingMeFailure == true) {
      return <Redirect to={signInRouteConfig.login.url} />;
    }
    return (
      <>{typeof children == "function" ? children({ ...props }) : children}</>
    );
  }
);

export default ({ ...props }) =>
  WithIdentityState({ ...props })(RequiredAuthedRoute)();
