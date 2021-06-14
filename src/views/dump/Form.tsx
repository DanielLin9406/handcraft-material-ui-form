import React from "react";
import styled from "styled-components";

export const TextField = styled.label.attrs((props) => ({
  className: props.className,
}))<any>`
  display: inline-block;
  position: relative;
  margin: 10px;

  .field&::after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    z-index: 1;
    left: 0;
    right: 0;
    border-radius: 5px;
    border: 1px solid rgba(255, 255, 255, 0.3);
  }
  &:hover {
    &::after {
      border: 1px solid rgba(255, 255, 255, 0.8);
    }
  }
  &:focus-within {
    &::after {
      border: 2px solid #3f51b5;
    }
  }
  > input:focus {
    ~ span {
      top: -95%;
      background-color: #272822;
    }
  }
  > span[data-filled="true"] {
    top: -95%;
    background-color: #272822;
  }
  > input[type="submit"] {
    background-color: #fff;
    color: #000;
    cursor: pointer;
  }
`;

export const FieldName = styled.span.attrs((props) => ({
  className: props.className,
}))<any>`
  position: absolute;
  height: 24px;
  left: 10px;
  top: 0;
  bottom: 0;
  margin: auto;
  display: block;
  color: #000;
  padding: 0 8px;
  transition: 0.2s;
  color: #fff;
  z-index: 2;
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
  border: none;
  padding: 15px 16px;
  font-size: 1rem;
  color: #fff;
  border-radius: 5px;
  position: relative;
  background-color: #272822;
`;

const FormContainer = styled.form.attrs((props) => ({
  className: props.className,
}))<any>`
  display: flex;
  flex-direction: column;
`;

export const Form = ({
  children,
  ...props
}: {
  children?: JSX.Element | JSX.Element[];
}) => (
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
