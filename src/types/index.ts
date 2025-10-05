export interface Project {
  id: string;
  title: string;
  description: string;
  stack: readonly string[];
  imageUrl: string;
  repoUrl?: string;
  liveUrl?: string;
  role?: string;
  challenge?: string;
  solution?: string;
  impact?: string;
}