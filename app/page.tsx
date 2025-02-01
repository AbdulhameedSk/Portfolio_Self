import AboutMe from "@/components/ui/AboutMe";
import Header from "@/components/ui/Header";
import Skills from "@/components/ui/Skills";
import { Intro } from "@/components/ui/Intro";
import { Education } from "@/components/ui/Education";
import Experience from "@/components/ui/Experience";
import Projects from "@/components/ui/Projects";
import Footer from "@/components/ui/Footer";
export default function Home() {
  return (
    <div className="">
      <Header/>
      <Intro/>
      <AboutMe/>
      <Skills/>
      <Education/>
      <Experience/>
      <Projects/>
      <Footer/>
    </div>
  );
}
