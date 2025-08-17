"use client";
import { motion } from "framer-motion";

const sentence = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 1, 
      staggerChildren: 0.05,
    },
  },
};

const letter = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

export default function Hero() {
  const text = "I am a FullStack Developer";

  return (
    <div
      id="home"
      className="relative py-5 mb-5 flex px-2 flex-col items-center justify-center text-center bg-black text-white overflow-hidden"
    >
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-40"></div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="z-10 mt-16"
      >
        {/* Avatar */}
        <div className="flex justify-center mb-4">
          <img
            src="https://www.viraj20.tech/_next/image?url=%2Fmemoji-computer.png&w=640&q=75"
            alt="Avatar"
            width={250}
            height={250}
            className="drop-shadow-lg"
          />
        </div>

        <h1 className="text-4xl sm:text-5xl font-bold">
          Hey I’m <span className="text-blue-500">Anmol Deep</span>
        </h1>

        <motion.p
          className="mt-4 text-xl text-gray-300"
          variants={sentence}
          initial="hidden"
          animate="visible"
        >
          {text.split("").map((char, index) => (
            <motion.span
              key={index}
              variants={letter}
              className={char === "F" ? "font-semibold text-white" : ""}
            >
              {char}
            </motion.span>
          ))}
        </motion.p>

        {/* Resume Button */}
        <div className="mt-6">
          <a
            href="https://drive.google.com/file/d/1t9HhO6Zmx_ZPACpUr3jKExJTk-ok8aqY/view?usp=sharing"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold shadow-md transition"
          >
            📄 Resume
          </a>
        </div>
      </motion.div>
    </div>
  );
}
