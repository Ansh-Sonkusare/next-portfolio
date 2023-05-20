import Button from "@/components/Button";
import X from "@/components/github-card"


export default function About() {
  return (
    <>
      <div className="mx-48 mt-48 flex  flex-row items-center justify-between space-x-96 ">
        <div className="w-[480px] ">
          <div id="details " className="mb-12  flex flex-row items-center ">
            <p className="font-nohemi text-base "> About Me </p>
            <div className=" ml-5 flex h-2 w-24 bg-secondary blur-sm"></div>
          </div>
          <h1 className="mb-8 text-6xl font-bold">Developer</h1>
          <p className="font-nohemi text-xl/tight tracking-normal">
            {" "}
            Lorem ipsum dolor sit amet consectetur. Cursus arcu ac cras donec
            vel. Elementum justo augue diam malesuada odio. Turpis elit cras
            sollicitudin morbi vestibulum posuere. Faucibus suspendisse sed
            porttitor non amet odio enim volutpat. Amet nunc sem ac erat
            pellentesque ac vitae. Quam est eu nascetur neque morbi in. Enim
            nulla varius etiam nec arcu adipiscing. Maecenas eget quis eros sed
            consectetur. Volutpat et ac nisl in elementum facilisis facilisis.
          </p>
          <Button>See Github</Button>
        </div>
        <X></X>
      </div>
    </>
  );
}
