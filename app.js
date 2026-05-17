import React from "react";

export default function App() {
  return (
    <div
      style={{
        backgroundColor: "black",
        color: "white",
        height: "100vh",
        padding: 20,
      }}
    >
      <h1 style={{ color: "#3b82f6" }}>
        Gaming Platform
      </h1>

      <p>Welcome to your gaming app.</p>

      <button
        style={{
          backgroundColor: "#2563eb",
          color: "white",
          padding: 10,
          border: "none",
          borderRadius: 10,
        }}
      >
        Start
      </button>
    </div>
  );
}
