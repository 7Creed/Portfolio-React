// import React from "react";
import { Button } from "./ui/button";
import profilePic from "@/assets/images/IMG_0620.JPG";

const ProfileCard = () => {
  return (
    <div>
      <img
        src={profilePic}
        alt="Profile"
        className="w-50 h-50 object-fit rounded-lg mx-auto border-4 border-green-500"
      />
      <div className="py-1.5 px-2 mt-4 bg-[#062d1d] rounded-3xl">
        <h2 className="text-xl text-center text-white font-semibold">
          Frank Obika
        </h2>
      </div>
      <div className="flex items-center justify-center gap-2 text-center py-0.5 px-1 mt-2 bg-[#062d1d] rounded-3xl">
        <span className="w-2 h-2 bg-[#9ee64c] rounded-full inline-block"></span>
        <span className="text-sm text-[#4ce6a6]">Available</span>
      </div>
      <div className="mt-4">
        <p className="text-sm text-gray-400 text-center">
          Web/Mobile Developer
        </p>
        <p className="text-sm text-gray-400 text-center">Software Engineer</p>
      </div>

      <Button className="mt-4 w-full bg-green-900 hover:bg-green-800">
        Download CV <span className="ml-2">📥</span>
      </Button>
    </div>
  );
};

export default ProfileCard;
