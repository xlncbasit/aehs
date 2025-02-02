export interface NavItem {
  title: string;
  href: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  description: string;
  time: string;
  location: string;
}

export interface Announcement {
  id: string;
  title: string;
  date: string;
  content: string;
  category: string;
}

export interface Program {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  icon: React.ComponentType<{ className?: string }>;
  features: string[];
}