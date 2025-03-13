import { Col, Row } from "antd";
import { MdLocalPrintshop } from "react-icons/md";
import { useParams } from "react-router-dom";

const details = [
  {
    title: "Product",
    description: "Macbook Pro",
  },
  {
    title: "Category",
    description: "Computers",
  },
  {
    title: "Brand",
    description: "Apple",
  },
  {
    title: "Unit",
    description: "Peice",
  },
  {
    title: "SKU",
    description: "SKU0001",
  },
  {
    title: "Minimum Qty",
    description: "5",
  },
  {
    title: "Tax",
    description: "0.00%",
  },
  {
    title: "Discount Type",
    description: "Percentage",
  },
  {
    title: "Price",
    description: "1500.99",
  },
  {
    title: "Status",
    description: "Active",
  },
  {
    title: "Description",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
];

const ProductDetailsPage = () => {
    const {id} = useParams();
  return (
    <div className="grid gap-3">
      <div>
        <h1 className="text-ash-100 font-bold text-xl">Product Details: {id}</h1>
        <p className="text-ash-100 text-sm">Full details of a product</p>
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        <div className="gutter-row md:col-span-2">
          <div className="bg-navy-200 border-1 border-navy-300 rounded-md p-5 grid gap-3">
            <div className="border-1 border-navy-300 h-24 w-2/4 flex p-2">
              <div className="h-full w-3/4 bg-[url(/barcode.png)] bg-center bg-cover bg-no-repeat"></div>
              <div className="w-1/4  flex items-center justify-end pr-4">
                <MdLocalPrintshop className="text-ash-300" size={30} />
              </div>
            </div>
            <div>
              {details.map((detail) => (
                <Row>
                  <Col
                    className="border-1 p-2 text-ash-100 border-navy-300"
                    span={8}
                  >
                    {detail.title}
                  </Col>
                  <Col
                    className="border-1 p-2 text-white border-navy-300"
                    span={16}
                  >
                    {detail.description}
                  </Col>
                </Row>
              ))}
            </div>
          </div>
        </div>
        <div className="gutter-row p-4 bg-navy-200 border-2 border-navy-300 rounded-md h-80">
          <div className=" h-72 bg-[url(/laptop1.jpg)] bg-center bg-cover bg-no-repeat">
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
