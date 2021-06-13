import React from "react";
import styled from "styled-components";

export const TextField = styled.label.attrs((props) => ({
  className: props.className,
}))<any>`
  display: inline-block;
  position: relative;
  margin: 10px;
  > input:focus {
    ~ span {
      top: unset;
      bottom: 100%;
      transition: 0.5s;
    }
  }
`;

export const FieldName = styled.span.attrs((props) => ({
  className: props.className,
}))<any>`
  color: #000;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  display: block;
  color: #000;
`;

export const ErrorMessage = styled.span.attrs((props) => ({
  className: props.className,
}))<any>`
  color: red;
`;

export const FieldInput = styled.input.attrs((props) => ({
  className: props.className,
}))<any>`
  width: 100%;
  border-radius: 4px;
  padding: 5px;
  color: #000;
  font-size: 1rem;
  position: relative;
  &:after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: block;
    border: 1px solid #fff;
  }
  &:hover {
    &:after {
      border: 3px solid #red;
    }
  }
`;

const FormContainer = styled.form.attrs((props) => ({
  className: props.className,
}))<any>`
  display: flex;
  flex-direction: column;
`;

export const Form = ({ children, ...props }) => (
  <FormContainer className={"Form"} {...props}>
    {children}
  </FormContainer>
);

export const FormCon = styled.div.attrs((props) => ({
  className: props.className,
}))<any>`
  display: flex;
  flex-direction: column;
`;
