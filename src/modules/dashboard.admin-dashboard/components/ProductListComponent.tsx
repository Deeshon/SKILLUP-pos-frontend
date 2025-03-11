import { Table } from "antd";
import { FaArrowRight } from "react-icons/fa6";
import { TypeProductTableProps } from "../types";

const ProductListComponent = ({isLoading, productList, columns}: TypeProductTableProps) => {
  return (
    <div className="bg-navy-200 border-2 border-navy-300 rounded-lg">
      <div className="border-b-2 border-navy-300 flex text-ash-300 justify-between p-4">
        <h3 className="text-lg font-bold">Recent Products</h3>
        <div className="flex items-center justify-between">
          <h4 className="text-md mr-2">View All</h4>
          <FaArrowRight />
        </div>
      </div>
      <div className="w-full py-4 px-2">
          <Table
          style={{zIndex: 0}}
            dataSource={productList}
            columns={columns}
            loading={isLoading}
            pagination={
              {hideOnSinglePage: true}
            }
          />
        </div>
    </div>
  );
};

export default ProductListComponent;
