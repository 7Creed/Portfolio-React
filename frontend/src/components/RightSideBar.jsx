import React from "react";
import MobileNav from "./MobileNav";
import { useState } from "react";

const RightSideBar = ({ isMenuOpen, setIsMenuOpen }) => {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <div
      className={`sticky top-0 p-4 border-l border-zinc-400 bg-[#050505] min-h-[100dvh] transition-all duration-500 ease-in-out ${
        isMenuOpen ? "w-full" : "w-full"
      }`}
    >
      {/* RightSideBar */}
      <>
        <MobileNav isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      </>
    </div>
  );
};

export default RightSideBar;
