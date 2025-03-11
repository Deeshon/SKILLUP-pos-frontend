import { Modal } from "antd";
import { useState } from "react";
import { CiFilter, CiSearch } from "react-icons/ci";
import { TypeSearchFilterProps } from "../types";
import useIsMobile from "../hooks/useIsMobile";

const SearchFilterComponent = ({
  filterProps,
  searchProps,
}: TypeSearchFilterProps) => {
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const isMobile = useIsMobile();

  // Toggle functions
  const toggleFilterModal = () => setIsFilterModalOpen((prev) => !prev);
  const toggleSearchModal = () => setIsSearchModalOpen((prev) => !prev);

  // Reusable class for buttons
  const buttonClass =
    "hover:border-1 size-10 md:h-fit md:w-fit flex md:block items-center justify-center md:px-8 md:py-2 rounded-md text-white cursor-pointer";

  return (
    <div className="flex h-12 gap-2 items-center">
      <div className="flex text-white gap-2">
        <select className="hidden md:block border-2 border-navy-300 rounded-md px-2 bg-navy-500">
          {searchProps.map((option) => (
            <option key={option.key} value={option.key}>
              {option.title}
            </option>
          ))}
        </select>
        <input className="hidden md:block border-navy-300 bg-navy-500 border-2 rounded-md md:w-80 px-2" />

        <button
          className={`bg-navy-100 ${buttonClass}`}
          onClick={isMobile ? toggleSearchModal : () => {}}
        >
          <CiSearch size={25} className="md:hidden block" />
          <p className="hidden md:block">Search</p>
        </button>
      </div>

      <div className="flex">
        <button
          className={`bg-yellowOrange ${buttonClass}`}
          onClick={toggleFilterModal}
        >
          <CiFilter size={25} className="md:hidden block" />
          <p className="hidden md:block">Filter</p>
        </button>
      </div>

      {/* Filter Modal */}
      <Modal
        title="Filter"
        open={isFilterModalOpen}
        onOk={toggleFilterModal}
        onCancel={toggleFilterModal}
      >
        <div className="grid md:grid-cols-2 gap-4">
          {filterProps.map((item) => (
            <div key={item.title} className="flex flex-col gap-1">
              <p className="text-white">{item.title}</p>
              <select className="border-2 rounded-md px-4 py-1">
                {item.options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          ))}
        </div>
      </Modal>

      {/* Search Modal (Only for Mobile) */}
      <Modal
        title="Search"
        open={isSearchModalOpen}
        onOk={toggleSearchModal}
        onCancel={toggleSearchModal}
        className="md:hidden"
      >
        <div className="flex flex-col text-white gap-2">
          <select className="border-2 w-32 h-10 border-navy-300 rounded-md px-2 bg-navy-500">
            {searchProps.map((option) => (
              <option key={option.key} value={option.key}>
                {option.title}
              </option>
            ))}
          </select>
          <div className="flex gap-2">
            <input className="border-navy-300 w-full bg-navy-500 border-2 rounded-md md:w-80 px-2" />
            <button
              className={`bg-navy-100 ${buttonClass}`}
              onClick={toggleSearchModal}
            >
              <CiSearch size={25} className="md:hidden block" />
              <p className="hidden md:block">Search</p>
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default SearchFilterComponent;
