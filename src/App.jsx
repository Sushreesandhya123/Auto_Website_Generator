import React, { useState, useEffect } from "react";
import FormSection from "./components/FormSection";
import PreviewSection from "./components/PreviewSection";
import DeployButton from "./components/DeployButton"; // ✅ Added

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  const [form, setForm] = useState(() => {
    return (
      JSON.parse(localStorage.getItem("formData")) || {
        fullName: "",
        jobTitle: "",
        bio: "",
        color: "#6366f1", // Indigo-500
      }
    );
  });

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(form));
  }, [form]);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen flex flex-col md:flex-row bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white transition-all duration-300">
        {/* Dark Mode Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="fixed top-4 right-4 z-50 bg-gray-800 text-white px-4 py-2 rounded shadow-md hover:bg-gray-700 transition"
        >
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>

        {/* Left: Form Section */}
        <FormSection form={form} setForm={setForm} />

        {/* Right: Preview Section */}
        <div className="flex flex-col w-full md:w-1/2 p-4">
          <PreviewSection form={form} />

          {/* ✅ Deploy Button Section */}
          <div className="mt-6">
            <DeployButton form={form} />
          </div>
        </div>
      </div>
    </div>
  );
}
