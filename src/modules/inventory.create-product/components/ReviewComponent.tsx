import { IoMdInformationCircleOutline } from "react-icons/io";

const productInfoItems = [
  {
    key: "Store",
    value: "Store 1",
  },
  {
    key: "Warehouse",
    value: "Warehouse 1",
  },
  {
    key: "Product Name",
    value: "Apple M2 Core",
  },
  {
    key: "Slug",
    value: "apple-laptop",
  },
  {
    key: "SKU",
    value: "SKU0001",
  },
  {
    key: "Category",
    value: "Category 1",
  },
  {
    key: "Brand",
    value: "Brand 1",
  },
  {
    key: "Unit",
    value: "Unit 1",
  },
  {
    key: "Description",
    value:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel a reprehenderit reiciendis earum ad ullam, quas quod quasi eum dolorem praesentium quisquam natus soluta architecto nobis est tempora omnis minima?",
  },
];

const pricingStockItems = [
  {
    key: "Quantity",
    value: "50",
  },
  {
    key: "Price",
    value: "$ 1500.99",
  },
  {
    key: "Tax Type",
    value: "Sales Tax",
  },
  {
    key: "Discount Type",
    value: "Percentage",
  },
  {
    key: "Discount Value",
    value: "10%",
  },
  {
    key: "Quantity Alert",
    value: "25",
  },
];

const Review = () => {
  return (
    <div>
      <div className="flex items-center gap-1 border-b-1 border-navy-300 pb-3">
        <IoMdInformationCircleOutline className="text-yellowOrange" size={20} />
        <h1 className="text-ash-100 text-lg font-semibold">Review</h1>
      </div>
      <div className="mt-5">
        <div>
          <div>
            <h2 className="text-[16px] border-b-1 border-ash-100 pb-2 mb-2">
              Product Information
            </h2>
          </div>
          <div>
            {productInfoItems.map((item) => (
              <div className="grid grid-cols-3 gap-4 border-b-1 border-ash-600 py-2">
                <p className="text-ash-100">{item.key}:</p>
                <p className="col-span-2">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-[16px] border-b-1 border-ash-100 pb-2 my-2 mt-5">
            Pricing And Stocks
          </h2>
        </div>
        <div>
          {pricingStockItems.map((item) => (
            <div className="grid grid-cols-3 gap-4 border-b-1 border-ash-600 py-2">
              <p className="text-ash-100">{item.key}:</p>
              <p className="col-span-2">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Review;
