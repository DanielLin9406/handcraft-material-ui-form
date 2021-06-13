import React from "react";
import styled from "styled-components";

const SectionContainer = styled.section.attrs((props) => ({
  className: props.className,
}))`
  flex: 0 0 99%;
  margin-top: 1%;
  margin-bottom: 1%;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  border: 1px solid #f5f5f5;
  background: #12161f;
  border-radius: 4px;
`;

const SubSectionContainer = styled.div.attrs((props) => ({
  className: props.className,
}))`
  display: flex;
  flex-direction: column;
  + div {
    border-top: solid 1px black;
    margin-top: 1rem;
  }
`;

const SectionBodyContainer = styled.div.attrs((props) => ({
  className: props.className,
}))`
  position: relative;
  width: 100%;
  // height: 100%;
  display: flex;
`;

const SectionHeaderContainer = styled.h2.attrs((props) => ({
  className: props.className,
}))`
  font-size: 1.3rem;
  display: block;
  padding: 8px 0;
  margin-top: 0;
  width: 100%;
  background: #fff;
  color: black;
  border-bottom: 2px solid #f4f4f4;
`;

const SectionSubHeaderContainer = styled.div.attrs((props) => ({
  className: props.className,
}))`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-top: 1rem;
  margin-bottom: 1rem;
  height: 50px;
`;

export const Section = ({ children }) => (
  <SectionContainer className={"Section"}>
    {typeof children == "function" ? children() : children}
  </SectionContainer>
);

export const SectionHeader = ({ children }) => {
  return (
    <SectionHeaderContainer className={"SectionHeader"}>
      {typeof children == "function" ? children() : children}
    </SectionHeaderContainer>
  );
};

export const SectionBody = ({ children }) => (
  <SectionBodyContainer className={"SectionBody"}>
    {typeof children == "function" ? children() : children}
  </SectionBodyContainer>
);

export const SubSection = ({ children }) => (
  <SubSectionContainer className={"SubSection"}>
    {typeof children == "function" ? children() : children}
  </SubSectionContainer>
);

export const SectionSubHeader = ({ children }) => (
  <SectionSubHeaderContainer className={"SectionSubHeader"}>
    {typeof children == "function" ? children() : children}
  </SectionSubHeaderContainer>
);
