import React, { useState } from "react";

function App() {
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const generatePassword = async () => {
    setLoading(true); // Set loading state to true
    setError(null);   // Clear previous errors

    try {
      const response = await fetch("http://localhost:8080/generate-password");

      if (!response.ok) {
        throw new Error("Failed to fetch password. Server may be down.");
      }

      const data = await response.text();
      setPassword(data);
    } catch (error) {
      setError(error.message); // Set error message if fetch fails
    } finally {
      setLoading(false); // Set loading state to false
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Password Generator</h1>
      <button onClick={generatePassword} disabled={loading}>
        {loading ? "Generating..." : "Generate Strong Password"}
      </button>
      {error && (
        <div style={{ marginTop: "20px", color: "red", fontSize: "16px" }}>
          <p>Error: {error}</p>
        </div>
      )}
      {password && !loading && (
        <div style={{ marginTop: "20px", fontSize: "20px", fontWeight: "bold" }}>
          <p>Generated Password:</p>
          <p>{password}</p>
        </div>
      )}
    </div>
  );
}

export default App; // Make sure App is exported correctly
