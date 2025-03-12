import { MdEmail } from "react-icons/md";
import ListTable from "../../common/components/ListTable";
import ListTableHeader from "../../common/components/ListTableHeader";
import { TypeListTableHeaderAction } from "../../common/types";
import useTable from "./hooks/useTable";

const headerActions: TypeListTableHeaderAction[] = [
    {
        title: 'Send Email',
        icon: <MdEmail size={20} />
    }
]

const LowStockListPage = () => {
    const {columns} = useTable();
  return (
    <div className="py-2 md:p-2">
      <ListTableHeader
        title="Low Stocks"
        subtitle="Manage your low stocks"
        actions={headerActions}
      />
      <ListTable
        filterProps={[
          {
            title: "Created By",
            key: "createdBy",
            options: ["User 1", "User 2", "User 3", "User 4"],
            type: "select",
          },
        ]}
        searchProps={[
          {
            title: "SKU",
            key: "sku",
          },
          {
            title: "Product name",
            key: "productName",
          },
        ]}
        mobileWidth="305px"
        columns={columns}
      />
    </div>
  );
};

export default LowStockListPage;
