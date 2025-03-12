import ListTable from "../../common/components/ListTable";
import ListTableHeader from "../../common/components/ListTableHeader";
import { TypeListTableHeaderAction } from "../../common/types";
import useTable from "./hooks/useTable";
import { IoIosAddCircleOutline } from "react-icons/io";

const headerActions: TypeListTableHeaderAction[] = [
    {
        title: 'Add New Category',
        icon: <IoIosAddCircleOutline size={20} />
    }
]

const CategoryListPage = () => {
    const {columns} = useTable();
  return (
    <div className="py-2 md:p-2">
      <ListTableHeader
        title="Category"
        subtitle="Manage your categories"
        actions={headerActions}
      />
      <ListTable
        filterProps={[
          {
            title: "Category",
            key: "category",
            options: ["Category 1", "Category 2", "Category 3", "Category 4"],
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
            title: "Category",
            key: "category",
          },
        ]}
        mobileWidth="305px"
        columns={columns}
      />
    </div>
  );
};

export default CategoryListPage;
