import React from "react";
import {
  useEffect,
  useState
} from "react";


export default function Overview() {

  const [history, setHistory] = useState([]);
  const [stats, setStats] = useState({
    totalAnalyses: 0,
    savedProjects: 0,
    aiCredits: 0,
    recentActivity: [],
  });

  useEffect(() => {

    const fetchHistory = async () => {

      try {

        const token = localStorage.getItem("token");

        const response = await fetch(
          "http://localhost:3000/api/auth/analysis",
          {
            headers: {
              Authorization: token,
            },
          }
        );

        const data = await response.json();

        setHistory(data);

      } catch (error) {

        console.log(error);

      }

    };

    fetchHistory();

  }, []);

  useEffect(() => {

    const fetchStats = async () => {

      try {

        const response = await fetch(
          "http://localhost:5000/api/dashboard/stats"
        );

        const data = await response.json();

        setStats(data);

      } catch (error) {

        console.log(error);

      }

    };

    fetchStats();

  }, []);

  return (

    <div className="space-y-8">

      {/* Heading */}
      <div>

        <h1 className="
          text-4xl
          font-bold
          text-white
          mb-3
        ">
          Welcome Back 👋
        </h1>

        <p className="text-slate-400 text-base">
          Monitor your AI activity, projects and code insights.
        </p>

      </div>

      {/* Stats */}
      <div className="
        grid
        grid-cols-1
        md:grid-cols-3
        gap-6
      ">

        {/* Card 1 */}
        <div className="
          rounded-3xl
          border border-white/10
          bg-white/5
          p-6
        ">

          <p className="text-slate-400 mb-2">
            Total Analyses
          </p>

          <h2 className="text-4xl font-bold text-white">
            {stats.totalAnalyses}
          </h2>

        </div>

        {/* Card 2 */}
        <div className="
          rounded-3xl
          border border-white/10
          bg-white/5
          p-6
        ">

          <p className="text-slate-400 mb-2">
            Saved Projects
          </p>

          <h2 className="text-4xl font-bold text-cyan-400">
            {stats.savedProjects}
          </h2>

        </div>

        {/* Card 3 */}
        <div className="
          rounded-3xl
          border border-white/10
          bg-white/5
          p-6
        ">

          <p className="text-slate-400 mb-2">
            AI Credits
          </p>

          <h2 className="text-4xl font-bold text-green-400">
            {stats.aiCredits}
          </h2>

        </div>

      </div>

      {/* Activity */}
      <div className="
        rounded-3xl
        border border-white/10
        bg-white/5
        p-8
      ">

        <h2 className="
          text-2xl
          font-semibold
          text-white
          mb-6
        ">
          Recent Activity
        </h2>

        <div className="space-y-4">

          {history.slice(0, 3).map((item, index) => (

            <div
              key={index}
              className="
        flex
        items-center
        justify-between
        p-4
        rounded-2xl
        bg-[#0f172a]
      "
            >

              <div>

                <p className="text-white font-medium">
                  {item.language} Analysis
                </p>

                <p className="text-slate-500 text-sm">
                  {new Date(item.createdAt)
                    .toLocaleString()}
                </p>

              </div>

              <span className="
        px-4
        py-2
        rounded-xl
        bg-cyan-500/10
        text-cyan-400
        text-sm
      ">
                Saved
              </span>

            </div>

          ))}

        </div>

      </div>

    </div>

  );
}