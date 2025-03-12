import SearchFilterComponent from "./SearchFilterComponent";
import ResponsiveTable from "./ResponsiveTable";
import { TypeListTableProps } from "../types";

const ListTable = ({ filterProps, searchProps, columns, mobileWidth }: TypeListTableProps) => {
  return (
    <div className="mt-10 p-4 bg-navy-200 grid gap-4 rounded-lg border-1 border-navy-300">
    <SearchFilterComponent
      filterProps={filterProps}
      searchProps={searchProps}
    />
    <ResponsiveTable columns={columns} mobileWidth={mobileWidth} />
  </div>
  );
};

export default ListTable;
