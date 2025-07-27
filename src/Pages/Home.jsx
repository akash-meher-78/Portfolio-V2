import Contact from "../components/Contact";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import ProjectSection from "../components/ProjectSection";
import SkillSection from "../components/SkillSection";

function Home() {
  return (
    <div className="min-h-screen">
        <Navbar/>
        <main>
          <HeroSection/>
          <SkillSection/>
          <ProjectSection/>
          <Contact/>
          <Footer/>
        </main>
    </div>
  )
}

export default Home;