import { HeroSection, TechVectorSection, GymSection, KaizenSection, Footer } from "@/app/components/sections";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />

      {/* 1. What I can build: Custom AI & RAG */}
      <TechVectorSection />

      {/* 2. Experience in delivery: High-stakes operational software */}
      <GymSection />

      {/* 3. Entrepreneurial background: Talking Strategy & ROI */}
      <KaizenSection />

      <Footer />
    </div>
  );
}
