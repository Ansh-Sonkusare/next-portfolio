import Button from "@/components/Button"

export default function Hero() {

  return (
    <div id="Hero-Section" className="items-center justify-center  flex flex-col "> 



      <div className="md:w-[700px] w-[370px]">
        <div className='items-center justify-center  flex flex-col p-4  '>


          <div className="w-44 h-44 bg-slate-300 rounded-full mt-8 md:mt-16"></div>
          <p className='p-4  text-base tracking-wider text-slate-100 font-light'>Hello, ✌</p>


          <pre className='text-center font-nohemi mt-4 md:mt-10 font-medium  text-6xl/[1] md:text-7xl/[100%]'>I Am <br />
            Ansh Sonkusare
          </pre>


          <p className='w-auto mt-1 text-base text-center font-normal '>A tech enthusiast , Web developer , Designer and fond of turning ideas into reality with the power of code</p>

          <div>
            <Button className="p-3 mt-8 text-2xl  font-black">Contact Me</Button>
          
          </div>
        </div>
      </div>





    </div>
  )
}