import CustomModal from "../../common/components/CustomModal";
import ListTable from "../../common/components/ListTable";
import ListTableHeader from "../../common/components/ListTableHeader";
import useCustomModal from "../../common/hooks/useCustomModal";
import { TypeCustomModalFormItems, TypeListTableHeaderAction } from "../../common/types";
import useTable from "./hooks/useTable";
import { IoIosAddCircleOutline } from "react-icons/io";

const formItems: TypeCustomModalFormItems[] = [
  {
    name: "Category",
    type: "input",
  },
  {
    name: "Category Slug",
    type: "input",
  },
  {
    name: "Status",
    type: "switch",
  },
];

const CategoryListPage = () => {
  const { columns } = useTable();

  const { isOpen, onOpenModal, onCloseModal } = useCustomModal();

  const headerActions: TypeListTableHeaderAction[] = [
    {
      title: "Add New Category",
      icon: <IoIosAddCircleOutline size={20} />,
      fn: onOpenModal,
    },
  ];
  return (
    <div className="py-2 md:p-2">
      <CustomModal
        isOpen={isOpen}
        onCloseModal={onCloseModal}
        title={"Add New Category"}
        formItems={formItems}
      />
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
