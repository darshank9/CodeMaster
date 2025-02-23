import React from "react";
import { Routes, Route } from "react-router-dom"; // Remove BrowserRouter import
import { AuthProvider } from "./context/AuthContext";
import Home from "./pages/Home";
import Signup from "./components/Auth/Signup";
import Login from "./components/Auth/Login";
import Challenge from "./components/Challenges/Challenge";
import Dashboard from "./components/Dashboard/Dashboard";
import Leaderboard from "./components/Dashboard/Leaderboard";
import Navbar from "./components/Navbar";
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/challenges" element={<Challenge />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;