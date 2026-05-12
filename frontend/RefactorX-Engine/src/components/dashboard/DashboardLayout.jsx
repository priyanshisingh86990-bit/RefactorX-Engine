import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import Editor from "@monaco-editor/react";
import Overview from "../../pages/dashboard/Overview";
import Analyzer from "../../pages/dashboard/Analyzer";
import History from "../../pages/dashboard/History";
import Projects from "../../pages/dashboard/Projects";
import Settings from "../../pages/dashboard/Settings";
import Profile from "../../pages/dashboard/Profile";

export default function DashboardLayout() {
    const [code, setCode] = useState("");
    const [loading, setLoading] = useState(false);
    const [analysis, setAnalysis] = useState(null);
    const [language, setLanguage] = useState("JavaScript");
    const [activeTab, setActiveTab] = useState("bugs");
    const [activePage, setActivePage] = useState("overview");
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    useEffect(() => {

        const token = localStorage.getItem("token");

        if (!token) {
            navigate("/login");
        }

    }, []);

    useEffect(() => {

        const fetchProfile = async () => {

            try {

                const token = localStorage.getItem("token");

                const response = await fetch(
                    "http://localhost:3000/api/auth/profile",
                    {
                        headers: {
                            Authorization: token,
                        },
                    }
                );

                const data = await response.json();

                setUser(data);

            } catch (error) {

                console.log(error);

            }

        };

        fetchProfile();

    }, []);

    const handleAnalyze = async () => {

        if (!code.trim()) {
            alert("Please paste some code");
            return;
        }

        try {

            setLoading(true);

            const response = await fetch(
                "http://localhost:3000/api/analyze",
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json",
                    },

                    body: JSON.stringify({
                        code,
                        language,
                    }),
                }
            );

            const data = await response.json();

            console.log(data);

            if (data.success) {
                setAnalysis(data.analysis);
            }

        } catch (error) {

            console.log(error);

            alert("Analysis failed");

        } finally {

            setLoading(false);

        }
    };

    return (
        <div className="
      min-h-screen
      bg-[#0f172a]
      flex
      overflow-hidden
    ">

            {/* Sidebar */}
            <Sidebar
                activePage={activePage}
                setActivePage={setActivePage}
            />
            {/* Main */}
            <div className="flex-1 flex flex-col">

                {/* Topbar */}
                <Topbar
                    setActivePage={setActivePage}
                    user={user}
                    />

                {/* Content */}
                <div className="flex-1 p-8 overflow-y-auto">


                    {activePage === "overview" && (
                        <Overview />
                    )}

                    {activePage === "analyzer" && (
                        <Analyzer />
                    )}

                    {activePage === "history" && (
                        <History />
                    )}

                    {activePage === "projects" && (
                        <Projects />
                    )}

                    {activePage === "settings" && (
                        <Settings />
                    )}

                    {activePage === "profile" && (
                        <Profile />
                    )}

                </div>

            </div>

        </div>


    );
}