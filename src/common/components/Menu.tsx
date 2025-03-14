import { JSX, useEffect, useState } from "react";
import { TypeMenuProps } from "../types";
import { RiDashboardFill, RiArrowDropRightLine } from "react-icons/ri";
import { HiOutlineDeviceMobile } from "react-icons/hi";
import { FaBoxOpen, FaCubes, FaTags, FaBarcode } from "react-icons/fa";
import { GiWrappedSweet } from "react-icons/gi";
import {
  MdProductionQuantityLimits,
  MdCategory,
  MdOutlineQrCode2,
} from "react-icons/md";
import { useLocation } from "react-router-dom";

const menu: {
  title: string;
  href?: string;
  subMenuItems: {
    title: string;
    href?: string;
    menuIcon: JSX.Element;
    dropdown?: { title: string; href?: string }[];
  }[];
}[] = [
  {
    title: "Main",
    subMenuItems: [
      {
        title: "Dashboard",
        menuIcon: <RiDashboardFill size={17} />,
        dropdown: [
          { title: "Admin Dashboard", href: "/dashboard/admin" },
          { title: "Sales Dashboard", href: "/dashboard/sales" },
        ],
      },
      {
        title: "Application",
        menuIcon: <HiOutlineDeviceMobile size={17} />,
        dropdown: [{ title: "Chat" }, { title: "Emails" }],
      },
    ],
  },
  {
    title: "Inventory",
    subMenuItems: [
      {
        title: "Products",
        menuIcon: <MdProductionQuantityLimits size={17} />,
        href: "/inventory/product-list"
      },
      { title: "Create Products", menuIcon: <FaBoxOpen size={17} />, href: "/inventory/create-product"},
      { title: "Expired Products", menuIcon: <GiWrappedSweet size={17} />, href: "/inventory/expired-products" },
      { title: "Low Stocks", menuIcon: <FaCubes size={17} />, href: "/inventory/low-stocks"  },
      { title: "Category", menuIcon: <MdCategory size={17} />, href: "/inventory/category-list"   },
      { title: "Brands", menuIcon: <FaTags size={17} />, href: "/inventory/brand-list" },
      { title: "Units", menuIcon: <FaCubes size={17} />, href: "/inventory/unit-list" },
      { title: "Warranties", menuIcon: <GiWrappedSweet size={17} /> },
    ],
  },
];

const Menu = ({ isMenuClose }: TypeMenuProps) => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const handleDropdownClick = (title: string) => {
    setOpenDropdown((prev) => (prev === title ? null : title));
  };

  const location = useLocation();
  const [pathname, setPathname] = useState(location.pathname)

  const isActive = (href: string) => {
    return pathname == (href) ? true : false
  }


  useEffect(() => {
    setPathname(location.pathname)
  }, [location])

  return (
    <div
      className={`bg-navy-500 text-ash-500 z-10 ${
        isMenuClose ? "-translate-x-full md:translate-x-0" : "w-full"
      } absolute md:static md:block p-6 flex flex-col md:border-r-1 border-navy-300 h-full overflow-y-auto scrollable-div transform transition-transform duration-300 `}
    >
      {menu.map((menuItem, index) => (
        <div key={index} className="grid gap-5 border-b-1 pb-6 mb-10">
          <div>
            <h5 className="text-sm text-ash-300">{menuItem.title}</h5>
          </div>
          <div className="px-5 text-[0.80rem] grid gap-5">
            {menuItem.subMenuItems.map((subItem, subIndex) => (
              <div key={subIndex} className="grid gap-4">
                <div className="flex justify-between cursor-pointer group" style={isActive(subItem.href || "") ? {color: '#e39272'} : {}}>
                  <div className="flex items-center">
                    {subItem.menuIcon}
                    <div className="ml-3 group-hover:text-[#e39272]">
                      <a href={subItem.href}>{subItem.title}</a>
                    </div>
                  </div>
                  {subItem.dropdown && (
                    <div
                      className="flex items-center cursor-pointer"
                      onClick={() => handleDropdownClick(subItem.title)}
                    >
                      <RiArrowDropRightLine
                        size={25}
                        className={`transition-transform duration-200 ${
                          openDropdown === subItem.title ? "rotate-90" : ""
                        }`}
                      />
                    </div>
                  )}
                </div>
                {subItem.dropdown && openDropdown === subItem.title && (
                  <div className="px-3 text-ash-100 grid gap-3">
                    {subItem.dropdown.map((dropItem, dropIndex) => (
                      <div key={dropIndex} className="flex items-center group" style={isActive(dropItem.href || "") ? {color: '#e39272'} : {}}>
                        <div className="size-2 border-2 rounded-full group-hover:bg-[#e39272]" style={isActive(dropItem.href || "") ? {backgroundColor: '#e39272'} : {}}></div>
                        <div className="ml-2 group-hover:text-[#e39272]">
                          <a href={dropItem.href}>{dropItem.title}</a>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Menu;
