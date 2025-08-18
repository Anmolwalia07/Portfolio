import mongoose from "mongoose";

interface Technology {
  name: string;
}

interface Project {
  title: string;
  imageUrl: string;
  description: string;
  technologies: Technology[];
  liveLink:string;
  gitHubLink:string;
}

interface Skill {
  name: string;
  icon: string;
}

export interface IUser extends Document {
  name: string;
  email: string;
  skills: Skill[];
  projects: Project[];
}

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  skills: [{ type: mongoose.Schema.Types.ObjectId, ref: "Skills" }],
  projects: [{ type: mongoose.Schema.Types.ObjectId, ref: "Project" }],
}, { timestamps: true });

export const User =
  mongoose.models.User || mongoose.model("User", userSchema);

const skillsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }
}, { timestamps: true });

export const Skills =
  mongoose.models.Skills || mongoose.model("Skills", skillsSchema);

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  technologies: [{ type: mongoose.Schema.Types.ObjectId, ref: "Technologies" }],
  liveLink: { type: String },
  gitHubLink: { type: String ,required:true},
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }
}, { timestamps: true });

export const Project =
  mongoose.models.Project || mongoose.model("Project", projectSchema);

const technologiesSchema = new mongoose.Schema({
  name: { type: String, required: true },
  projectId: { type: mongoose.Schema.Types.ObjectId, ref: "Project", required: true }
}, { timestamps: true });

export const Technologies =
  mongoose.models.Technologies || mongoose.model("Technologies", technologiesSchema);