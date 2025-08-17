"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const technologies = [
  { name: "TYPESCRIPT", icon: "/tech/typescript.svg" },
  { name: "REACT JS", icon: "/tech/react.svg" },
  { name: "EXPRESS JS", icon: "/tech/express.svg" },
  { name: "NODE JS", icon: "/tech/nodejs.svg" },
  { name: "NEXT JS", icon: "/tech/nextjs.svg" },
  { name: "TAILWIND CSS", icon: "/tech/tailwind.svg" },
  { name: "SHADCN UI", icon: "/tech/shadcn.svg" },
  { name: "FRAMER MOTION", icon: "/tech/framer.svg" },
  { name: "ZUSTAND", icon: "/tech/zustand.svg" },
  { name: "PRISMA", icon: "/tech/prisma.svg" },
  { name: "POSTGRESQL", icon: "/tech/postgres.svg" },
  { name: "TANSTACK QUERY", icon: "/tech/tanstack.svg" },
  { name: "ZOD", icon: "/tech/zod.svg" },
  { name: "SOCKET IO", icon: "/tech/socketio.svg" },
  { name: "NEXT AUTH", icon: "/tech/nextauth.svg" },
  { name: "DOCKER", icon: "/tech/docker.svg" },
  { name: "REDIS", icon: "/tech/redis.svg" },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const TechStack = () => {
  return (
    <section
      id="skills"
      className="bg-black text-white relative overflow-hidden py-10"
    >
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">
          TECH <span className="text-blue-500">STACK</span>
          <div className="w-24 h-1 bg-blue-500 mx-auto mt-2 rounded-full"></div>
        </h2>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-3 px-2 py-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-center"
        >
          {technologies.map((tech) => (
           <div>
             <motion.div
              key={tech.name}
              variants={item}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="flex flex-col items-center p-4 bg-neutral-900 rounded-xl shadow-md cursor-pointer"
            >
              <div className="w-10 h-10 mb-3 relative">
                <Image
                  src={tech.icon}
                  alt={tech.name}
                  fill
                  className="object-contain"
                />
              </div>
            </motion.div>
            <p className="text-sm font-semibold mt-1">{tech.name}</p>
           </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
