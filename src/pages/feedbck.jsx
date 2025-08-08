import React from "react";

export default function TestPage2() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to right, #d4fc79, #96e6a1)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <div
        style={{
          background: "rgba(255, 255, 255, 0.9)",
          padding: "40px",
          borderRadius: "20px",
          boxShadow: "0 8px 30px rgba(0, 0, 0, 0.2)",
          textAlign: "center",
          maxWidth: "500px",
        }}
      >
        <h1 style={{ color: "#2e7d32" }}>🌿 Welcome to Nature Page</h1>
        <p style={{ color: "#4e944f", fontSize: "18px", marginBottom: "30px" }}>
          Explore the peaceful side of React development 🌳🍃
        </p>
        <button
          onClick={() => alert("The forest heard you 🌲✨")}
          style={{
            padding: "12px 24px",
            background: "#4CAF50",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            fontSize: "16px",
            cursor: "pointer",
            transition: "background 0.3s ease",
          }}
          onMouseOver={(e) => (e.target.style.background = "#388e3c")}
          onMouseOut={(e) => (e.target.style.background = "#4CAF50")}
        >
          Tap the Leaf 🍃
        </button>
      </div>
    </div>
  );
}
