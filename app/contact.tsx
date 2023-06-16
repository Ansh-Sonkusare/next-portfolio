import GitHubCard from "@/components/GitCard";
import { getData } from "@/lib/data";
import { HTMLAttributes, use } from "react";

import Button from "@/components/Button";

interface ContactProps extends HTMLAttributes<HTMLDivElement> {}

const Contact = ({ className }: ContactProps) => {
 

  return (
    <div className={" bg-[#203241]  " + className}>
      <div className="flex  flex-col  items-center justify-between md:flex-row lg:flex-row mx-24 xl:mx-24 Pc:mx-96  ">
        <div className="w-96 ">
        <h1 className="hidden   text-2xl font-semibold md:inline md:text-[90px]/[100%]   Mini-Pc:mr-64 Pc:text-[140px]/[100%] ">
          Let&apos;s get in touch
        </h1>
</div>
        <div className=" sm:mx-8 ml-0 flex w-[350px] sm:w-[400px] px-0 flex-col items-center justify-center rounded-3xl bg-[#1C1D21] Pc:w-[400px] Pc:px-60">
          <h1 className="p-8 text-center  text-5xl   font-semibold">
            Send a Message
          </h1>
          <input
            type="text"
            placeholder="Name"
            className="my-6 w-[280px] border-b-2 border-slate-400 bg-transparent py-1 text-white placeholder-white outline-none md:w-72 lg:w-80"
          />
          <input
            type="text"
            placeholder="Name"
            className="my-6 w-[280px] border-b-2 border-slate-400 bg-transparent py-1 text-white placeholder-white outline-none md:w-72 lg:w-80"
          />
          <input
            type="text"
            placeholder="Name"
            className="my-6 w-[280px] border-b-2 border-slate-400 bg-transparent py-1 text-white placeholder-white outline-none md:w-72 lg:w-80"
          />

          <Button className="m-8 mt-8 p-2 text-xl  font-medium">
            Contact Me
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Contact;
