import React from "react";

export default function FormSection({ form, setForm }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="w-full md:w-1/2 p-6 space-y-4 bg-white dark:bg-gray-800 shadow-lg">
      <h2 className="text-3xl font-bold mb-4">🛠️ Build Your Portfolio</h2>

      <div className="space-y-2">
        <label className="block text-sm font-semibold">Full Name</label>
        <input
          type="text"
          name="fullName"
          value={form.fullName}
          onChange={handleChange}
          className="w-full p-2 border rounded dark:bg-gray-700"
          placeholder="e.g., Sandhyarani Jena"
        />
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-semibold">Job Title</label>
        <input
          type="text"
          name="jobTitle"
          value={form.jobTitle}
          onChange={handleChange}
          className="w-full p-2 border rounded dark:bg-gray-700"
          placeholder="e.g., Developer"
        />
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-semibold">Short Bio</label>
        <textarea
          name="bio"
          value={form.bio}
          onChange={handleChange}
          rows="3"
          className="w-full p-2 border rounded dark:bg-gray-700"
          placeholder="Tell us something about you..."
        />
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-semibold">Theme Color</label>
        <input
          type="color"
          name="color"
          value={form.color}
          onChange={handleChange}
          className="w-12 h-10 border-2 rounded"
        />
      </div>
    </div>
  );
}
