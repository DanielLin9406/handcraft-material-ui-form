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
  const { value, onChange, reset } = useSignin("");
  const handleSubmit = (evt) => {
    evt.preventDefault();
    // alert(`Submitting Name ${value}`);
    reset();
  };

  return (
    <FormCon className={"FormCon"}>
      <Form onSubmit={handleSubmit}>
        <TextField htmlFor="email">
          <FieldInput
            id="email"
            type="email"
            value={value}
            onChange={onChange}
            autocomplete="off"
          />
          <FieldName label-value="email">email</FieldName>
          <ErrorMessage></ErrorMessage>
        </TextField>
        <TextField htmlFor="password">
          <FieldInput
            id="password"
            type="password"
            value={value}
            onChange={onChange}
            autocomplete="off"
          />
          <FieldName label-value="password">password</FieldName>
        </TextField>
        <TextField htmlFor="submit">
          <FieldInput id="submit" type="submit" value="Submit" />
        </TextField>
      </Form>
    </FormCon>
  );
};

export default (props) => WithIdentityAPIHandler(props)(Signin)();
