import React, { ReactNode } from "react";

const useProductTable = () => {
  const columns = [
    {
      title: "Product",
      dataIndex: "productDetails",
      key: "productDetails",
      render: (productDetails: { imageUrl: string[]; name: string }): ReactNode =>
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
      title: "Category",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Brand",
      dataIndex: "brand",
      key: "brand",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Unit",
      dataIndex: "unit",
      key: "unit",
    },
    {
      title: "Qty",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "Created by",
      dataIndex: "createdBy",
      key: "createdBy",
    },
  ];

  return {
    columns
  }
};

export default useProductTable;
