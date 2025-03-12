import React, { ReactNode } from "react";
import { TableColumn } from "../../../common/types";

const useTable = () => {
  const columns: TableColumn[] = [
    {title: 'Warehouse', dataIndex: 'warehouse', key: 'warehouse'},
    {title: 'Store', dataIndex: 'store', key: 'store'},
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
      {title: 'Category', dataIndex: 'category', key: 'category'},

    {
      title: "SKU",
      dataIndex: "sku",
      key: "sku",
    },
    {
      title: "Qty",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "Qty Alert",
      dataIndex: "quantityAlert",
      key: "quantityAlert",
    },
  ];

  return {
    columns,
  };
};

export default useTable;
