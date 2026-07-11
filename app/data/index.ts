import { Project, AppUsageItem } from "@/app/types";

// Project data with humble, empathetic, and clear copywriting
export const projects: Project[] = [
  {
    id: 1,
    title: "TechVector",
    subtitle: "AI-Powered Research & Retrieval Engine",
    description: "Built to show the practical value of custom AI in daily business operations. Combining PostgreSQL, pgvector, and LangChain agentic workflows, it converts a massive archive of technology articles into an interactive search engine, demonstrating how RAG systems can automate research and save hours of manual searching.",
    tags: ["RAG", "LangChain", "pgvector", "OpenRouter"],
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
    link: "https://techvector.stefantudose.com",
    isInternal: false
  },
  {
    id: 2,
    title: "Florin Gold Gym",
    subtitle: "Next.js Dashboard & Mobile App Suite",
    description: "A complete software suite that runs a high-traffic gym of 500+ members. The system handles turnstile check-ins via dynamic QR codes, trainer session bookings, and Netopia MobilPay subscriptions. The entire business is fully dependent on this code to run day-to-day operations without interruption.",
    tags: ["Next.js", "Flutter", "Firebase", "Netopia Pay"],
    image: "https://images.unsplash.com/photo-1553875933-6b3b5b3b7b5c?w=600&h=400&fit=crop",
    link: "/florin-gold-gym",
    isInternal: true
  },
  {
    id: 3,
    title: "Kaizen",
    subtitle: "Bypass-Proof Distraction Blocker",
    description: "An Android digital wellness app designed to make bypassing restrictions nearly impossible. Operates at the system level with custom whitelists, wait periods, and accountability partner consents. My first startup—it was a technical success but failed commercially, teaching me invaluable business lessons about product-market fit.",
    tags: ["Android (Kotlin)", "System APIs", "UX Psychology", "Business Lessons"],
    image: "https://images.unsplash.com/photo-1576091160399-6b1baa36d7b0?w=600&h=400&fit=crop",
    link: "https://kaizen.stefantudose.com",
    isInternal: false
  }
];

// App usage data for Kaizen distraction blocker mockup showing digital health
export const appUsageData: AppUsageItem[] = [
  { app: "Blocked Socials", time: "0m", color: "bg-red-500" },
  { app: "Focus / Work", time: "3h 40m", color: "bg-emerald-500" },
  { app: "Blocked Games", time: "0m", color: "bg-orange-500" },
];
