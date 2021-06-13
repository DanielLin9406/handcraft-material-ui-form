import React from "react";
import { Link } from "react-router-dom";
import { signInRouteConfig } from "../../../pages/routes/paths";
import { WithIdentityState } from "../../../presenters/Customer/customerVM";

export const User = ({ isAuthenticated, customer }) => {
  if (isAuthenticated == false) {
    return <Link to={signInRouteConfig.login.url}>Login</Link>;
  }
  return (
    <>
      <>Welcome, {customer.customerName}</>
    </>
  );
};

export default ({ ...props }) => WithIdentityState({ ...props })(User)();
