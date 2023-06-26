"use client";

import Swal from "sweetalert2";
import { HTMLAttributes, useRef } from "react";

import Button from "@/components/Button";

interface ContactProps extends HTMLAttributes<HTMLDivElement> {}

const Contact = ({ className }: ContactProps) => {
  const forms = useRef<HTMLFormElement>(null);

  const sub = () => {
    Swal.fire({
      title: "Sucess",
      text: "Your Message has been sent",
      icon: "success",
      confirmButtonText: "Cool",
    });
    if (forms.current) {
      const data = new FormData(forms.current);
      fetch("api/test/", { method: "POST", body: data })

    }

    setTimeout(() => forms.current?.reset(), 400);
  };

  return (
    <div id="Contact" className={" bg-[#203241]  " + className}>
      <div className="mx-24  flex  flex-col items-center justify-center gap-[30%] md:flex-row md:gap-2  lg:gap-[20%] xl:mx-24 Pc:mx-96  ">
        <div className="w-96 ">
          <h1 className="hidden   text-2xl font-semibold md:inline  md:text-[90px]/[100%]  lg:text-[100px] xl:text-[140px]/[100%]">
            Let&apos;s get in touch
          </h1>
        </div>
        <div className=" ml-0 flex w-[310px] flex-col items-center justify-center rounded-3xl bg-[#1C1D21] px-0 low-mob:w-[350px] sm:mx-0 sm:w-[400px] sm:px-8 Pc:w-[50$] Pc:px-24">
          <h1 className=" p-8 text-center  text-5xl   font-semibold">
            Send a Message
          </h1>
          <form
            className="flex flex-col items-center justify-center "
            ref={forms}
          >
            <input
              name="name"
              type="text"
              placeholder="Name"
              className="border-b-2bg-transparent m-3  w-full border-slate-400 py-1 text-white placeholder-slate-400 outline-none low-mob:my-6 md:w-72 lg:w-80"
            />
            <input
              name="email"
              type="email"
              placeholder="Email"
              className="m-3 w-full border-b-2 border-slate-400 bg-transparent py-1 text-white placeholder-slate-400 outline-none low-mob:my-6 md:w-72 lg:w-80"
            />
            <input
              name="message"
              type="text"
              placeholder="Message"
              className="m-3 w-full border-b-2 border-slate-400 bg-transparent py-1 text-white placeholder-slate-400 outline-none low-mob:my-6 md:w-72 lg:w-80"
            />

            <Button
              onClick={(e) => {
                e.preventDefault();
                sub();
              }}
              className=" m-8 mt-8 p-2  text-xl font-medium low-mob:m-8 low-mob:w-[80%]  Pc:w-[300px]"
            >
              Contact Me
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Contact;
