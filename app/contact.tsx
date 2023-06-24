"use client";


import Swal from 'sweetalert2'
import { HTMLAttributes, useRef } from "react";

import Button from "@/components/Button";
import { addItem } from '@/lib/actions'



interface ContactProps extends HTMLAttributes<HTMLDivElement> {}

const Contact = ({ className }: ContactProps) => {
  console.log(process.env.hookUrl);
  

    const forms = useRef<HTMLFormElement>(null)
    const sub = () =>{
      forms.current?.reset()
      Swal.fire({
      title: 'Sucess',
      text: 'Your Message has been sent',
      icon: 'success',
      confirmButtonText: 'Cool'
    })
    }
  return (
    <div id="Contact" className={" bg-[#203241]  " + className}>
      <div className="flex  flex-col  items-center justify-center gap-[30%] lg:gap-[20%] md:flex-row md:gap-2  mx-24 xl:mx-24 Pc:mx-96  ">
        <div className="w-96 ">
        <h1 className="hidden   text-2xl font-semibold md:inline  xl:text-[140px]/[100%]  md:text-[90px]/[100%] lg:text-[100px]">
          Let&apos;s get in touch
        </h1>
        </div>
        <div className=" sm:mx-0 ml-0 flex w-[310px] low-mob:w-[350px] sm:w-[400px] px-0 sm:px-8 flex-col items-center justify-center rounded-3xl bg-[#1C1D21] Pc:w-[50$] Pc:px-24">
          <h1 className=" p-8 text-center  text-5xl   font-semibold">
            Send a Message
          </h1>
          <form className="flex flex-col items-center justify-center " onSubmit={sub} ref={forms} action={addItem}><input
            name="name"
            type="text"
            placeholder="Name"
            className="low-mob:my-6 m-3 w-full border-b-2 border-slate-400 bg-transparent py-1 text-white placeholder-slate-400 outline-none md:w-72 lg:w-80"
          />
          <input
          name="email"
            type="email"
            placeholder="Email"
            className="low-mob:my-6 m-3 w-full border-b-2 border-slate-400 bg-transparent py-1 text-white placeholder-slate-400 outline-none md:w-72 lg:w-80"
          />
         <input
         name="message"
            type="text"
            placeholder="Message"
            className="low-mob:my-6 m-3 w-full border-b-2 border-slate-400 bg-transparent py-1 text-white placeholder-slate-400 outline-none md:w-72 lg:w-80"
          />

          <Button className=" low-mob:m-8 m-8 mt-8  Pc:w-[300px] low-mob:w-[80%] p-2 text-xl  font-medium" >
            Contact Me
          </Button>
         
 
          </form>
      
      
        </div>
      </div>
      
    </div>
  );
};
export default Contact;
