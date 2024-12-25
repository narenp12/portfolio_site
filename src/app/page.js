import AboutSection from "./components/AboutSection";
import Blog from "./components/Blog";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

export default function Home() {
  return (
      <main className="flex min-h-screen flex-col bg-black">
        <Navbar />
        <div className = "container mt-24 mx-auto px-12 py-4">
          <HeroSection />
          <AboutSection />
          <Projects />
          <Blog />
        </div>
        
      </main>
  );
}
