import Button from "@/components/Button";
import GitHubCard from "@/components/GitCard";
import { getData } from "@/lib/data";
import { HTMLAttributes, use } from "react";

interface AboutProps extends HTMLAttributes<HTMLDivElement> {}

const About = ({ className }: AboutProps) => {
  const user = use(getData("Ansh-Sonkusare"));

  return (
    <div
      id="About"
      className={
        "about bg-gradient-to-t from-[#355C7D] to-[#41436A] " + className
      }
    >
      <div className="ml-6 mx-0  flex flex-col  items-start justify-center md:flex-row lg:flex-row  xl:gap-[20%]  ">
        <div className=" md:w-[480px] w-[90%]">
          <div id="details " className="mb-8  flex flex-row items-center ">
            <p className="font-nohemi text-xl "> About Me </p>
            <div className=" ml-5 flex h-3 w-24 bg-secondary blur-sm"></div>
          </div>
          <h1 className="mb-4 text-5xl font-bold">Developer</h1>
          <p className="relative  font-nohemi text-xl/tight tracking-normal md:w-[340px]">
            A talented 16-year-old Full-Stack Developer with a remarkable
            three-year journey in web development. Alongside this impressive
            feat, I have dedicated the past year to immersing myself in the
            captivating world of AI & ML. While my current portfolio may not be
            extensive, my relentless commitment to self-improvement is evident
            as I consistently strive to refine my skills and broaden my horizons
            in these dynamic fields.
          </p>
          <a className="md:hidden" href= "https://github.com/Ansh-Sonkusare/next-portfolio"> <Button  className=" mt-8 p-3  "> See Github</Button></a>
       
        </div>

        <GitHubCard
          className="mt-12 hidden md:mt-0 md:block"
          animate
          user={user}
        />
      </div>
    </div>
  );
};
export default About;
