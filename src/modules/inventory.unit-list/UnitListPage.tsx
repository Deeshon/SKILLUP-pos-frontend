import CustomModal from "../../common/components/CustomModal";
import ListTable from "../../common/components/ListTable";
import ListTableHeader from "../../common/components/ListTableHeader";
import useCustomModal from "../../common/hooks/useCustomModal";
import { TypeCustomModalFormItems, TypeListTableHeaderAction } from "../../common/types";
import useTable from "./hooks/useTable";
import { IoIosAddCircleOutline } from "react-icons/io";

const formItems: TypeCustomModalFormItems[] = [
  {
    name: "Unit",
    type: "input",
  },
  {
    name: "Unit Slug",
    type: "input",
  },
  {
    name: "Status",
    type: "switch",
  },
];

const UnitListPage = () => {
    const {columns} = useTable();

  const { isOpen, onOpenModal, onCloseModal } = useCustomModal();


    const headerActions: TypeListTableHeaderAction[] = [
      {
          title: 'Add New Unit',
          icon: <IoIosAddCircleOutline size={20} />,
          fn: onOpenModal
      }
  ]

  return (
    <div className="py-2 md:p-2">
            <CustomModal
        isOpen={isOpen}
        onCloseModal={onCloseModal}
        title={"Add New Unit"}
        formItems={formItems}
      />
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
