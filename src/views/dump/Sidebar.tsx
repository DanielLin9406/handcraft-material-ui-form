import styled from "styled-components";

export const SibarList = styled.ul.attrs((props) => ({}))`
  margin-bottom: 0px;
`;

export const SibarItem = styled.li.attrs((props) => ({}))`
  list-style-type: none;
  padding-bottom: 10px;
  padding-left: 5px;
  color: #fff;
  :first-child {
    padding-top: 10px;
  }
`;
