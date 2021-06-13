import React, { memo } from "react";
import { useTabs } from "./hooks/useTabs";
import { Tab } from "../../../dump/Tab";

export const TabPageContainer = ({ children, tabList, location }) => {
  const { tabPageState, setTabPage } = useTabs({ tabList, location });
  return children({ tabPageState, setTabPage, tabList });
};

export const TabPageHeader = ({ tabPageState, setTabPage, tabList }) => {
  return (
    <>
      {tabList.map((type) => (
        <Tab
          key={type}
          active={tabPageState === type}
          onClick={() => setTabPage(type)}
        >
          <>{type}</>
        </Tab>
      ))}
    </>
  );
};

export const TabPageBody = memo<any>(({ tabPageState, tabsBody }) => {
  return tabsBody[tabPageState];
});
