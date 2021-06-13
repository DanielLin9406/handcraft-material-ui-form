import React, { memo } from "react";
import { WithCatalogLocalCtx } from "../../../presenters/Catalog/catalogVM";
import { RowGroup } from "../../../views/dump/Panel";
import { tabsBody, tabList } from "./CatalogTabs";
import { ProductListSection } from "./CatalogSectionBlocks";
import { RouteConfig } from "react-router-config";

import { OneColumnLayout } from "../../../views/dump/set-up/OneColumn";
import {
  TabPageContainer,
  TabPageHeader,
  TabPageBody,
} from "../../../views/logic/shared/Tabs";
import { TopNavBar } from "../../../views/dump/NavBar";

const CatalogPage = memo<RouteConfig>(({ location }) => {
  console.log("Render CatalogPage");
  return (
    <>
      <TopNavBar>{/* <SearchBar location={location} /> */}</TopNavBar>
      <h2>Product Overview</h2>
      <OneColumnLayout direction={"row"}>
        <ProductListSection>
          <TabPageContainer tabList={tabList} location={location}>
            {({ setTabPage, tabPageState, tabList }) => (
              <>
                <RowGroup jC={"center"} marginBottom={"0rem"}>
                  <TabPageHeader
                    tabPageState={tabPageState}
                    setTabPage={setTabPage}
                    tabList={tabList}
                  />
                </RowGroup>
                <TabPageBody tabPageState={tabPageState} tabsBody={tabsBody} />
              </>
            )}
          </TabPageContainer>
        </ProductListSection>
      </OneColumnLayout>
    </>
  );
});

export default (routeProps) => WithCatalogLocalCtx(routeProps)(CatalogPage)();
