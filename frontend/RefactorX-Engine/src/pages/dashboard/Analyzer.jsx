import { useState } from "react";
import Editor from "@monaco-editor/react";

export default function Analyzer() {

  const [code, setCode] = useState("");
  const [language, setLanguage] = useState("javascript");
  const [activeTab, setActiveTab] = useState("bugs");
  const handleAnalyze = async () => {

    if (!code.trim()) {
      alert("Please enter code");
      return;
    }

    try {

      setLoading(true);

      const token = localStorage.getItem("token");

      // TEMPORARY DEMO RESULT
      const fakeResult = `
Bug Found:
- Missing semicolon
- Unused variable

Optimization:
- Use map instead of loop

Explanation:
- Code can be optimized for readability
`;

      // save analysis
      const response = await fetch(
        "http://localhost:3000/api/auth/analysis",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },

          body: JSON.stringify({
            code,
            language,
            result: fakeResult,
          }),
        }
      );

      const data = await response.json();

      console.log(data);

      // show result in UI
      setAnalysis(fakeResult);

    } catch (error) {

      console.log(error);

      alert("Something went wrong");

    } finally {

      setLoading(false);

    }

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
            AI Analyzer Workspace
          </h1>

          <p className="text-slate-400 text-base max-w-2xl">
            Analyze, optimize and transform your codebase
            with intelligent AI-powered insights.
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
            Import Repo
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
            New Analysis
          </button>

        </div>

      </div>

      {/* Main Workspace */}
      <div className="
        grid
        xl:grid-cols-2
        gap-8
      ">

        {/* LEFT PANEL */}
        <div className="
          rounded-[32px]
          border border-white/10
          bg-white/[0.03]
          backdrop-blur-xl
          p-8
        ">

          {/* Top */}
          <div className="
            flex
            flex-col
            lg:flex-row
            lg:items-center
            lg:justify-between
            gap-6
            mb-8
          ">

            <div>

              <h2 className="
                text-2xl
                font-bold
                text-white
                mb-2
              ">
                Source Code
              </h2>

              <p className="text-slate-400">
                Paste your code or import a repository.
              </p>

            </div>

            {/* Language */}
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="
                bg-[#0f172a]
                border border-white/10
                text-slate-300
                rounded-2xl
                px-5
                py-4
                outline-none
              "
            >

              <option value="javascript">
                JavaScript
              </option>

              <option value="python">
                Python
              </option>

              <option value="java">
                Java
              </option>

              <option value="cpp">
                C++
              </option>

            </select>

          </div>

          {/* Editor */}
          <div className="
            overflow-hidden
            rounded-3xl
            border border-white/10
          ">

            <Editor
              height="520px"
              theme="vs-dark"
              language={language}
              value={code}
              onChange={(value) => setCode(value || "")}
              options={{
                minimap: {
                  enabled: false,
                },

                fontSize: 14,

                fontFamily: "JetBrains Mono",

                smoothScrolling: true,

                automaticLayout: true,

                wordWrap: "on",

                padding: {
                  top: 20,
                },

                scrollBeyondLastLine: false,
              }}
            />

          </div>

          {/* Buttons */}
          <div className="
            flex
            flex-wrap
            gap-4
            mt-6
          ">

            <button className="
              px-7
              py-4
              rounded-2xl
              bg-cyan-400
              text-black
              font-semibold
              hover:scale-105
              transition-all
              duration-300
              shadow-[0_0_35px_rgba(34,211,238,0.35)]
              hover:shadow-[0_0_55px_rgba(34,211,238,0.55)]
            ">
              Analyze Code
            </button>

            <button className="
              px-7
              py-4
              rounded-2xl
              bg-white/5
              border border-white/10
              text-white
              hover:bg-white/10
              transition-all
            ">
              Optimize
            </button>

            <button className="
              px-7
              py-4
              rounded-2xl
              bg-white/5
              border border-white/10
              text-white
              hover:bg-white/10
              transition-all
            ">
              Explain
            </button>

          </div>

        </div>

        {/* RIGHT PANEL */}
        <div className="
          rounded-[32px]
          border border-white/10
          bg-white/[0.03]
          backdrop-blur-xl
          p-8
          flex
          flex-col
        ">

          {/* Header */}
          <div className="
            flex
            items-center
            justify-between
            mb-8
          ">

            <div>

              <h2 className="
                text-2xl
                font-bold
                text-white
                mb-2
              ">
                AI Insights
              </h2>

              <p className="text-slate-400">
                Intelligent optimization and code analysis.
              </p>

            </div>

            <div className="
              px-5
              py-3
              rounded-2xl
              bg-green-500/10
              border border-green-400/20
              text-green-400
              font-medium
            ">
              Ready
            </div>

          </div>

          {/* Tabs */}
          <div className="
            flex
            flex-wrap
            gap-4
            mb-8
          ">

            <button
              onClick={() => setActiveTab("bugs")}
              className={`
                px-5
                py-3
                rounded-2xl
                border
                transition-all
                duration-300

                ${activeTab === "bugs"
                  ? "bg-red-500/10 border-red-500/20 text-red-400"
                  : "bg-white/5 border-white/10 text-slate-300"
                }
              `}
            >
              Bug Report
            </button>

            <button
              onClick={() => setActiveTab("optimized")}
              className={`
                px-5
                py-3
                rounded-2xl
                border
                transition-all
                duration-300

                ${activeTab === "optimized"
                  ? "bg-cyan-500/10 border-cyan-400/20 text-cyan-400"
                  : "bg-white/5 border-white/10 text-slate-300"
                }
              `}
            >
              Optimized Code
            </button>

            <button
              onClick={() => setActiveTab("explanation")}
              className={`
                px-5
                py-3
                rounded-2xl
                border
                transition-all
                duration-300

                ${activeTab === "explanation"
                  ? "bg-white/10 border-white/20 text-white"
                  : "bg-white/5 border-white/10 text-slate-300"
                }
              `}
            >
              Explanation
            </button>

          </div>

          {/* Output */}
          <div className="
            flex-1
            rounded-3xl
            border border-white/10
            bg-[#020617]
            p-8
            overflow-auto
          ">

            <div className="
              h-full
              flex
              flex-col
              items-center
              justify-center
              text-center
            ">

              <div className="
                w-24
                h-24
                rounded-[28px]
                bg-cyan-500/10
                border border-cyan-400/20
                flex
                items-center
                justify-center
                text-cyan-400
                text-4xl
                mb-8
              ">
                ✨
              </div>

              <h3 className="
                text-2xl
                font-semibold
                text-white
                mb-4
              ">
                Ready for Analysis
              </h3>

              <p className="
                text-slate-500
                max-w-md
                leading-relaxed
              ">
                Paste your code into the editor and let
                RefactorX intelligently analyze performance,
                detect issues and optimize your workflow.
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>

  );
}