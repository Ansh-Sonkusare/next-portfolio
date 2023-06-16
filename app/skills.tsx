import { FunctionComponent, HTMLAttributes } from "react";
import { User } from ".";

interface SkillSetProps extends HTMLAttributes<HTMLDivElement> {}

const SkillSet: FunctionComponent<SkillSetProps> = ({ className }) => {
  const user: Partial<User> = {
    login: "Ansh-Sonkusare",
  };
  return (
    <div
      id="Skill-Section"
      className={" bg-gradient-to-b  from-[#355C7D] to-[#203241] " + className}
    >
      <h1 className="mt-4 text-center font-nohemi text-6xl/[1] font-bold  md:mt-10 md:text-7xl">
        Skill-Set
      </h1>
      {/* <div className="mt-20 flex flex-row justify-between space-x-24  text-center">
        <div className=" flex w-80 flex-col items-center justify-center rounded-xl bg-slate-600 bg-opacity-100  p-8">
          <div className="h-36 w-36 rounded-full bg-slate-300 "></div>
          <p className="mt-8">
            Lorem ipsum dolor sit amet consectetur. Cursus arcu ac cras donec
            vel. Elementum justo augue diam malesuada odio. Turpis elit cras
            sollicitudin morbi vestibulum posuere.
          </p>
        </div>
        <div className=" flex w-80 flex-col items-center justify-center rounded-xl bg-slate-600 bg-opacity-100 p-8">
          <div className="h-36 w-36 rounded-full bg-slate-300 "></div>
          <p className="mt-8">
            Lorem ipsum dolor sit amet consectetur. Cursus arcu ac cras donec
            vel. Elementum justo augue diam malesuada odio. Turpis elit cras
            sollicitudin morbi vestibulum posuere.
          </p>
        </div>
        <div className=" flex w-80 flex-col items-center justify-center rounded-xl bg-slate-600 bg-opacity-100 p-8">
          <div className="h-36 w-36 rounded-full bg-slate-300 "></div>
          <p className="mt-8">
            Lorem ipsum dolor sit amet consectetur. Cursus arcu ac cras donec
            vel. Elementum justo augue diam malesuada odio. Turpis elit cras
            sollicitudin morbi vestibulum posuere.
          </p>
        </div>
      </div> */}
      <div className="grid grid-flow-col gap-4 overflow-auto lg:flex lg:justify-center lg:gap-14">
        <div className=" flex w-80 flex-col items-center justify-center rounded-xl bg-slate-600 bg-opacity-100  p-8">
          <div className="h-36 w-36 rounded-full bg-slate-300 "></div>
          <p className="mt-8">
            Lorem ipsum dolor sit amet consectetur. Cursus arcu ac cras donec
            vel. Elementum justo augue diam malesuada odio. Turpis elit cras
            sollicitudin morbi vestibulum posuere.
          </p>
        </div>{" "}
        <div className=" flex w-80 flex-col items-center justify-center rounded-xl bg-slate-600 bg-opacity-100  p-8">
          <div className="h-36 w-36 rounded-full bg-slate-300 "></div>
          <p className="mt-8">
            Lorem ipsum dolor sit amet consectetur. Cursus arcu ac cras donec
            vel. Elementum justo augue diam malesuada odio. Turpis elit cras
            sollicitudin morbi vestibulum posuere.
          </p>
        </div>{" "}
        <div className=" flex w-80 flex-col items-center justify-center rounded-xl bg-slate-600 bg-opacity-100  p-8">
          <div className="h-36 w-36 rounded-full bg-slate-300 "></div>
          <p className="mt-8">
            Lorem ipsum dolor sit amet consectetur. Cursus arcu ac cras donec
            vel. Elementum justo augue diam malesuada odio. Turpis elit cras
            sollicitudin morbi vestibulum posuere.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SkillSet;
