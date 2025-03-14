import { Select, Input } from "antd";
import FormItem from "antd/es/form/FormItem";
import { IoMdInformationCircleOutline } from "react-icons/io";

const { TextArea } = Input;

const ProductInformationComponent = () => {
  return (
    <div>
      <div className="flex items-center gap-1 border-b-1 border-navy-300 pb-3">
        <IoMdInformationCircleOutline className="text-yellowOrange" size={20} />
        <h1 className="text-ash-100 text-lg font-semibold">
          Product Information
        </h1>
      </div>
      <div className="grid grid-cols-2 gap-3 mt-5">
        <div>
          <FormItem label={"Store"}>
            <Select dropdownStyle={{ backgroundColor: "#212429" }}>
              <Select.Option value={"store1"}>Store 1</Select.Option>
              <Select.Option value={"store1"}>Store 2</Select.Option>
              <Select.Option value={"store1"}>Store 3</Select.Option>
            </Select>
          </FormItem>
        </div>
        <div>
          <FormItem label={"Warehouse"}>
            <Select dropdownStyle={{ backgroundColor: "#212429" }}>
              <Select.Option value={"store1"}>Warehouse 1</Select.Option>
              <Select.Option value={"store1"}>Warehouse 2</Select.Option>
              <Select.Option value={"store1"}>Warehouse 3</Select.Option>
            </Select>
          </FormItem>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        <div>
          <FormItem label={"Product Name"}>
            <Input />
          </FormItem>
        </div>
        <div>
          <FormItem label={"Slug"}>
            <Input />
          </FormItem>
        </div>
        <div>
          <FormItem label={"SKU"}>
            <Input />
          </FormItem>
        </div>
        <div>
          <FormItem label={"Category"}>
            <Select dropdownStyle={{ backgroundColor: "#212429" }}>
              <Select.Option value={"category1"}>Category 1</Select.Option>
              <Select.Option value={"category1"}>Category 2</Select.Option>
              <Select.Option value={"category1"}>Category 3</Select.Option>
            </Select>
          </FormItem>
        </div>
        <div>
          <FormItem label={"Brand"}>
            <Select dropdownStyle={{ backgroundColor: "#212429" }}>
              <Select.Option value={"brand1"}>Brand 1</Select.Option>
              <Select.Option value={"brand1"}>Brand 2</Select.Option>
              <Select.Option value={"brand1"}>Brand 3</Select.Option>
            </Select>
          </FormItem>
        </div>
        <div>
          <FormItem label={"Unit"}>
            <Select dropdownStyle={{ backgroundColor: "#212429" }}>
              <Select.Option value={"unit1"}>Unit 1</Select.Option>
              <Select.Option value={"unit1"}>Unit 2</Select.Option>
              <Select.Option value={"unit1"}>Unit 3</Select.Option>
            </Select>
          </FormItem>
        </div>
      </div>
      {/* <div className="grid md:grid-cols-3 gap-3">
        <div>
          <FormItem label={"Category"}>
            <Select dropdownStyle={{ backgroundColor: "#212429" }}>
              <Select.Option value={"category1"}>Category 1</Select.Option>
              <Select.Option value={"category1"}>Category 2</Select.Option>
              <Select.Option value={"category1"}>Category 3</Select.Option>
            </Select>
          </FormItem>
        </div>
        <div>
          <FormItem label={"Brand"}>
            <Select dropdownStyle={{ backgroundColor: "#212429" }}>
              <Select.Option value={"brand1"}>Brand 1</Select.Option>
              <Select.Option value={"brand1"}>Brand 2</Select.Option>
              <Select.Option value={"brand1"}>Brand 3</Select.Option>
            </Select>
          </FormItem>
        </div>
        <div>
          <FormItem label={"Unit"}>
            <Select dropdownStyle={{ backgroundColor: "#212429" }}>
              <Select.Option value={"unit1"}>Unit 1</Select.Option>
              <Select.Option value={"unit1"}>Unit 2</Select.Option>
              <Select.Option value={"unit1"}>Unit 3</Select.Option>
            </Select>
          </FormItem>
        </div>
      </div> */}
      <div>
        <FormItem label="Description">
          <TextArea rows={4} />
        </FormItem>
      </div>
    </div>
  );
};

export default ProductInformationComponent;
