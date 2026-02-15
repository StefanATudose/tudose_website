// Chat message type
export interface Message {
  id: number;
  text: string;
  sender: "user" | "ai";
  timestamp: Date;
}

// Project data type
export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
}

// App usage item type (for startup section phone mockup)
export interface AppUsageItem {
  app: string;
  time: string;
  color: string;
}
