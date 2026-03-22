import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { translateText } from "./translate";

function Login({ language }) {
  const navigate = useNavigate();

  const originalTexts = {
    welcome: "Welcome Back!",
    intro: "Log in to continue exploring your dashboard.",
    login: "Login",
    email: "Email address",
    password: "Password",
    submit: "Login",
    noAccount: "Don't have an account? Register"
  };

  const [tTexts, setTTexts] = useState(originalTexts);

  useEffect(() => {
    async function translateAll() {
      if (language === "en") {
        setTTexts(originalTexts);
      } else {
        const newTexts = {};
        for (let key in originalTexts) {
          newTexts[key] = await translateText(originalTexts[key], language);
        }
        setTTexts(newTexts);
      }
    }
    translateAll();
  }, [language]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(
        "http://localhost:3001/login",
        { email, password },
        { withCredentials: true }
      )
      .then(() => navigate("/landing"))
      .catch((err) => console.log(err));
  };

  return (
    <div className="page-container">
      <div className="intro-section">
        <h1>{tTexts.welcome}</h1>
        <p>{tTexts.intro}</p>
      </div>

      <div className="form-section">
        <div className="signup-box">
          <h2>{tTexts.login}</h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">{tTexts.email}</label>
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">{tTexts.password}</label>
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary w-100">
              {tTexts.submit}
            </button>
          </form>

          <p className="mt-3">
            <Link to="/register">{tTexts.noAccount}</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;






// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import Dashboard from "./Dashboard";
// import "./index.css";

// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Login button clicked", { email, password }); // debug
//     axios
//       .post("http://localhost:3001/login", { email, password })
//       .then((result) => {
//         console.log(result);
//         // redirect after login
//         navigate("/dashboard"); // change to your actual home/dashboard route
//       })
//       .catch((err) => console.log(err));
//   };

//   return (
//     <div className="page-container">
//       {/* Left intro section */}
//       <div className="intro-section">
//         <h1>Welcome Back!</h1>
//         <p>
//           Log in to continue exploring your dashboard, managing your account,  
//           and accessing all the features of our platform.
//         </p>
//       </div>

//       {/* Right login form */}
//       <div className="form-section">
//         <div className="signup-box">
//           <h2>Login</h2>
//           <form onSubmit={handleSubmit}>
//             {/* Email */}
//             <div className="mb-3">
//               <label htmlFor="email" className="form-label">
//                 Email address
//               </label>
//               <input
//                 id="email"
//                 name="email"
//                 type="email"
//                 className="form-control"
//                 placeholder="Enter your email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 autoComplete="email"
//                 required
//               />
//             </div>

//             {/* Password */}
//             <div className="mb-3">
//               <label htmlFor="password" className="form-label">
//                 Password
//               </label>
//               <input
//                 id="password"
//                 name="password"
//                 type="password"
//                 className="form-control"
//                 placeholder="Enter password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 autoComplete="current-password"
//                 required
//               />
//             </div>

//             {/* Submit */}
//             <button type="submit" className="btn btn-primary w-100">
//               Login
//             </button>

//             {/* Link to Register */}
//             <p className="mt-3">
//               Don’t have an account? <Link to="/register">Register</Link>
//             </p>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;




