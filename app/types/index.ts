// Project data type
export interface Project {
  id: number;
  title: string;
  subtitle?: string;
  description: string;
  tags: string[];
  image: string;
  link?: string;
  isInternal?: boolean;
}

// App usage item type (for startup section phone mockup)
export interface AppUsageItem {
  app: string;
  time: string;
  color: string;
}
