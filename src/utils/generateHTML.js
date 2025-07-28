export const generateHTML = (form) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <title>${form.fullName}</title>
      <style>
        body {
          font-family: sans-serif;
          background-color: #f3f4f6;
          color: #111;
          padding: 2rem;
        }
        h1 {
          color: ${form.color};
        }
      </style>
    </head>
    <body>
      <h1>${form.fullName}</h1>
      <h2>${form.jobTitle}</h2>
      <p>${form.bio}</p>
    </body>
    </html>
  `;
};
