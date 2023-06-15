import GitHubCard from "@/components/GitCard";
import { getData } from "@/lib/data";
import { HTMLAttributes, use } from "react";

import Button from "@/components/Button";

interface ContactProps extends HTMLAttributes<HTMLDivElement> {}

const Contact = ({ className }: ContactProps) => {
  const user = use(getData("fireship-io"));

  return (
    <div className={"about bg-[#203241]  " + className}>
      <div className="flex  flex-col  items-center justify-between pb-40 md:flex-row lg:mx-96 lg:flex-row  ">
        <h1 className="w-[600px]  text-[140px]/[100%] font-semibold ">
          Let's get in touch
        </h1>

        <div className="flex w-[480px] flex-col items-center justify-center rounded-3xl bg-[#1C1D21]">
          <h1 className="p-8 text-center  text-5xl  font-semibold">
            Send a Message
          </h1>
            <input type="text" placeholder="Name" className="bg-transparent border-b-2 py-1 my-6  border-slate-400 w-96 text-white outline-none placeholder-white"/>
            <input type="text" placeholder="Name" className="bg-transparent border-b-2 py-1 my-6 border-slate-400 w-96 text-white outline-none placeholder-white"/>
            <input type="text" placeholder="Name" className="bg-transparent border-b-2 py-1 my-6 border-slate-400 w-96 text-white outline-none placeholder-white"/>
            
          <Button className="m-8 mt-8 p-2 text-xl  font-medium">
            Contact Me
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Contact;
