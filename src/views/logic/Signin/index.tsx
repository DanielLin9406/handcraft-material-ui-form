import React, { useEffect, ReactElement } from "react";
import { useSignin } from "./hooks/useSignin";
import {
  Form,
  FormCon,
  FieldInput,
  TextField,
  FieldName,
  ErrorMessage,
} from "../../dump/Form";
import { WithIdentityAPIHandler } from "../../../presenters/Customer/customerVM";

const AfterSigninUI = () => {
  return (
    <>
      <h2>Check your inbox</h2>
      <p>We just emailed a link to</p>
    </>
  );
};

export const Signin = ({ handleSignin }): ReactElement => {
  const {
    email,
    PWD,
    isEmailValid,
    isPWDValid,
    handleEmailChange,
    handlePWDChange,
    resetEmail,
    resetPWD,
  } = useSignin("", "");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (isEmailValid && isPWDValid) {
      console.log("submit");
      // handleSignin
    }
    // alert(`Submitting Name ${value}`);
    resetEmail();
    resetPWD();
  };

  return (
    <FormCon className={"FormCon"}>
      <Form onSubmit={handleSubmit}>
        <TextField htmlFor="email">
          <FieldInput
            id="email"
            type="email"
            value={email}
            onChange={handleEmailChange}
            autocomplete="off"
          />
          <FieldName label-value="email" data-filled={!!email}>
            email
          </FieldName>
        </TextField>
        <TextField htmlFor="emailErr">
          {isEmailValid || (
            <ErrorMessage>Not a valid email format</ErrorMessage>
          )}
        </TextField>
        <TextField htmlFor="password">
          <FieldInput
            id="password"
            type="password"
            value={PWD}
            onChange={handlePWDChange}
            autocomplete="off"
          />
          <FieldName label-value="password" data-filled={!!PWD}>
            password
          </FieldName>
          {isPWDValid || (
            <ErrorMessage>Password must be between 8-16 character</ErrorMessage>
          )}
        </TextField>
        <TextField htmlFor="submit">
          <FieldInput id="submit" type="submit" value="Sign in" />
        </TextField>
      </Form>
    </FormCon>
  );
};

export default (props) => WithIdentityAPIHandler(props)(Signin)();
