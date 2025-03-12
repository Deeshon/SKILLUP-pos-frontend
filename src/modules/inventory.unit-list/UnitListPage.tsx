import ListTable from "../../common/components/ListTable";
import ListTableHeader from "../../common/components/ListTableHeader";
import { TypeListTableHeaderAction } from "../../common/types";
import useTable from "./hooks/useTable";
import { IoIosAddCircleOutline } from "react-icons/io";

const headerActions: TypeListTableHeaderAction[] = [
    {
        title: 'Add New Unit',
        icon: <IoIosAddCircleOutline size={20} />
    }
]

const UnitListPage = () => {
    const {columns} = useTable();
  return (
    <div className="py-2 md:p-2">
      <ListTableHeader
        title="Unit"
        subtitle="Manage your units"
        actions={headerActions}
      />
      <ListTable
        filterProps={[
          {
            title: "Unit",
            key: "unit",
            options: ["KG", "PC"],
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
            title: "Unit",
            key: "unit",
          },
        ]}
        mobileWidth="305px"
        columns={columns}
      />
    </div>
  );
};

export default UnitListPage;
