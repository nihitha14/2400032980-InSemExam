import React, { useState } from "react";

export default function FormValidation() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (!validateEmail(e.target.value)) {
      setEmailError("Invalid email address");
    } else {
      setEmailError("");
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 6) {
      setPasswordError("Password must be at least 6 characters");
    } else {
      setPasswordError("");
    }
  };

  const isFormValid = validateEmail(email) && password.length >= 6;

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");
  };

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",  // horizontally center
      alignItems: "center",      // vertically center
      height: "100vh",           // full viewport height
      backgroundColor: "#f0f2f5"
    }}>
      <form 
        onSubmit={handleSubmit} 
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0 0 10px rgba(0,0,0,0.1)",
          backgroundColor: "#fff",
          width: "300px",
          gap: "15px",
          textAlign: "center"  // optional: centers text inside form
        }}
      >
        <h2>Login Form</h2>
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={handleEmailChange}
          style={{ padding: "8px", fontSize: "14px" }}
        />
        {emailError && <p style={{ color: "red", fontSize: "12px" }}>{emailError}</p>}

        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={handlePasswordChange}
          style={{ padding: "8px", fontSize: "14px" }}
        />
        {passwordError && <p style={{ color: "red", fontSize: "12px" }}>{passwordError}</p>}

        <button 
          type="submit" 
          disabled={!isFormValid}
          style={{
            padding: "10px",
            backgroundColor: isFormValid ? "#4CAF50" : "#999",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: isFormValid ? "pointer" : "not-allowed"
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}