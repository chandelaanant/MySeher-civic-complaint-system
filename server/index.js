const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const session = require("express-session");
const bcrypt = require("bcrypt");
const EmployeeModel = require('./models/Employee');

const app = express();
app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"], // your frontend URL
    credentials: true // allow cookies to be sent
}));

// -------------------- Session setup --------------------
app.use(
  session({
    secret: "yourSecretKey", // change this to a secure key
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 1000 * 60 * 60 } // 1 hour
  })
);

// -------------------- MongoDB connection --------------------
mongoose.connect("mongodb://127.0.0.1:27017/employee", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("✅ MongoDB connected successfully"))
.catch(err => console.error("❌ MongoDB connection error:", err));

// -------------------- Routes --------------------

// Register route
app.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // 🔹 Check if email already exists
    const existingUser = await EmployeeModel.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ error: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const employee = await EmployeeModel.create({
      name,
      email,
      password: hashedPassword
    });

    // Auto-login after registration
    req.session.user = { id: employee._id, name: employee.name, email: employee.email };

    const { password: pwd, ...safeUser } = employee._doc;
    res.status(201).json({ message: "User registered successfully", user: safeUser });

  } catch (err) {
    console.error("Error in /register:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
});


// Login route
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await EmployeeModel.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });

    // Store user info in session
    req.session.user = { id: user._id, name: user.name, email: user.email };

    const { password: pwd, ...safeUser } = user._doc;
    res.json({ message: "Login successful", user: safeUser });

  } catch (err) {
    console.error("Error in /login:", err);
    res.status(500).json({ message: "Server error", error: err });
  }
});

// Logout route
app.post("/logout", (req, res) => {
  req.session.destroy(err => {
    if (err) return res.status(500).json({ message: "Logout failed" });
    res.clearCookie("connect.sid");
    res.json({ message: "Logged out successfully" });
  });
});

// Protected dashboard route
app.get("/dashboard", (req, res) => {
  if (!req.session.user) return res.status(401).json({ message: "Not logged in" });

  res.json({ message: `Welcome ${req.session.user.name}` });
});

// Start server
app.listen(3001, () => console.log("Server is running on port 3001"));



// const express=require('express');
// const mongoose=require('mongoose');
// const cors=require('cors');
// const EmployeeModel=require('./models/Employee');
// const session = require("express-session");
// const bcrypt = require("bcrypt");

// const app=express();
// app.use(express.json());
// app.use(cors());




// mongoose.connect("mongodb://127.0.0.1:27017/employee", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })
// .then(() => {
//     console.log("✅ MongoDB connected successfully");
// })
// .catch(err => {
//     console.error("❌ MongoDB connection error:", err);
// });



// Register route
// app.post("/register", async (req, res) => {
//   try {
//     const { name, email, password } = req.body;

    // ✅ hash password before saving
//     const hashedPassword = await bcrypt.hash(password, 10);

//     const employee = await EmployeeModel.create({
//       name,
//       email,
//       password: hashedPassword
//     });

//     return res.status(201).json(employee);

//   } catch (err) {
//     console.error("Error in /register:", err);

//     if (err.code === 11000) {
//       return res.status(409).json({ error: "Email already exists" });
//     }

//     return res.status(500).json({ error: "Internal server error" });
//   }
// });


// Login route
// app.post("/login", async (req, res) => {
//   res.json({ message: "Login working" });
//   const { email, password } = req.body;

//   try {
//     const user = await EmployeeModel.findOne({ email });

//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     // ✅ compare entered password with hashed one in DB
//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(401).json({ message: "Invalid credentials" });
//     }

//     // remove password before sending response
//     const { password: pwd, ...safeUser } = user._doc;

//     res.json({ message: "Login successful", user: safeUser });

//   } catch (err) {
//     console.error("Error in /login:", err);
//     res.status(500).json({ message: "Server error", error: err });
//   }
// });




// app.listen(3001,()=>{
//     console.log("server is running");
// })
