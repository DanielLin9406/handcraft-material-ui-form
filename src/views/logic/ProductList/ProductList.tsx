import React, { ReactElement } from "react";
import { ProductList, CheckItem } from "../../dump/set-up/ProductList";
import { WithCatalogState } from "../../../presenters/Catalog/catalogVM";

export const ProductListSection = WithCatalogState({})(
  ({ catalogState }): ReactElement => {
    console.log("catalogState", catalogState);
    const { catalogs } = catalogState;
    return (
      <ProductList>
        {catalogs &&
          catalogs.map((product) => {
            return (
              <>
                <CheckItem>
                  <h4>{product.name}</h4>
                  <div>
                    color: <p>{product.color}</p>
                  </div>
                  <p>NT${product.price}</p>
                </CheckItem>
              </>
            );
          })}
      </ProductList>
    );
  }
);
