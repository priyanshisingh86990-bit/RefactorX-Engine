import React from "react";
import { useEffect, useState } from "react";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [stats, setStats] = useState({
    totalProjects: 0,
    activeWorkspaces: 0,
    completedProjects: 0,
  });
  
  useEffect(() => {

    const fetchProjects = async () => {

      try {

        const token = localStorage.getItem("token");

        const response = await fetch(
          "http://localhost:3000/api/auth/projects",
          {
            headers: {
              Authorization: token,
            },
          }
        );

        const data = await response.json();

        setProjects(data);

      } catch (error) {

        console.log(error);

      }

    };

    fetchProjects();

  }, []);
  useEffect(() => {

    const fetchProjectStats =
      async () => {

        try {

          const response =
            await fetch(
              "http://localhost:5000/api/dashboard/stats"
            );

          const data =
            await response.json();

          setStats(data.projectStats);

        } catch (error) {

          console.log(error);

        }

      };

    fetchProjectStats();

  }, []);


  return (

    <div className="space-y-8">

      {/* Header */}
      <div className="
        flex
        flex-col
        lg:flex-row
        lg:items-center
        lg:justify-between
        gap-6
      ">

        <div>

          <h1 className="
            text-4xl
            font-bold
            text-white
            mb-3
          ">
            Projects Workspace
          </h1>

          <p className="text-slate-400 text-base max-w-2xl">
            Organize, manage and monitor all your AI-powered
            development workspaces in one place.
          </p>

        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">

          <button className="
            px-6
            py-3
            rounded-2xl
            bg-white/5
            border border-white/10
            text-slate-300
            hover:bg-white/10
            transition-all
          ">
            Import Project
          </button>

          <button className="
            px-6
            py-3
            rounded-2xl
            bg-cyan-500/10
            border border-cyan-400/20
            text-cyan-400
            hover:bg-cyan-500/20
            transition-all
          ">
            New Workspace
          </button>

        </div>

      </div>

      {/* Stats */}
      <div className="
        grid
        md:grid-cols-3
        gap-6
      ">

        {/* Card */}
        <div className="
          rounded-3xl
          border border-white/10
          bg-white/5
          p-6
          backdrop-blur-xl
        ">

          <p className="text-slate-400 mb-3">
            Total Projects
          </p>

          <h2 className="
            text-5xl
            font-bold
            text-white
          ">
            {stats.totalProjects}
          </h2>

        </div>

        {/* Card */}
        <div className="
          rounded-3xl
          border border-cyan-400/10
          bg-cyan-500/5
          p-6
          backdrop-blur-xl
        ">

          <p className="text-slate-400 mb-3">
            Active Workspaces
          </p>

          <h2 className="
            text-5xl
            font-bold
            text-cyan-400
          ">
            {stats.activeWorkspaces}
          </h2>

        </div>

        {/* Card */}
        <div className="
          rounded-3xl
          border border-green-400/10
          bg-green-500/5
          p-6
          backdrop-blur-xl
        ">

          <p className="text-slate-400 mb-3">
            Completed
          </p>

          <h2 className="
            text-5xl
            font-bold
            text-green-400
          ">
            {stats.completedProjects}
          </h2>

        </div>

      </div>

      {/* Projects Grid */}
      <div className="
        grid
        md:grid-cols-2
        xl:grid-cols-3
        gap-7
      ">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {projects.map((project, index) => (

            <div
              key={index}
              className="
        p-6
        rounded-3xl
        border
        border-white/10
        bg-[#111827]
      "
            >

              <h3
                className="
          text-xl
          font-semibold
          text-white
          mb-3
        "
              >
                {project.title}
              </h3>

              <p
                className="
          text-slate-400
          text-sm
          mb-4
        "
              >
                {project.language}
              </p>

              <div
                className="
          p-4
          rounded-2xl
          bg-[#0f172a]
          text-slate-300
          text-sm
          max-h-40
          overflow-hidden
        "
              >
                {project.code.slice(0, 200)}...
              </div>

            </div>

          ))}

        </div>

      </div>

    </div>

  );
}