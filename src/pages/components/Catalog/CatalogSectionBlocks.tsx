import React, { memo } from "react";
import { Panel } from "../../../views/dump/Panel";
import {
  Section,
  SectionHeader,
  SectionBody,
} from "../../../views/dump/StockSection";

export const ProductListSection = memo(({ children }) => {
  return (
    <Section>
      <SectionHeader>Product List</SectionHeader>
      <SectionBody>
        <Panel jC={"center"} marginBottom={"0rem"} direction={"column"}>
          <>{children}</>
        </Panel>
      </SectionBody>
    </Section>
  );
});
