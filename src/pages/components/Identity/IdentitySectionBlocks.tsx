import React, { memo } from "react";
import {
  FormSection,
  FormSectionHeader,
  FormSectionHeaderText,
  FormSectionBody,
} from "../../../views/dump/FormSection";
import Signin from "../../../views/logic/Signin/Signin";
// import { OpenID } from "../../../views/logic/OpenID/OpenID";
import { Panel } from "../../../views/dump/Panel";

export const SigninSecion = () => {
  return (
    <FormSection direction={"column"} aL={"center"}>
      <FormSectionHeader>
        <FormSectionHeaderText textAlign={"center"}>
          Member Sign In
        </FormSectionHeaderText>
      </FormSectionHeader>
      <FormSectionBody>
        <Panel jC={"center"} marginBottom={"0rem"} direction={"column"}>
          <Signin />
        </Panel>
      </FormSectionBody>
    </FormSection>
  );
};

// export const SignUpSecion = () => {
//   return (
//     <FormSection direction={"column"} aL={"center"}>
//       <FormSectionHeader textAlign={"center"}>Create Account</FormSectionHeader>
//       <FormSectionBody>
//         <Panel jC={"center"} marginBottom={"0rem"} direction={"column"}>
//           {/* <OpenID /> */}
//           <p style={{ textAlign: "center", marginBottom: "25px" }}>or</p>
//           <Signup />
//         </Panel>
//       </FormSectionBody>
//     </FormSection>
//   );
// };
