import React from "react";
import MobileNav from "./MobileNav";

const RightSideBar = () => {
  return (
    <div className="sticky top-0 p-4 border-l border-zinc-400 bg-[#050505] min-h-[100dvh]">
      {/* RightSideBar */}
      <>
        <MobileNav />
      </>
    </div>
  );
};

export default RightSideBar;
