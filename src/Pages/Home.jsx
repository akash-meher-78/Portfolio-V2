import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import ThemeToggle from "../components/ThemeToggle";

function Home() {
  return (
    <div className="min-h-screen">
        <ThemeToggle/>
        {/* Navbar */}
        <Navbar/>
        {/* Main Content */}
        <main>
          <HeroSection/>
        </main>
        {/* Footer */}
    </div>
  )
}

export default Home;