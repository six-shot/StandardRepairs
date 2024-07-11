import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { containerVars, menuVars, mobileLinkVars } from "../../../../../utils/motion";

function Dropdown({ items }) {
  return (
    <div>
      <AnimatePresence>
        <motion.div
          variants={menuVars}
          initial="initial"
          animate="animate"
          exit="exit"
          className="absolute top-[7vh] left-0  z-[1000] w-[200px] list-none text-left bg-black "
        >
         
            <motion.div
              variants={containerVars}
              initial="initial"
              animate="open"
              exit="initial"
             
            >
              {items.map((item) => (
                <li
                  key={item.id}
                  className="bg-black cursor-pointer hover:bg-gray-700"
                >
                  <MobileNavLink title={item.title} path={item.path} />
                </li>
              ))}
            </motion.div>
        
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

const MobileNavLink = ({ title, path }) => {
  return (
    <motion.div
      variants={mobileLinkVars}
      className=""
    >
      <Link
        to={path}
        className="block text-sm w-full h-full no-underline text-white p-3"
      >
        {title}
      </Link>
    </motion.div>
  );
};

export default Dropdown;