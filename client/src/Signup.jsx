






import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./index.css";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // for alert
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
  .post("http://localhost:3001/register", { name, email, password })
  .then((result) => {
    console.log("Registration success:", result.data);
    navigate("/dashboard"); 
  })
  .catch((err) => {
    if (err.response && err.response.status === 409) {
      console.log("User already exists!");
      setErrorMessage("User already exists. Redirecting to login...");

      
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } else {
      console.error("Unexpected error:", err);
      setErrorMessage("Something went wrong. Please try again.");
    }
  });

  };

  return (
    <div className="page-container">
      {/* Left intro section */}
      <div className="intro-section">
        <h1>Welcome to My Website</h1>
        <p>
          This is a short introduction about what your platform does.  
          You can explain its features, benefits, or purpose here.
        </p>
      </div>

      {/* Right signup form */}
      <div className="form-section">
        <div className="signup-box">
          <h2>Register</h2>

          {/* Bootstrap alert */}
          {errorMessage && (
            <div className="alert alert-danger" role="alert">
              {errorMessage} <Link to="/login">Login here</Link>
            </div>
          )}

          <form onSubmit={handleSubmit}>
            {/* Name */}
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Full Name</label>
              <input
                id="name"
                name="name"
                type="text"
                className="form-control"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoComplete="name"
                required
              />
            </div>

            {/* Email */}
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input
                id="email"
                name="email"
                type="email"
                className="form-control"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                required
              />
            </div>

            {/* Password */}
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                className="form-control"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="new-password"
                required
              />
            </div>

            {/* Submit */}
            <button type="submit" className="btn btn-primary w-100">
              Register
            </button>

            {/* Link to Login */}
            <p className="mt-3">
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;






