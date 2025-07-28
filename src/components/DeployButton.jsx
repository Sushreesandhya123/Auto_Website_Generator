import React, { useState } from "react";
import { deployToVercel } from "../utils/vercelDeploy";

export default function DeployButton({ form }) {
  const [status, setStatus] = useState("idle");
  const [deployedUrl, setDeployedUrl] = useState("");

  const handleDeploy = async () => {
    setStatus("loading");
    try {
      const res = await deployToVercel(form);
      setDeployedUrl(res?.url);
      setStatus("success");
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <div className="mt-6">
      <button
        onClick={handleDeploy}
        className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded shadow-md transition"
      >
        Deploy to Vercel
      </button>

      {status === "loading" && <p className="text-yellow-500 mt-2">Deploying...</p>}
      {status === "success" && (
        <div className="mt-2">
          <p className="text-green-600">✅ Deployed Successfully!</p>
          <a
            href={deployedUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            {deployedUrl}
          </a>
          <button
            onClick={() => navigator.clipboard.writeText(deployedUrl)}
            className="ml-4 text-sm bg-gray-300 px-2 py-1 rounded"
          >
            Copy URL
          </button>
        </div>
      )}
      {status === "error" && <p className="text-red-500 mt-2">❌ Deployment failed.</p>}
    </div>
  );
}
