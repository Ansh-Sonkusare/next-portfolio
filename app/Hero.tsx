import Button from "@/components/Button"

export default function Hero() {

  return (
    <div id="Hero-Section" className="items-center justify-center  flex flex-col "> 



      <div className="md:w-[700px] w-[370px]">
        <div className='items-center justify-center  flex flex-col p-4  '>


          <div className="w-44 h-44 bg-slate-300 rounded-full mt-8 md:mt-16"></div>
          <p className='p-4  text-base tracking-wider text-slate-100 font-light'>Hello, ✌</p>


          <pre className='text-center font-nohemi mt-4 md:mt-12 font-medium  text-[2.5rem]/[1] md:text-8xl/[100%]'>I Am <br />
            Ansh Sonkusare
          </pre>


          <p className='w-auto text-sm  mt-1 text-slate-300 text-center font-medium'>A tech enthusiast , Web developer , Designer and fond of turning ideas into reality with the power of code</p>

          <div>
            <Button>Contact Me</Button>
          
          </div>
        </div>
      </div>





    </div>
  )
}