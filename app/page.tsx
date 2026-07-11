import { HeroSection, ProjectsSection, StartupSection, Footer } from "@/app/components/sections";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />

      <ProjectsSection />

      <StartupSection />

      <Footer />
    </div>
  );
}
