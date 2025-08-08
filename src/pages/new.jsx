// TestPage.jsx
import React from "react";

export default function TestPage() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Hello, React! 👋</h1>
      <p>This is your test JSX page.</p>
      <button
        onClick={() => alert("Button Clicked!")}
        style={{
          padding: "10px 20px",
          background: "#007bff",
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
