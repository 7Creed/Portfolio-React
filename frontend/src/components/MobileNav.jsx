// import React from "react";
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import { Button } from "./ui/button";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navigationMenu } from "@/data/data";
import { NavLink } from "react-router-dom";

const MobileNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  // const close = () => setIsMenuOpen(false);

  return (
    <div>
      <div className="flex flex-col items-center min-h-svh">
        {/* <Button>Click me</Button> */}
        <div onClick={toggleMenu} className="cursor-pointer">
          {isMenuOpen ? (
            <IoClose size={35} className="text-red-700" />
          ) : (
            <AiOutlineMenuUnfold size={35} className="text-gray-300" />
          )}
        </div>
        {/* <AiOutlineMenuFold /> */}

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.4 }}
              // transition={{ type: "spring", stiffness: 100, damping: 15 }}
              className=""
            >
              <div className="flex flex-col text-gray-100 mt-5 gap-3 text-[17px]">
                {navigationMenu.map((item) => (
                  <NavLink
                    key={item.id}
                    to={item.href}
                    className="hover:text-green-400 duration-200 transition-all focus:p-1 focus:bg-green-950 focus:rounded-md"
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default MobileNav;
