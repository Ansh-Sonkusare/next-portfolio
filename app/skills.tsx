import { FunctionComponent, HTMLAttributes } from "react";
import { User } from ".";
import Discord from "@/public/discord.svg";
import Javascript from "@/public/javascript.svg";
import Server from "@/public/server-svgrepo-com.svg";

import Image from "next/image";
interface SkillSetProps extends HTMLAttributes<HTMLDivElement> {}

const SkillSet: FunctionComponent<SkillSetProps> = ({ className }) => {
  const user: Partial<User> = {
    login: "Ansh-Sonkusare",
  };
  return (
    <div
      id="Skills"
      className={" bg-gradient-to-b  from-[#355C7D] to-[#203241] " + className}
    >
      <h1 className="mt-4 text-center font-nohemi text-6xl/[1] font-bold  md:mt-10 md:text-7xl">
        Skill-Set
      </h1>
      <div className="text-md mt-8 grid grid-flow-col gap-6 overflow-auto text-center font-nohemi tracking-wider lg:flex lg:justify-center lg:gap-14">
      <div className="ml-6 flex w-60 h-[85%] py-12 sm:p-8 sm:h-auto   sm:w-72 flex-col items-center justify-center rounded-xl bg-slate-600 bg-opacity-100  ">
          <div className="h-36 w-36 rounded-3xl  bg-[#5865f2] shadow-2xl">
            <Image className="h-36 w-36 " src={Javascript} alt="Image" />
          </div>

          <h1 className="mt-8 text-2xl font-bold">Javascript</h1>
          <p className="text-slate-300 text-sm">
          Focusing on React , UI/UX design with figma and always looking for
            opportunities to learn on the way.
          </p>
        </div>
        <div className=" flex w-60 h-[85%] py-12 sm:p-8 sm:h-auto   sm:w-72 flex-col items-center justify-center rounded-xl bg-slate-600 bg-opacity-100  ">
          <div className="h-36 w-36 rounded-3xl  bg-[#5865f2] shadow-2xl">
            <Image className="h-36 w-36 " src={Discord} alt="Image" />
          </div>

          <h1 className="mt-8 text-2xl font-bold">Discord Bot</h1>
          <p className="text-slate-300 text-sm">
            Making Discord bots is one of my core skills. I can make Discord
            bots using Discord.Js. Eg: General Purpose and Music Bots
          </p>
        </div>
        <div className="mr-6 flex w-60 h-[85%] py-12 sm:p-8 sm:h-auto   sm:w-72 flex-col items-center justify-center rounded-xl bg-slate-600 bg-opacity-100   Mini-Pc:mr-0">
          <div className="h-36 w-36 rounded-3xl bg-slate-800 shadow-2xl">
            <Image
              className="h-36 w-36 fill-slate-200 p-3"
              src={Server}
              alt="Image"
            />
          </div>

          <h1 className="mt-8 text-2xl font-bold">Back-End</h1>
          <p className="text-slate-300 text-sm">With 
            Node.JS , Express.JS and Next.JS in my 
            repertoire , I can very well write Back-End code of any kind
          </p>
        </div>
      </div>
    </div>
  );
};

export default SkillSet;
