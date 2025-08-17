export interface Skill {
  name: string;
  level: number;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
}