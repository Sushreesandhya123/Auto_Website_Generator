import axios from 'axios'; // Add this at top
import { generateHTML } from './generateHTML'; // Import the function

export const deployToVercel = async (form) => {
  const html = generateHTML(form);
  const vercelToken = process.env.REACT_APP_VERCEL_TOKEN;

const payload = {
  name: `portfolio-${form.fullName.replace(/\s+/g, '-').toLowerCase()}`,
  files: [
    {
      file: 'index.html',
      data: html,
    },
    {
      file: 'style.css',
      data: `body { font-family: sans-serif; background-color: #f3f4f6; } h1 { color: ${form.color}; }`
    }
  ],
  target: 'production',
  public: true, // 👈 This is the fix
  projectSettings: {
    framework: null,
    devCommand: "",
    buildCommand: "",
    installCommand: "",
    outputDirectory: "."
  }
};



  const headers = {
    Authorization: `Bearer ${vercelToken}`,
    'Content-Type': 'application/json',
  };

  try {
    const response = await axios.post(
      'https://api.vercel.com/v13/deployments',
      payload,
      { headers }
    );
    return {
      url: `https://${response.data.url}`,
      id: response.data.id
    };
  } catch (error) {
    console.error('Deployment error:', error.response?.data || error.message);
    throw error;
  }
};