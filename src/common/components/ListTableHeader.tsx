import { FaFilePdf, FaFileExcel, FaArrowRotateLeft } from "react-icons/fa6";
import { MdLocalPrintshop } from "react-icons/md";
import { IoIosArrowUp } from "react-icons/io";
import { TypeListTableHeaderProps } from "../types";

const items = [
  {
    icon: <FaFilePdf size={20} color="red" />,
  },
  {
    icon: <FaFileExcel size={20} color="green" />,
  },
  {
    icon: <MdLocalPrintshop size={20} color="#a7b2c0" />,
  },
  {
    icon: <FaArrowRotateLeft size={15} color="#a7b2c0" />,
  },
  {
    icon: <IoIosArrowUp size={20} color="#a7b2c0" />,
  },
];

const ListTableHeader = ({
  title,
  subtitle,
  actions,
}: TypeListTableHeaderProps) => {
  return (
    <div className=" flex md:flex-row flex-col gap-5  md:items-center justify-between">
      <div className="text-ash-100">
        <h1 className="font-bold text-lg">{title}</h1>
        <p className="text-xs">{subtitle}</p>
      </div>
      <div className=" flex md:flex-row flex-col gap-6 ">
        <div className="flex gap-3 items-center md:justify-center col-span-2">
          {items.map((item) => (
            <div className="size-9 rounded-md border-1 border-navy-300 flex items-center justify-center">
              {item.icon}
            </div>
          ))}
        </div>
        <div className=" flex md:flex-row flex-col gap-6">
          {actions?.map((action) => (
            <div>
              <button className="text-white bg-yellowOrange px-3 py-[0.6rem] rounded-md flex items-center justify-center gap-2 text-sm font-semibold" style={{backgroundColor: action.color}}>
                {action.icon}
                <p>{action.title}</p>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListTableHeader;
