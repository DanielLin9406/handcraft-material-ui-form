import React, { memo } from "react";
import { Redirect } from "react-router-dom";
import { RouteConfig } from "react-router-config";
import { WithIdentityState } from "../../presenters/Customer/customerVM";

const RedictAuthedRoute = memo<RouteConfig>(
  ({
    isAuthenticated,
    isReadingMeSuccess,
    isSigningInSuccess,
    children,
    ...props
  }) => {
    if (
      isAuthenticated == true &&
      (isReadingMeSuccess == true || isSigningInSuccess == true)
    ) {
      return <Redirect to={"/catalog"} />;
    }
    return (
      <>
        {typeof children == "function"
          ? children(props)
          : React.Children.map(children, (child) => {
              // checking isValidElement is the safe way and avoids a typescript error too
              if (React.isValidElement(child)) {
                return React.cloneElement(child, { props }, null);
              }
              return child;
            })}
      </>
    );
  }
);

export default ({ ...props }) =>
  WithIdentityState({ ...props })(RedictAuthedRoute)();
