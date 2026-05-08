import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

import Signup from "./pages/Signup";
import Login from "./pages/Login";

import DashboardLayout from "./components/dashboard/DashboardLayout";

import Overview from "./pages/dashboard/Overview";
import Analyzer from "./pages/dashboard/Analyzer";
import History from "./pages/dashboard/History";
import Projects from "./pages/dashboard/Projects";
import Settings from "./pages/dashboard/Settings";
import Profile from "./pages/dashboard/Profile";

export default function App() {

  return (

    <Routes>

      {/* Landing */}
      <Route path="/" element={<Home />} />

      {/* Auth */}
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />

      {/* Dashboard */}
      <Route path="/dashboard" element={<DashboardLayout />}>

        <Route index element={<Overview />} />

        <Route path="analyzer" element={<Analyzer />} />

        <Route path="history" element={<History />} />

        <Route path="projects" element={<Projects />} />

        <Route path="settings" element={<Settings />} />

        <Route path="profile" element={<Profile />} />

      </Route>

    </Routes>

  );
}