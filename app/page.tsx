import AboutMe from "@/components/ui/AboutMe";
import Header from "@/components/ui/Header";
import Skills from "@/components/ui/Skills";
import { Intro } from "@/components/ui/Intro";
export default function Home() {
  return (
    <div className="">
      <Header/>
      <Intro/>
      <AboutMe/>
      <Skills/>
    </div>
  );
}
