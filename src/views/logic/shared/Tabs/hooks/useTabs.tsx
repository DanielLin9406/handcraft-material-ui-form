import { useState, useEffect } from "react";

export const useTabs = ({ tabList, location }) => {
  const [tabPageState, setTabPage] = useState(tabList[0]);
  const urlParams = new URLSearchParams(location.search);
  useEffect(() => {
    urlParams.set("tab", tabPageState);
    window.history.pushState({}, "", `${location.pathname}?${urlParams}`);
  }, [tabPageState]);
  return {
    setTabPage,
    tabPageState,
  };
};
