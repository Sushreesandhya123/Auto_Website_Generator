import React from "react";

export default function PreviewSection({ form }) {
  const { fullName, jobTitle, bio, color } = form;

  return (
    <div className="w-full p-6 bg-gradient-to-br from-white to-gray-100 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center">
      <div
        className="w-full max-w-lg p-6 rounded-xl shadow-lg mt-6"
        style={{ border: `3px solid ${color}` }}
      >
        <h1 className="text-3xl font-bold mb-2" style={{ color }}>
          {fullName || "Your Name"}
        </h1>
        <h2 className="text-xl italic text-gray-600 dark:text-gray-300 mb-4">
          {jobTitle || "Your Title"}
        </h2>
        <p className="text-gray-700 dark:text-gray-200">
          {bio || "Write a short bio here..."}
        </p>
      </div>
    </div>
  );
}
