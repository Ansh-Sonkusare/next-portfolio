import Hero from "./Hero";

import About from "./about";
import Contact from "./contact";
import SkillSet from "./skills";

export default async function Home() {
  return (
    <>
      <Hero />
      <About className="pt-20 md:pt-60 " />
      <SkillSet className="pt-20 md:pt-48" />
      <Contact className="pt-20 xl:pt-60" />
    </>
  );
}
