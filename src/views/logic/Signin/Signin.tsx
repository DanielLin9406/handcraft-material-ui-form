import React, { FormEvent, ReactElement } from "react";
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

  const handleSubmit = (evt: FormEvent<HTMLInputElement>) => {
    evt.preventDefault();
    if (isEmailValid && isPWDValid && email && PWD) {
      console.log("submit");
      handleSignin({
        userEmail: email,
        userPWD: PWD,
      });
    }
    resetEmail();
    resetPWD();
  };

  return (
    <FormCon className={"FormCon"}>
      <Form onSubmit={handleSubmit}>
        <TextField htmlFor="email" className="field">
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
        <TextField htmlFor="password" className="field">
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
        </TextField>
        <TextField htmlFor="emailErr">
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

export default (props: any) => WithIdentityAPIHandler(props)(Signin)();
