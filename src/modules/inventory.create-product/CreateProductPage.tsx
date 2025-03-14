import { Form } from "antd";
import ProductInformationComponent from "./components/ProductInformationComponent";
import { useState } from "react";
import Stepper from "../../common/components/Stepper";

const getStepComponent = (step: number) => {
  if (step === 1) {
    return <ProductInformationComponent />;
  } else if (step == 2) {
    return <div>Stock and Price</div>;
  } else if (step === 3) {
    return <div>Review</div>;
  }
};

const CreateProductPage = () => {
  const [step, setStep] = useState(1);

  const onNext = () => {
    setStep(step + 1);
  };

  const onBack = () => {
    setStep(step - 1);
  };

  return (
    <div className="grid gap-3">
      <div>
        <h1 className="text-ash-100 font-bold text-xl">New Product</h1>
        <p className="text-ash-100 text-sm">Create new product</p>
      </div>
      <div className="grid md:grid-cols-3 md:gap-4 gap-6">
        <div className="md:hidden mt-2">
          <Stepper
            direction="horizontal"
            current={step}
            items={[
              {
                title: "Product Information",
              },
              {
                title: "Pricing & Stocks",
              },
              {
                title: "Review & Submit",
              },
            ]}
          />
        </div>
        <div className="border-1 border-navy-300 md:col-span-2 bg-navy-200 rounded-md p-3">
          <div>
            <Form layout="vertical">{getStepComponent(step)}</Form>
            <div className="flex justify-between md:hidden">
              <button
                className="px-8 py-1 rounded-md bg-navy-100 text-white font-bold cursor-pointer"
                onClick={onBack}
              >
                Back
              </button>

              <button
                className="px-8 py-1 rounded-md bg-yellowOrange text-white font-bold cursor-pointer"
                onClick={onNext}
              >
                Next
              </button>
            </div>
          </div>
        </div>
        <div className="hidden md:block border-1 border-navy-300 col-span-1 bg-navy-200 rounded-md p-3">
          <div className=" h-80 flex flex-col gap-6 mt-2">
            <div className="flex justify-between">
              <button
                className="px-8 py-1 rounded-md bg-navy-100 text-white font-bold cursor-pointer"
                onClick={onBack}
              >
                Back
              </button>

              <button
                className="px-8 py-1 rounded-md bg-yellowOrange text-white font-bold cursor-pointer"
                onClick={onNext}
              >
                Next
              </button>
            </div>
            <Stepper
              direction="vertical"
              current={step}
              items={[
                {
                  title: "Product Information",
                },
                {
                  title: "Pricing and Stocks",
                },
                {
                  title: "Review and Submit",
                },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateProductPage;
