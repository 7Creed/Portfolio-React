// import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaDocker,
  FaBootstrap,
  FaNodeJs,
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";

const skills = [
  { id: 1, skill: "HTML", icon: FaHtml5, color: "#EAD41D", level: 90 },
  { id: 2, skill: "CSS", icon: FaCss3Alt, color: "#3C7BE8", level: 85 },
  { id: 3, skill: "JavaScript", icon: FaJs, color: "#EAD41D", level: 80 },
  { id: 4, skill: "REACTJS", icon: FaReact, color: "#619756", level: 75 },
  { id: 5, skill: "GIT", icon: FaGitAlt, color: "#E44D30", level: 85 },
  { id: 6, skill: "Docker", icon: FaDocker, color: "#EAD41D", level: 45 },
  {
    id: 7,
    skill: "BOOTSTRAP",
    icon: FaBootstrap,
    color: "#000000",
    level: 95,
  },
  {
    id: 8,
    skill: "TAILWIND",
    icon: SiTailwindcss,
    color: "#17ACB0",
    level: 98,
  },
  {
    id: 9,
    skill: "NEXTJS",
    icon: RiNextjsFill,
    color: "#7711ED",
    level: 98,
  },
  { id: 10, skill: "NODEJS", icon: FaNodeJs, color: "#000000", level: 98 },
  // { id: 11, skill: "NEXTJS", icon: "", color: "#000000", level: 98 },
];

// { id: 9, skill: 'NODEJS', color: '#619756', icon: FaNodeJs, percentage: 65 },
// { id: 10, skill: 'GIT', color: '#E44D30', icon: BsGit, percentage: 80 },
// {
//   id: 12,
//   skill: 'NICEPAGE',
//   color: '#3C7BE8',
//   icon: FaPager,
//   percentage: 85,
// },

const SkillList = () => {
  return (
    <ul className="text-gray-100 space-y-3 py-3 border-b border-gray-500">
      {skills.map((skillItem) => {
        const { id, skill, icon: Icon, color, level } = skillItem;
        // const Iconkk = icon;
        // console.log(typeof skill);

        return (
          <li key={id}>
            <div className="flex justify-between items-center text-[14px]">
              <h6 className="capitalize">{skill.toLowerCase()}</h6>
              <Icon size={30} color={color} />
              {/* {icon} */}
              {/* <IconIcon style={{ color: color }} /> */}
            </div>
            <div className="bg-gray-800 w-full h-1 mt-1">
              <div
                className="bg-green-400 h-full"
                style={{ width: `${level}%` }}
              ></div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default SkillList;
