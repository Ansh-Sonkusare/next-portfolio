import Hero from "./Hero";

import About from "./about";
import Contact from "./contact";
import SkillSet from "./skills";

export default async function Home() {
  return (
    <>
      <Hero />
      <About className="pt-20 md:pt-56 " />
      <SkillSet className="pt-20 md:pt-32" />
      <Contact className="pt-20 xl:pt-48 pb-10" />
    </>
  );
}
