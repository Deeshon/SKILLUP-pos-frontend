import React, { ReactNode } from "react";
import { TableColumn } from "../../../common/types";

const useTable = () => {
  const columns: TableColumn[] = [
    {
      title: "Product",
      dataIndex: "productDetails",
      key: "productDetails",
      render: (productDetails: {
        imageUrl: string[];
        name: string;
      }): ReactNode =>
        React.createElement(
          "div",
          { style: { display: "flex", alignItems: "center" } },

          React.createElement("img", {
            src: productDetails.imageUrl,
            alt: "product",
            style: { width: "50px", height: "auto", marginRight: "10px" },
          }),
          React.createElement("span", null, productDetails.name)
        ),
      },

    {
      title: "SKU",
      dataIndex: "sku",
      key: "sku",
    },
    {
      title: "Manufactured Data",
      dataIndex: "manufacturedDate",
      key: "manufacturedDate",
    },
    {
      title: "Expired Date",
      dataIndex: "expiredDate",
      key: "expiredDate",
    },
  ];

  return {
    columns,
  };
};

export default useTable;
