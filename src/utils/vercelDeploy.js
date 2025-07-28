import axios from 'axios';
import { generateHTML } from './generateHTML';

export const deployToVercel = async (form) => {
  const html = generateHTML(form);
  const vercelToken = 'YOUR_VERCEL_TOKEN_HERE';

  const payload = {
    name: `portfolio-${Date.now()}`,
    files: [
      {
        file: 'index.html',
        data: html,
      },
    ],
    target: 'production',
  };

  const headers = {
    Authorization: `Bearer ${vercelToken}`,
    'Content-Type': 'application/json',
  };

  const response = await axios.post(
    'https://api.vercel.com/v13/deployments',
    payload,
    { headers }
  );

  return response.data;
};
