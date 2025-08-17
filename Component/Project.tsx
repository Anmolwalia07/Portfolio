import { Project } from "./types";

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "Full-featured online shopping platform with payment integration",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    imageUrl: "/project1.jpg",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Collaborative task management system with real-time updates",
    technologies: ["Next.js", "Firebase", "Tailwind CSS"],
    imageUrl: "/project2.jpg",
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "Real-time weather visualization with forecasting",
    technologies: ["React", "Chart.js", "Weather API"],
    imageUrl: "/project3.jpg",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 bg-black text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <h2 className="text-4xl font-bold text-center mb-12">
          PRO<span className="text-blue-500">JECTS</span>
          <div className="w-24 h-1 bg-blue-500 mx-auto mt-2 rounded-full"></div>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-neutral-900 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition transform"
            >
              <div className="w-full h-48 bg-gray-800 flex items-center justify-center text-gray-500">
                <span>Project Image</span>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.splice(0,4).map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex space-x-4">
                  <button className="text-blue-400 hover:text-blue-300 font-medium">
                    View Demo
                  </button>
                  <button className="text-gray-400 hover:text-gray-300 font-medium">
                    Source Code
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
