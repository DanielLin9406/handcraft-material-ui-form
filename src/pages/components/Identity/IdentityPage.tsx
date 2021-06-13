import React from "react";
import { OneColumnLayout } from "../../../views/dump/set-up/OneColumn";
import { SigninSecion } from "./IdentitySectionBlocks";
const IdentityPage = ({ location }) => {
  return (
    <OneColumnLayout direction={"column"}>
      <SigninSecion />
    </OneColumnLayout>
  );
};

export default IdentityPage;
