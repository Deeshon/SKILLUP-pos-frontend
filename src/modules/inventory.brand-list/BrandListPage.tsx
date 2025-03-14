import CustomModal from "../../common/components/CustomModal";
import ListTable from "../../common/components/ListTable";
import ListTableHeader from "../../common/components/ListTableHeader";
import useCustomModal from "../../common/hooks/useCustomModal";
import {
  TypeCustomModalFormItems,
  TypeListTableHeaderAction,
} from "../../common/types";
import useTable from "./hooks/useTable";
import { IoIosAddCircleOutline } from "react-icons/io";

const formItems: TypeCustomModalFormItems[] = [
  {
    name: "Brand",
    type: "input",
  },
  {
    name: "Brand Slug",
    type: "input",
  },
  {
    name: "Status",
    type: "switch",
  },
];

const BrandListPage = () => {
  const { columns } = useTable();

  const { isOpen, onOpenModal, onCloseModal } = useCustomModal();

  const headerActions: TypeListTableHeaderAction[] = [
    {
      title: "Add New Brand",
      icon: <IoIosAddCircleOutline size={20} />,
      fn: onOpenModal,
    },
  ];
  return (
    <div className="py-2 md:p-2">
      <CustomModal
        isOpen={isOpen}
        onCloseModal={onCloseModal}
        title={"Add New Brand"}
        formItems={formItems}
      />
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
