import { Project, AppUsageItem } from "@/app/types";

// Project data
export const projects: Project[] = [
  {
    id: 1,
    title: "TechVector",
    description: "TBA .",
    tags: ["RAG", "LangChain", "pgvector", "GPT-4"],
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
  },
  {
    id: 2,
    title: "Agent TBA",
    description: "TBA.",
    tags: ["AI Agents", "Function Calling", "WebSocket", "NLP"],
    image: "https://images.unsplash.com/photo-1553875933-6b3b5b3b7b5c?w=600&h=400&fit=crop",
  },
  {
    id: 3,
    title: "Special Outputs TBA",
    description: "Created a HIPAA-compliant medical consultation chatbot that assists patients with symptom analysis and appointment scheduling.",
    tags: ["Healthcare", "Compliance", "Multi-language", "Voice"],
    image: "https://images.unsplash.com/photo-1576091160399-6b1baa36d7b0?w=600&h=400&fit=crop",
  }
];

// Predefined AI responses for demo
export const aiResponses = [
  "Hello! How can I help you today?",
  "That's a great question! I've worked on various AI projects including enterprise RAG systems, customer support agents, and healthcare chatbots. Each project is tailored to the specific business needs.",
  "My approach combines cutting-edge AI technology with practical business solutions. I focus on creating systems that are not just intelligent, but also scalable and maintainable.",
  "For RAG implementations, I typically use a combination of vector databases like Pinecone or Weaviate, along with LangChain for orchestration. The choice depends on your specific requirements.",
  "AI Agents are particularly exciting! They can autonomously perform tasks, make decisions, and interact with external systems. I've built agents for customer support, data analysis, and workflow automation.",
  "I'd be happy to discuss your project in detail. Feel free to reach out through the contact information in the footer, or we can schedule a call to explore how AI can transform your business.",
];

// App usage data for startup section phone mockup
export const appUsageData: AppUsageItem[] = [
  { app: "Social Media", time: "45m", color: "bg-pink-500" },
  { app: "Productivity", time: "1h 20m", color: "bg-green-500" },
  { app: "Entertainment", time: "29m", color: "bg-blue-500" },
];
