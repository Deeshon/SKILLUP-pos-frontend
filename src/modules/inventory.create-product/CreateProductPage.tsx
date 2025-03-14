import { Form } from "antd";
import ProductInformationComponent from "./components/ProductInformationComponent";
import { useState } from "react";
import Stepper from "../../common/components/Stepper";
import PricingStocksComponent from "./components/PricingStocksComponent";
import ReviewComponent from "./components/ReviewComponent";

const getStepComponent = (step: number) => {
  if (step === 1) {
    return <ProductInformationComponent />;
  } else if (step == 2) {
    return <PricingStocksComponent />;
  } else if (step === 3) {
    return <ReviewComponent />
  }
};

const CreateProductPage = () => {
  const [step, setStep] = useState(1);

  const onNext = () => {
    if (step !== 3) {
      setStep(step + 1);

    }  };

  const onBack = () => {
    if (step != 1) {
    setStep(step - 1);

    }
  };

  return (
    <div className="grid gap-3">
      <div>
        <h1 className="text-ash-100 font-bold text-xl">New Product</h1>
        <p className="text-ash-100 text-sm">Create new product</p>
      </div>
      <div className="grid md:grid-cols-3 md:gap-3 gap-6">
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
            <div className="flex justify-between md:hidden relative h-8 mt-8">
              <button
              disabled={step === 1}
                className="disabled:hidden px-8 py-1 rounded-md bg-navy-100 text-white font-bold cursor-pointer"
                onClick={onBack}
              >
                Back
              </button>

              <button
                className="px-8 py-1 rounded-md bg-yellowOrange text-white font-bold cursor-pointer absolute right-0"
                onClick={onNext}
              >
                {step === 3 ? "Submit" : "Next"}
                </button>
            </div>
          </div>
        </div>
        <div className="hidden md:block border-1 border-navy-300 col-span-1 bg-navy-200 rounded-md p-3">
          <div className=" h-80 flex flex-col gap-6 mt-2">
            <div className="flex justify-between relative h-8">
              <button
              disabled={step === 1}
                className="disabled:hidden px-8 py-1 rounded-md bg-navy-100 text-white font-bold cursor-pointer"
                onClick={onBack}
              >
                Back
              </button>

              <button
                className="px-8 py-1 rounded-md bg-yellowOrange text-white font-bold cursor-pointer absolute right-0"
                onClick={onNext}
              >
                {step === 3 ? "Submit" : "Next"}
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
