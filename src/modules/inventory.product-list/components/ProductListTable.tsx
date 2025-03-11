import ResponsiveTable from "../../../common/components/ResponsiveTable";
import SearchFilterComponent from "../../../common/components/SearchFilterComponent";
import useProductTable from "../hooks/useProductTable";

const ProductListTable = () => {
  const { columns } = useProductTable();
  return (
    <div className="mt-10 p-4 bg-navy-200 grid gap-4 rounded-lg border-1 border-navy-300">
      <SearchFilterComponent
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
      />
      <ResponsiveTable columns={columns} mobileWidth={"305px"} />
    </div>
  );
};

export default ProductListTable;
