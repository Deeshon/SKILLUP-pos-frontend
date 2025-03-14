import { Input, Select } from "antd";
import FormItem from "antd/es/form/FormItem";
import { IoMdInformationCircleOutline } from "react-icons/io";

const PricingStocksComponent = () => {
  return (
    <div>
      <div className="flex items-center gap-1 border-b-1 border-navy-300 pb-3">
        <IoMdInformationCircleOutline className="text-yellowOrange" size={20} />
        <h1 className="text-ash-100 text-lg font-semibold">
          Pricing And Stocks
        </h1>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-5">
        <FormItem label="Quantity">
          <Input />
        </FormItem>
        <FormItem label="Price">
          <Input />
        </FormItem>
        <FormItem label={"Tax Type"}>
          <Select dropdownStyle={{ backgroundColor: "#212429" }}>
            <Select.Option value={"exclusive"}>Exclusive</Select.Option>
            <Select.Option value={"sales"}>Sales Tax</Select.Option>
          </Select>
        </FormItem>
        <FormItem label={"Discount Type"}>
          <Select dropdownStyle={{ backgroundColor: "#212429" }}>
            <Select.Option value={"percentage"}>Percentage</Select.Option>
            <Select.Option value={"cash"}>Cash</Select.Option>
          </Select>
        </FormItem>
        <FormItem label="Discount Value">
          <Input />
        </FormItem>
        <FormItem label="Quantity Alert">
          <Input />
        </FormItem>
      </div>
    </div>
  );
};

export default PricingStocksComponent;
