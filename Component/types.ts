export interface Technology {
  _id: string;
  name: string;
  projectId: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface Project {
  _id: string;
  title: string;
  description: string;
  technologies: Technology[];
  imageUrl: string;
  gitHubLink: string;
  liveLink: string;
}
export interface Skill {
  name: string;
  level: number;
}

