// client/src/component/Documentation.jsx
import React from "react";

const Documentation = () => {
  return (
    <div style={{ fontFamily: "Arial, Helvetica, sans-serif", background: "#f0f2f5", padding: "20px", lineHeight: "1.6" }}>
      <div className="container" style={{ maxWidth: "1000px", margin: "auto", background: "#ffffff", padding: "40px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)", borderRadius: "8px" }}>
        
        <h1 style={{ color: "#1E3A8A", borderBottom: "3px solid #10B981", paddingBottom: "10px" }}>AI Image Generator Project</h1>

        <p style={{ color: "#4B5563" }}>
          The AI Image Generator is a modern web application that allows users to generate images using artificial intelligence.
          Users simply enter a text prompt describing the image they want, and the system generates a unique AI image based on that description.
        </p>

        <p style={{ color: "#4B5563" }}>
          This project demonstrates the integration of AI technology with modern web development to create a powerful and interactive image generation platform.
          The application is designed with a clean user interface and provides fast image generation and download functionality.
        </p>

        {/* Project Features */}
        <div className="section" style={{ marginTop: "25px" }}>
          <h2 style={{ marginTop: "30px", color: "#111827" }}>Project Features</h2>
          <ul style={{ color: "#374151" }}>
            <li>Generate images using AI prompts</li>
            <li>Simple and user-friendly interface</li>
            <li>Instant AI image generation</li>
            <li>Preview generated images</li>
            <li>Download generated images</li>
            <li>Post generated images to the platform</li>
            <li>Responsive and modern design</li>
          </ul>
        </div>

        {/* How the Application Works */}
        <div className="section" style={{ marginTop: "25px" }}>
          <h2 style={{ marginTop: "30px", color: "#111827" }}>How the Application Works</h2>
          <ol style={{ color: "#374151" }}>
            <li>User enters their name in the input field.</li>
            <li>User writes a prompt describing the image.</li>
            <li>User clicks the <b>Generate Image</b> button.</li>
            <li>The prompt is sent to the backend server.</li>
            <li>The server communicates with the AI Image Generation API.</li>
            <li>The AI generates the image based on the prompt.</li>
            <li>The generated image is displayed on the screen.</li>
            <li>User can download or post the generated image.</li>
          </ol>
        </div>

        {/* Technologies Used */}
        <div className="section" style={{ marginTop: "25px" }}>
          <h2 style={{ marginTop: "30px", color: "#111827" }}>Technologies Used</h2>
          <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "15px" }}>
            <thead>
              <tr style={{ background: "#10B981", color: "white" }}>
                <th style={{ padding: "12px", textAlign: "left" }}>Technology</th>
                <th style={{ padding: "12px", textAlign: "left" }}>Purpose</th>
              </tr>
            </thead>
            <tbody style={{ color: "#374151" }}>
              <tr><td style={{ padding: "12px" }}>HTML</td><td style={{ padding: "12px" }}>Structure of the web application</td></tr>
              <tr><td style={{ padding: "12px" }}>CSS</td><td style={{ padding: "12px" }}>Styling and layout design</td></tr>
              <tr><td style={{ padding: "12px" }}>JavaScript</td><td style={{ padding: "12px" }}>Handles application logic and user interaction</td></tr>
              <tr><td style={{ padding: "12px" }}>React.js</td><td style={{ padding: "12px" }}>Frontend framework for building UI components</td></tr>
              <tr><td style={{ padding: "12px" }}>Node.js</td><td style={{ padding: "12px" }}>Backend server for API communication</td></tr>
              <tr><td style={{ padding: "12px" }}>AI Image Generation API</td><td style={{ padding: "12px" }}>Used to generate images from text prompts</td></tr>
            </tbody>
          </table>
        </div>

        {/* Project Workflow */}
        <div className="section" style={{ marginTop: "25px" }}>
          <h2 style={{ marginTop: "30px", color: "#111827" }}>Project Workflow</h2>
          <ul style={{ color: "#374151" }}>
            <li>User enters prompt</li>
            <li>Prompt is sent to backend server</li>
            <li>Backend sends request to AI API</li>
            <li>AI API generates image</li>
            <li>Image returned to frontend</li>
            <li>User views and downloads the generated image</li>
          </ul>
        </div>

        {/* Project Folder Structure */}
        <div className="section" style={{ marginTop: "25px" }}>
          <h2 style={{ marginTop: "30px", color: "#111827" }}>Project Folder Structure</h2>
          <pre style={{ background: "#f9fafb", padding: "15px", overflowX: "auto", borderRadius: "6px", color: "#1F2937" }}>
{`├── client/                 
│   ├── public/
│   └── src/
│       ├── Api/            
│       │   └── index.js
│       ├── component/      
│       │   ├── Button.js
│       │   ├── generatedimageCard.jsx
│       │   ├── gererateimageform.jsx
│       │   ├── imageCard.jsx
│       │   ├── navbar.js
│       │   ├── Searchbar.js
│       │   └── TextInput.jsx
│       ├── pages/          
│       │   ├── createpost.jsx
│       │   ├── home.js
│       ├── utils/          
│       │   └── Themes.js
├── App.js
├── server/                  
│   ├── controllers/
│   │   ├── GenerateAIimages.js
│   │   └── posts.js
│   ├── models/
│   │   └── posts.js
│   ├── routes/
│   │   ├── GenerateImage.js
│   │   └── posts.js
│   ├── .env
│   ├── error.js
│   └── index.js`}
          </pre>
        </div>

        {/* Installation Guide */}
        <div className="section" style={{ marginTop: "25px" }}>
          <h2 style={{ marginTop: "30px", color: "#111827" }}>Installation Guide</h2>
          <ol style={{ color: "#374151" }}>
            <li>Clone the repository from GitHub.</li>
            <li>Install project dependencies using npm.</li>
            <li>Start the development server.</li>
            <li>Open the application in your browser.</li>
          </ol>
        </div>

        {/* Future Improvements */}
        <div className="section" style={{ marginTop: "25px" }}>
          <h2 style={{ marginTop: "30px", color: "#111827" }}>Future Improvements</h2>
          <ul style={{ color: "#374151" }}>
            <li>Add user authentication system</li>
            <li>Save generated images in user profile</li>
            <li>Add image history feature</li>
            <li>Improve UI design and animations</li>
            <li>Add multiple AI image styles</li>
          </ul>
        </div>

        {/* Author */}
        <div className="section" style={{ marginTop: "25px" }}>
          <h2 style={{ marginTop: "30px", color: "#111827" }}>Author</h2>
          <p style={{ color: "#374151" }}>
            This project was developed by <b>Sam Sam Ali</b> as part of a web development portfolio project demonstrating AI integration in modern web applications.
          </p>
        </div>

        {/* Footer */}
        <div className="footer" style={{ marginTop: "40px", textAlign: "center", color: "#6B7280", fontSize: "14px" }}>
          <p>© 2026 AI Image Generator Project</p>
        </div>

      </div>
    </div>
  );
};

export default Documentation;