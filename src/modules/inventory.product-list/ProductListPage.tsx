import { IoIosAddCircleOutline } from "react-icons/io";
import ListTable from "../../common/components/ListTable";
import ListTableHeader from "../../common/components/ListTableHeader";
import useProductTable from "./hooks/useProductTable";
import { CiImport } from "react-icons/ci";

const ProductListPage = () => {
  const { columns } = useProductTable();

  return (
    <div className="py-2 md:p-2">
      <ListTableHeader
        title="Product List"
        subtitle="Manage Your Products"
        actions={[
          {
            title: "Add New Product",
            icon: <IoIosAddCircleOutline size={20} />,
          },
          {
            title: "Import Products",
            icon: <CiImport size={20} />,
            color: '#092c4c'
          },
        ]}
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
            title: "Brand",
            key: "brand",
            options: ["Brand 1", "Brand 2", "Brand 3", "Brand 4"],
            type: "select",
          },
          {
            title: "Unit",
            key: "unit",
            options: ["KG", "PC"],
            type: "select",
          },
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

export default ProductListPage;
