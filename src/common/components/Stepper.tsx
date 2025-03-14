import { TypeStepperProps } from "../types";
import { MdDone } from "react-icons/md";

const Stepper = ({ direction, current, items }: TypeStepperProps) => {
  const isVertical = direction === "vertical";

  return (
    <div className={isVertical ? "grid gap-2" : "flex gap-2"}>
      {items.map((item, key) => {
        const isStepDone = current > key + 1;
        return (
          <div>
            <div
              className={`flex gap-2 ${
                current >= key + 1 ? "text-white" : "text-ash-100"
              }`}
            >
              <div
                className={`${
                  isVertical ? "flex flex-col" : "flex"
                } items-center gap-2`}
              >
                <div
                  className={`${isVertical ? "size-10" : "size-6"} ${
                    current >= key + 1 ? "bg-yellowOrange" : "bg-ash-500"
                  } rounded-full flex items-center justify-center`}
                >
                  {isStepDone ? <MdDone /> : key + 1}
                </div>
                <div
                  className={`${
                    isVertical ? "block" : "hidden"
                  } h-8 w-[0.008rem] ${
                    isStepDone ? "bg-yellowOrange" : "bg-ash-100"
                  } ${items.length === key + 1 ? "hidden" : "block"}`}
                ></div>
              </div>
              <div className="flex md:mt-2 items-center md:items-start">
                <div className="md:text-lg  text-xs">
                  <h1>{item.title}</h1>
                  <p>{item.description}</p>
                </div>
                <div
                  className={`${
                    isVertical ? "hidden" : "block"
                  } h-[0.008rem] w-8 ${
                    isStepDone ? "bg-yellowOrange" : "bg-ash-100"
                  } ${items.length === key + 1 ? "hidden" : "block"}`}
                ></div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Stepper;
