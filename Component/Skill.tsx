"use client";
import { motion } from "framer-motion";
import { useUserContext } from "@/app/Context";
import Image from "next/image";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const TechStack = () => {
  const ctx = useUserContext();
  const skills = ctx.user?.skills;

  return (
    <section id="skills" className="bg-black text-white relative overflow-hidden py-10 flex justify-center">
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
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-12 px-2 max-w-3xl text-center"
        >
          {!skills ? (
            [...Array(10)].map((_, i) => (
              <div
                key={i}
                className="flex flex-col items-center w-full p-6 bg-neutral-900 rounded-xl shadow-md cursor-pointer animate-pulse"
              >
                <div className="w-20 h-20 bg-gray-700 rounded-full mb-2"></div>
                <div className="h-4 w-20 bg-gray-600 rounded"></div>
              </div>
            ))
          ) : skills.length === 0 ? (
            <div className="col-span-full text-center text-gray-400">No skills available.</div>
          ) : (
            skills.map((tech) => (
              <motion.div
                key={tech._id}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="flex flex-col items-center w-full"
              >
                <div className="w-20 h-20 p-4 bg-neutral-900 rounded-xl shadow-md flex items-center justify-center">
                  <Image
                    src={`/${tech.name.toLowerCase()}.png`}
                    alt={tech.name}
                    width={50}
                    height={50}
                    className="object-contain"
                  />
                </div>
                <p className="text-sm font-semibold mt-2">{tech.name}</p>
              </motion.div>
            ))
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
