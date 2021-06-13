// import React, { useState, useEffect } from "react";
import styled from "styled-components";

export const Tab = styled.button<any>`
  font-size: 20px;
  padding: 10px 60px;
  flex: 1 1 100%;
  cursor: pointer;
  background-color: transparent;
  color: inherit;
  opacity: 0.6;
  background: #1b1b1b;
  border: 0;
  outline: 0;
  ${({ active }) =>
    active &&
    `
  border-bottom: 2px solid #fff;
  opacity: 1;
`}
`;
