// TestPage.jsx
import React from "react";

export default function TestPage() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Hello, kavee! 👋</h1>
      <p>This is front end home JSX page.</p>
      <button
        onClick={() => alert("Moda kavee")}
        style={{
          padding: "10px 20px",
          background: "#ff8c00ff",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        
      >
        Click Me
      </button>
    </div>
  );
}
