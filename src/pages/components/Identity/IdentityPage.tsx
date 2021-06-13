import React from "react";
import { TwoColumnsLayout } from "../../../views/dump/set-up/MultiColumns";
import { SigninSecion } from "./IdentitySectionBlocks";
const IdentityPage = ({ location }) => {
  return (
    <TwoColumnsLayout direction={"column"}>
      <SigninSecion />
    </TwoColumnsLayout>
  );
};

export default IdentityPage;
