import React from "react";
import { ThreeColumnsLayout } from "../../../views/dump/set-up/MultiColumns";
import { ProductListSection } from "../../../views/logic/ProductList/ProductList";
export const tabList = ["Phone", "TV", "Others"];

const PhoneTab = () => {
  return (
    <ThreeColumnsLayout>
      <ProductListSection />
    </ThreeColumnsLayout>
  );
};
const TVTab = () => {
  return <>TV Product List</>;
};
const OthersTab = () => {
  return <>Other Product List</>;
};

export const tabsBody = {
  Phone: PhoneTab(),
  TV: TVTab(),
  Others: OthersTab(),
};
