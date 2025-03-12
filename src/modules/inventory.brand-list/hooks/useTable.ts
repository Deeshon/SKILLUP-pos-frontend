import { TableColumn } from "../../../common/types";

const useTable = () => {
  const columns: TableColumn[] = [
    { title: "Brand", dataIndex: "brand", key: "brand" },
    {
      title: "Brand slug",
      dataIndex: "slug",
      key: "slug",
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
