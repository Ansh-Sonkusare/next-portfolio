export default function About() {
  return (
    <>
      <div className="items-center justify-between mx-56  flex flex-row space-x-96 mt-24 ">
        <div
          id="details "
          className="flex flex-row w-[800px] justify-center align-middle items-center"
        >
          <p className="font-nohemi text-base"> About Me </p>
          <div className=" flex w-24 blur-sm h-2 ml-4 bg-secondary"></div>
        </div>

        <div id="details " className="w-96 p-16  bg-secondary h-96">
          <h1 className="font-nohemi text-base"> About Me</h1>
        </div>
      </div>
    </>
  );
}
