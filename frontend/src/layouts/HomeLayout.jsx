// import React from "react";
import LeftSideBar from "@/components/LeftSideBar";
import RightSideBar from "@/components/RightSideBar";
import { useState } from "react";

const HomeLayout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative grid grid-cols-12 min-h-screen">
      <div className="col-span-3">
        <LeftSideBar />
      </div>

      {/* <main className="bg bg-gray-95 bg-opacity-50 col-span-8 px-5"> */}
      <main
        className={`px-5 bg bg-gray-95 bg-opacity-50 transition-all duration-500 ease-in-out ${
          isMenuOpen ? "col-span-7" : "col-span-8"
        }`}
      >
        {children}
      </main>

      <div
        className={`transition-all duration-500 ease-in-out ${
          isMenuOpen ? "col-span-2" : "col-span-1"
        }`}
      >
        <RightSideBar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      </div>
    </div>
  );
};

export default HomeLayout;
