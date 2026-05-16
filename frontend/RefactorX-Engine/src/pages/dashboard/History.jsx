import { useEffect, useState } from "react";

export default function History() {

  const [history, setHistory] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredHistory, setFilteredHistory] =
    useState([]);
  const [stats, setStats] = useState({
    totalAnalyses: 0,
    optimizedProjects: 0,
    successRate: 0,
  });
  useEffect(() => {

    const fetchHistory = async () => {

      try {

        const token =
          localStorage.getItem("token");

        const response = await fetch(
          "http://localhost:5000/api/auth/analysis",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const data = await response.json();

        setHistory(data);
        setFilteredHistory(data);

      } catch (error) {

        console.log(error);

      }

    };

    fetchHistory();

  }, []);

  useEffect(() => {

    const fetchHistoryStats =
      async () => {

        try {

          const token = localStorage.getItem("token");

          const response =
            await fetch(
              "http://localhost:5000/api/dashboard/stats",
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              }
            );

          const data =
            await response.json();

          setStats(data.historyStats);

        } catch (error) {

          console.log(error);

        }

      };

    fetchHistoryStats();

  }, []);

  const handleSearch = (e) => {

    const value = e.target.value;

    setSearch(value);

    const filtered = history.filter((item) =>
      item.language
        .toLowerCase()
        .includes(value.toLowerCase())
    );

    setFilteredHistory(filtered);

  };

  const exportHistory = () => {

    const dataStr = JSON.stringify(
      history,
      null,
      2
    );

    const blob = new Blob(
      [dataStr],
      {
        type: "application/json",
      }
    );

    const url =
      window.URL.createObjectURL(blob);

    const a =
      document.createElement("a");

    a.href = url;

    a.download = "history.json";

    a.click();

  };

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
            Analysis History
          </h1>

          <p className="text-slate-400 text-base">
            Explore all previous AI analyses, optimizations
            and intelligent code insights.
          </p>

        </div>

        {/* Search */}
        <div className="
          w-full
          lg:w-[350px]
          bg-white/[0.04]
          border border-white/10
          rounded-2xl
          px-5
          py-4
        ">

          <input
            type="text"
            placeholder="Search history..."
            value={search}
            onChange={handleSearch}
            className="
              bg-transparent
              outline-none
              text-white
              w-full
              placeholder:text-slate-500
            "
          />

        </div>

      </div>

      {/* Stats */}
      <div className="
        grid
        grid-cols-1
        md:grid-cols-3
        gap-6
      ">

        {/* Total */}
        <div className="
          rounded-3xl
          border border-white/10
          bg-white/5
          p-6
          backdrop-blur-xl
        ">

          <p className="text-slate-400 mb-3">
            Total Analyses
          </p>

          <h2 className="
            text-5xl
            font-bold
            text-white
          ">
            {stats.totalAnalyses}
          </h2>

        </div>

        {/* Optimized */}
        <div className="
          rounded-3xl
          border border-cyan-400/10
          bg-cyan-500/5
          p-6
          backdrop-blur-xl
        ">

          <p className="text-slate-400 mb-3">
            Optimized Projects
          </p>

          <h2 className="
            text-5xl
            font-bold
            text-cyan-400
          ">
            {stats.optimizedProjects}
          </h2>

        </div>

        {/* Success */}
        <div className="
          rounded-3xl
          border border-green-400/10
          bg-green-500/5
          p-6
          backdrop-blur-xl
        ">

          <p className="text-slate-400 mb-3">
            Success Rate
          </p>

          <h2 className="
            text-5xl
            font-bold
            text-green-400
          ">
            {stats.successRate}%
          </h2>

        </div>

      </div>

      {/* Table Container */}
      <div className="
        rounded-[32px]
        border border-white/10
        bg-white/[0.03]
        backdrop-blur-xl
        overflow-hidden
      ">

        {/* Top */}
        <div className="
          px-8
          py-6
          border-b border-white/10
          flex
          items-center
          justify-between
        ">

          <div>

            <h2 className="
              text-2xl
              font-semibold
              text-white
              mb-2
            ">
              Recent Analyses
            </h2>

            <p className="text-slate-500">
              Your latest AI-powered code reviews.
            </p>

          </div>

          <button onClick={exportHistory} className="
            px-6
            py-3
            rounded-2xl
            bg-cyan-500/10
            border border-cyan-400/20
            text-cyan-400
            hover:bg-cyan-500/20
            transition-all
          ">
            Export History
          </button>

        </div>

        {/* Items */}
        <div className="divide-y divide-white/5">

          {filteredHistory.length === 0 ? (

            <div className="
    p-10
    text-center
    text-slate-500
  ">
              No analysis history found.
            </div>

          ) : (

            filteredHistory.map((item, index) => (

              <div
                key={index}
                className="
        px-8
        py-6
        flex
        flex-col
        xl:flex-row
        xl:items-center
        xl:justify-between
        gap-6
        hover:bg-white/[0.03]
        transition-all
      "
              >

                {/* Left */}
                <div className="flex items-center gap-5">

                  <div className="
          w-16
          h-16
          rounded-2xl
          bg-cyan-500/10
          border border-cyan-400/20
          flex
          items-center
          justify-center
          text-cyan-400
          text-2xl
        ">
                    ⚡
                  </div>

                  <div>

                    <h3 className="
            text-xl
            font-semibold
            text-white
            mb-2
          ">
                      {item.language} Analysis
                    </h3>

                    <p className="text-slate-500">
                      {new Date(
                        item.createdAt
                      ).toLocaleString()}
                    </p>

                  </div>

                </div>

                {/* Right */}
                <div className="
        flex
        flex-wrap
        items-center
        gap-4
      ">

                  <div className="
          px-5
          py-3
          rounded-2xl
          bg-cyan-500/10
          border border-cyan-400/20
          text-cyan-400
          font-medium
        ">
                    Saved
                  </div>

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
                    Open
                  </button>

                </div>

              </div>

            ))

          )}

        </div>



      </div>

    </div>
  );
}