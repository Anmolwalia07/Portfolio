"use client"
import {  useUserContext } from "@/app/Context";

const Projects = () => {
  const ctx =useUserContext();
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
          {!ctx.user?.projects ? (
            [...Array(3)].map((_, i) => (
              <div
                key={i}
                className="bg-black rounded-xl overflow-hidden hover:shadow-lg border border-white hover:border-blue-600 hover:shadow-blue-500 animate-pulse"
              >
                <div className="h-40 w-full bg-gray-700"></div>
                <div className="p-6">
                  <div className="h-6 w-1/2 bg-gray-600 rounded mb-4"></div>
                  <div className="h-4 w-3/4 bg-gray-600 rounded mb-2"></div>
                  <div className="h-4 w-2/4 bg-gray-600 rounded mb-4"></div>
                  <div className="flex gap-2">
                    <div className="h-6 w-16 bg-gray-600 rounded-full"></div>
                    <div className="h-6 w-20 bg-gray-600 rounded-full"></div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            ctx.user.projects.map((project) => (
              <div
                key={project._id}
                className="bg-black rounded-xl overflow-hidden shadow-lg hover:scale-105 transition transform border border-white hover:border-blue-600 hover:shadow-blue-500"
              >
                <h3 className="text-2xl font-bold mb-2 text-white p-2 pl-3">
                  {project.title.split(" ")[0]}
                </h3>
                <div className="w-full h-auto bg-gray-800 flex items-center justify-center text-gray-500">
                  <img
                    src={`/${project.title.split(" ")[0].toLowerCase()}.png`}
                    alt={project.title}
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project?.technologies.map((tech) => (
                      <span
                        key={tech._id}
                        className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech.name}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 mt-4">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      className="text-white p-1 rounded-xl hover:text-blue-300 font-medium bg-blue-500"
                    >
                      View Demo
                    </a>
                    <a
                      href={project.gitHubLink}
                      target="_blank"
                      className="text-gray-400 hover:text-gray-300 font-medium"
                    >
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

      </div>
    </section>
  );
};

export default Projects;
