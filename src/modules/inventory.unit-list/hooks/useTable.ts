import { TableColumn } from "../../../common/types";

const useTable = () => {
  const columns: TableColumn[] = [
    { title: "Unit", dataIndex: "unit", key: "unit" },
    {
      title: "Short name",
      dataIndex: "slug",
      key: "slug",
    },
    {
      title: "No of Products",
      dataIndex: "productCount",
      key: "productCount",
    },
    {
      title: "Created At",
      dataIndex: "createdAt",
      key: "createdAt",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
  ];

  return {
    columns,
  };
};

export default useTable;
