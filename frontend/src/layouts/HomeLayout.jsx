// import React from "react";
import LeftSideBar from "@/components/LeftSideBar";
import RightSideBar from "@/components/RightSideBar";

const HomeLayout = ({ children }) => {
  return (
    <div className="relative grid grid-cols-12 min-h-screen">
      <div className="col-span-3">
        <LeftSideBar />
      </div>

      <main className="bg bg-gray-95 bg-opacity-50 col-span-8 px-5">
        {children}
      </main>

      <div className="col-span-1">
        <RightSideBar />
      </div>
    </div>
  );
};

export default HomeLayout;
