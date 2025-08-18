"use client";
import { useState } from "react";

export default function ProjectsPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [techs, setTechs] = useState<string[]>([]);
  const [techInput, setTechInput] = useState("");
  const [liveLink, setLiveLink] = useState("");
  const [gitHubLink, setGitHubLink] = useState("");
  const [message, setMessage] = useState("");

  const handleAddTech = () => {
    if (techInput.trim()) {
      setTechs([...techs, techInput.trim()]);
      setTechInput("");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !description  || !liveLink || !gitHubLink) {
      setMessage("⚠️ Please fill all fields, add links and choose an image");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("liveLink", liveLink);
    formData.append("gitHubLink", gitHubLink);
    techs.forEach((tech) => formData.append("technologies", tech));

    try {
      const res = await fetch("/api/projects", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error("Upload failed");
      const data = await res.json();

      setMessage(`✅ Project "${data.project.title}" uploaded successfully!`);
      setTitle("");
      setDescription("");
      setTechs([]);
      setLiveLink("");
      setGitHubLink("");
    } catch (err) {
      setMessage(`❌ Error: ${err}`);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white p-6">
      <div className="bg-zinc-900 shadow-xl rounded-xl p-8 w-full max-w-md border border-zinc-700">
        <h1 className="text-2xl font-bold mb-6 text-center">Add Project</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Title */}
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-300">
              Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full bg-zinc-800 border border-zinc-600 text-white p-2 rounded-md"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-300">
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full bg-zinc-800 border border-zinc-600 text-white p-2 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-300">
              Live Demo Link
            </label>
            <input
              type="url"
              value={liveLink}
              onChange={(e) => setLiveLink(e.target.value)}
              placeholder="https://yourproject.com"
              className="w-full bg-zinc-800 border border-zinc-600 text-white p-2 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-300">
              GitHub Link
            </label>
            <input
              type="url"
              value={gitHubLink}
              onChange={(e) => setGitHubLink(e.target.value)}
              placeholder="https://github.com/yourrepo"
              className="w-full bg-zinc-800 border border-zinc-600 text-white p-2 rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-gray-300">
              Technologies
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={techInput}
                onChange={(e) => setTechInput(e.target.value)}
                className="flex-1 bg-zinc-800 border border-zinc-600 text-white p-2 rounded-md"
                placeholder="Enter a tech"
              />
              <button
                type="button"
                onClick={handleAddTech}
                className="bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded-md transition"
              >
                Add
              </button>
            </div>
            <ul className="mt-2 flex flex-wrap gap-2">
              {techs.map((t, i) => (
                <li
                  key={i}
                  className="px-2 py-1 bg-zinc-800 border border-zinc-600 rounded-md text-sm text-gray-200"
                >
                  {t}
                </li>
              ))}
            </ul>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
          >
            Add Project
          </button>
        </form>

        {message && (
          <p className="mt-4 text-center text-sm font-medium text-gray-300">
            {message}
          </p>
        )}
      </div>
    </div>
  );
}
