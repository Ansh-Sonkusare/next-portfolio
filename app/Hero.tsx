import Button from "@/components/Button";
import Image from "next/image";
import { FunctionComponent, HTMLAttributes } from "react";
interface HeroProps extends HTMLAttributes<HTMLDivElement> {}
import profilePic from "@/public/Pfp.png";
const Hero: FunctionComponent<HeroProps> = ({ className }) => {
  return (
    <div
      id="Hero-Section"
      className={"flex flex-col  items-center justify-center " + className}
    >
      <div className="w-[90%] low-mob:w-[350px] md:w-[700px] ">
        <div className="flex flex-col  items-center justify-center p-4  ">
          <div className="mt-24 h-40 w-40 rounded-full ">
            <Image className="rounded-full" src={profilePic} alt="Picture of the author" />{" "}
          </div>
          <p className="p-4  text-base font-light tracking-wider text-slate-100">
            Hello, ✌
          </p>

          <pre className="mt-4 text-center font-nohemi text-5xl/[1] font-medium  md:mt-10 md:text-7xl/[100%]">
            I Am <br />
            Ansh Sonkusare
          </pre>

          <p className="mt-1 w-auto text-center text-base font-normal ">
            A tech enthusiast , Web developer , Designer and fond of turning
            ideas into reality with the power of code
          </p>

          <div>
            <Button className="mt-8 p-3 text-2xl  font-semibold ">
              Contact Me
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
