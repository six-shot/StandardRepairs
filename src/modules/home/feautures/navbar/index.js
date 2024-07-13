import React, { useState } from "react";
import { Link } from "react-router-dom";
import { navItems } from "./NavItems";
import Dropdown from "./dropdown";
import { CiShoppingCart } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { containerVars, menuVars, mobileLinkVars } from "../../../../utils/motion";
import { AnimatePresence, motion } from "framer-motion";
import Repair from "../../components/modals/reapir";
function Navbar() {
  const [dropdown, setDropdown] = useState({});

  const handleMouseEnter = (id) => {
    setDropdown((prevState) => ({ ...prevState, [id]: true }));
  };

  const handleMouseLeave = (id) => {
    setDropdown((prevState) => ({ ...prevState, [id]: false }));
  };

 const [open, setOpen] = useState(false);

 const toggleMenu = () => {
   setOpen((prevOpen) => !prevOpen);
 };
 const closeMenu = () => {
   setOpen(false);
 };
 const [navbar, setNavbar] = useState(false);


  return (
    <div>
      {" "}
      <div className="w-full flex justify-between items-center bg-white h-[10vh]  px-[5%]">
        <div>
          <h4 className="font-bold text-2xl">LOGO</h4>
        </div>
        <nav className="">
          <ul className="sm:flex hidden gap-8 items-center">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Shop</li>
            <li>Contact</li>
          </ul>
        </nav>

        <div className="sm:flex hidden items-center gap-2 border-l border-black px-3">
          <CiSearch className="text-[28px]" />
          <CiShoppingCart className="text-[28px]" />
        </div>
        <div className="sm:hidden flex" onClick={toggleMenu}>
          <HiOutlineMenuAlt4 className="text-[28px]" />
        </div>
      </div>
      <nav className="px-[5%] w-full bg-black h-[7vh] sm:flex hidden justify-center items-center text-white">
        <ul className="flex items-center">
          {navItems.map((item) => (
            <li
              key={item.id}
              className={`${item.cName} flex items-center h-[7vh] relative`}
              onMouseEnter={() => handleMouseEnter(item.id)}
              onMouseLeave={() => handleMouseLeave(item.id)}
            >
              <Link
                to={item.path}
                className="no-underline text-white text-sm mr-8 p-2 rounded-md hover:bg-black"
              >
                {item.title}
              </Link>
              {item.dropdown && dropdown[item.id] && (
                <Dropdown items={item.dropdown} />
              )}
            </li>
          ))}
          <li><Repair/></li>
        </ul>
      </nav>
      <div>
        {" "}
        <AnimatePresence>
          {open && (
            <motion.div
              variants={menuVars}
              initial="initial"
              animate="animate"
              exit="exit"
              className="fixed z-[10000000] left-0 top-0 h-screen w-full origin-top bg-black text-white p-10 "
            >
              <div className="flex h-full flex-col">
                <div className="flex justify-between">
                  <Link href="/">
                    {" "}
                    <div>
                      <h4 className="text-white font-bold text-2xl">LOGO</h4>
                    </div>
                  </Link>
                  <p className="text-md cursor-pointer " onClick={toggleMenu}>
                    Close
                  </p>
                </div>
                <motion.div
                  variants={containerVars}
                  initial="initial"
                  animate="open"
                  exit="initial"
                  className="flex h-full flex-col items-center justify-center gap-4"
                >
                  <motion.div
                    variants={mobileLinkVars}
                    className="text-5xl uppercase "
                  >
                    {navItems.map((item) => (
                      <li
                        key={item.id}
                        className={`${item.cName} flex items-center h-[7vh] relative`}
                        onMouseEnter={() => handleMouseEnter(item.id)}
                        onMouseLeave={() => handleMouseLeave(item.id)}
                      >
                        <Link
                          to={item.path}
                          className="no-underline text-white text-sm mr-8 p-2 rounded-md hover:bg-black"
                        >
                          {item.title}
                        </Link>
                        {item.dropdown && dropdown[item.id] && (
                          <Dropdown items={item.dropdown} />
                        )}
                      </li>
                    ))}
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Navbar;
