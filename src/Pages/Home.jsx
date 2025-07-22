import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import ProjectSection from "../components/ProjectSection";
import SkillSection from "../components/SkillSection";

function Home() {
  return (
    <div className="min-h-screen">
        <Navbar/>
        {/* Main Content */}
        <main>
          <HeroSection/>
          <SkillSection/>
          <ProjectSection/>
        </main>
        {/* Footer */}
    </div>
  )
}

export default Home;