import Navbar from "../components/Navbar";
import ThemeToggle from "../components/ThemeToggle";

function Home() {
  return (
    <div className="min-h-screen">
        <ThemeToggle/>
        {/* Navbar */}
        <Navbar/>
        {/* Main Content */}
        {/* Footer */}
    </div>
  )
}

export default Home;