import GitHubCard from "@/components/GitCard";
import { getData } from "@/lib/data";
import { HTMLAttributes, use } from "react";

import Button from "@/components/Button";

interface ContactProps extends HTMLAttributes<HTMLDivElement> {}

const Contact = ({ className }: ContactProps) => {
  const user = use(getData("fireship-io"));

  return (
    <div id="Contact" className={" bg-[#203241]  " + className}>
      <div className="flex  flex-col  items-center justify-center gap-[30%] lg:gap-[20%] md:flex-row md:gap-2  mx-24 xl:mx-24 Pc:mx-96  ">
        <div className="w-96 ">
        <h1 className="hidden   text-2xl font-semibold md:inline  xl:text-[140px]/[100%]  md:text-[90px]/[100%] lg:text-[100px]">
          Let&apos;s get in touch
        </h1>
        </div>
        <div className=" sm:mx-0 ml-0 flex w-[310px] low-mob:w-[350px] sm:w-[400px] px-0 sm:px-8 flex-col items-center justify-center rounded-3xl bg-[#1C1D21] Pc:w-[50$] Pc:px-24">
          <h1 className="p-8 text-center  text-5xl   font-semibold">
            Send a Message
          </h1>
          <input
            type="text"
            placeholder="Name"
            className="low-mob:my-6 m-3 w-[80%] border-b-2 border-slate-400 bg-transparent py-1 text-white placeholder-white outline-none md:w-72 lg:w-80"
          />
          <input
            type="text"
            placeholder="Name"
            className="low-mob:my-6 m-3 w-[80%] border-b-2 border-slate-400 bg-transparent py-1 text-white placeholder-white outline-none md:w-72 lg:w-80"
          />
          <input
            type="text"
            placeholder="Name"
            className="low-mob:my-6 m-3 w-[80%] border-b-2 border-slate-400 bg-transparent py-1 text-white placeholder-white outline-none md:w-72 lg:w-80"
          />

          <Button className=" low-mob:m-8 m-8 mt-8  Pc:w-[300px] low-mob:w-[80%] p-2 text-xl  font-medium">
            Contact Me
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Contact;
