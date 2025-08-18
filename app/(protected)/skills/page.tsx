"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SkillsPage() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const router=useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name) {
      setMessage("⚠️ Please enter a skill name and choose an image.");
      return;
    }


    try {
      const res = await axios.post('/api/skills',{name})

      if (!res.status) throw new Error("Upload failed")

      setMessage(`Skill "${res.data.name}" uploaded successfully!`);
      setName("");
    } catch (err: any) {
      setMessage(` Error: ${err.message}`);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white p-6">
      <div className="bg-zinc-900 shadow-xl rounded-xl p-8 w-full max-w-md border border-zinc-700">
        <h1 className="text-2xl font-bold mb-6 text-center text-white">
          Add Skill
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-300">
              Skill Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-zinc-800 border border-zinc-600 text-white p-2 rounded-md focus:ring focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter skill name"
            />
          </div>
          <div>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
          >
            Add Skill
          </button>
        </form>

        <p
        onClick={()=>{
          router.push('/project')
        }}
            className="w-full text-blue-600 mt-2"
          >
            want to add project
          </p>

        {message && (
          <p className="mt-4 text-center text-sm font-medium text-gray-300">
            {message}
          </p>
        )}
      </div>
    </div>
  );
}
