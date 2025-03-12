import ListTable from "../../common/components/ListTable";
import ListTableHeader from "../../common/components/ListTableHeader";
import { TypeListTableHeaderAction } from "../../common/types";
import useTable from "./hooks/useTable";
import { IoIosAddCircleOutline } from "react-icons/io";

const headerActions: TypeListTableHeaderAction[] = [
    {
        title: 'Add New Brand',
        icon: <IoIosAddCircleOutline size={20} />
    }
]

const BrandListPage = () => {
    const {columns} = useTable();
  return (
    <div className="py-2 md:p-2">
      <ListTableHeader
        title="Brand"
        subtitle="Manage your brands"
        actions={headerActions}
      />
      <ListTable
        filterProps={[
          {
            title: "Brand",
            key: "brand",
            options: ["Brand 1", "Brand 2", "Brand 3", "Brand 4"],
            type: "select",
          },
          {
            title: "Status",
            key: "status",
            options: ["Active", "Suspended"],
            type: "select",
          },
        ]}
        searchProps={[
          {
            title: "Brand",
            key: "brand",
          },
        ]}
        mobileWidth="305px"
        columns={columns}
      />
    </div>
  );
};

export default BrandListPage;
