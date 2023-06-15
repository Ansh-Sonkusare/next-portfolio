import GitHubCard from "@/components/GitCard";
import { getData } from "@/lib/data";
import { HTMLAttributes, use } from "react";

interface AboutProps extends HTMLAttributes<HTMLDivElement> {}

const About = ({ className }: AboutProps) => {
  const user = use(getData("Ansh-Sonkusare"));

  return (
    <div
      className={
        "about bg-gradient-to-t from-[#355C7D] to-[#41436A] " + className
      }
    >
      <div className="flex  flex-col  items-center justify-between  md:flex-row lg:mx-72 lg:flex-row  ">
        <div className="w-96 md:w-[480px] ">
          <div id="details " className="mb-8  flex flex-row items-center ">
            <p className="font-nohemi text-xl "> About Me </p>
            <div className=" ml-5 flex h-3 w-24 bg-secondary blur-sm"></div>
          </div>
          <h1 className="mb-3 text-5xl font-bold">Developer</h1>
          <p className="w-[400px] font-nohemi text-xl/tight tracking-normal">
            Lorem ipsum dolor sit amet consectetur. Cursus arcu ac cras donec
            vel. Elementum justo augue diam malesuada odio. Turpis elit cras
            sollicitudin morbi vestibulum posuere. Faucibus suspendisse sed
            porttitor non amet odio enim volutpat. Amet nunc sem ac erat
            pellentesque ac vitae. Quam est eu nascetur neque morbi in. Enim
            nulla varius etiam nec arcu adipiscing. Maecenas eget quis eros sed
            consectetur. Volutpat et ac nisl in elementum facilisis facilisis.
          </p>
          {/* <Button onClick={() => console.log(123)  } className=' p-3 mt-12 '>See Github</Button> */}
        </div>

        <GitHubCard className="mt-12 md:mt-0" animate user={user} />
      </div>
    </div>
  );
};
export default About;
