import React from "react";
import styled from "styled-components";
// import { CheckLabel } from "../../../views/dump/CheckLabel";
const CheckItemContainer = styled.li.attrs((props) => ({
  className: props.className,
}))<any>`
  display: flex;
  width: 100%;
  flex: 1 1 30%;
  flex-direction: column;
  > h4 {
    text-align: left;
  }
  > p {
    margin-top: 10px;
    &:last-child {
      font-size: 30px;
      font-weight: bold;
      text-align: right;
      color: #ccc;
    }
  }
  > div {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    > p {
      margin-left: 5px;
    }
  }
  @media (max-width: 880px) {
    flex: 0 0 48%;
  }
  @media (max-width: 750px) {
    flex: 0 0 98%;
  }
  margin: 3px;
  padding: 15px 30px;
  border-radius: 4px;
  background-color: #3e3e3e;
`;

const ProductListContainer = styled.ul`
  display: flex;
  padding: 0;
  justify-content: space-around;
  align-items: flex-start;
  flex-direction: row;
  list-style: none;
  flex-wrap: wrap;
  padding: 10px 0;
  width: 98%;
  margin-left: auto;
  margin-right: auto;
`;

export const CheckItem = ({
  children,
  basis,
}: {
  children: any;
  basis?: any;
}) => (
  <CheckItemContainer basis={basis ? basis : "30%"} className={"CardItem"}>
    <div />
    {children}
  </CheckItemContainer>
);

export const ProductList = ({ children }) => (
  <ProductListContainer className={"ProductList"}>
    {children}
  </ProductListContainer>
);
