// import React from "react";
import ProfileAdditional from "./ProfileAdditional";
import ProfileCard from "./ProfileCard";
import SkillList from "./SkillList";

const LeftSideBar = () => {
  return (
    <div className="sticky top-0 p-4 border-r border-r-zinc-400 bg-[#050505] min-h-[100dvh]">
      <div className="">
        <ProfileCard />
        <ProfileAdditional />
      </div>

      <div className="">
        <SkillList />
      </div>
      <div className=""></div>
    </div>
  );
};

export default LeftSideBar;
