import ListTable from "../../common/components/ListTable";
import ListTableHeader from "../../common/components/ListTableHeader";
import useTable from "./hooks/useTable";

const ExpiredProductListPage = () => {
    const {columns} = useTable();
  return (
    <div className="py-2 md:p-2">
      <ListTableHeader
        title="Expired Products"
        subtitle="Manage your expired products"
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

export default ExpiredProductListPage;
