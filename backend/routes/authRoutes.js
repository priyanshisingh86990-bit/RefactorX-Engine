const express = require("express");
const router = express.Router();

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/User");
const Analysis = require("../models/Analysis");
const Project = require("../models/Project");


// SIGNUP
router.post("/signup", async (req, res) => {

  try {

    const { name, email, password } = req.body;

    // check existing user
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // create user
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    // jwt token
    const token = jwt.sign(
      {
        id: user._id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    res.status(201).json({
      message: "Signup successful",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server error",
    });

  }

});


// LOGIN
router.post("/login", async (req, res) => {

  try {

    const { email, password } = req.body;

    // find user
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        message: "Invalid credentials",
      });
    }

    // compare password
    const isMatch = await bcrypt.compare(
      password,
      user.password
    );

    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid credentials",
      });
    }

    // create token
    const token = jwt.sign(
      {
        id: user._id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    res.json({
      message: "Login successful",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server error",
    });

  }

});

router.get("/profile", async (req, res) => {

  try {

    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({
        message: "No token",
      });
    }

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    const user = await User.findById(decoded.id)
      .select("-password");

    res.json(user);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server error",
    });

  }

});

router.put("/settings", async (req, res) => {

  try {

    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({
        message: "No token",
      });
    }

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    const {
      theme,
      notifications,
    } = req.body;

    const updatedUser = await User.findByIdAndUpdate(

      decoded.id,

      {
        theme,
        notifications,
      },

      {
        new: true,
      }

    ).select("-password");

    res.json(updatedUser);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server error",
    });

  }

});

router.post("/analysis", async (req, res) => {

  try {

    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({
        message: "No token",
      });
    }

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    const {
      code,
      language,
      result,
    } = req.body;

    const analysis = await Analysis.create({

      userId: decoded.id,

      code,
      language,
      result,

    });

    res.status(201).json(analysis);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server error",
    });

  }

});

router.get("/analysis", async (req, res) => {

  try {

    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({
        message: "No token",
      });
    }

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    const analyses = await Analysis.find({

      userId: decoded.id,

    }).sort({
      createdAt: -1,
    });

    res.json(analyses);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server error",
    });

  }

});

router.post("/projects", async (req, res) => {

  try {

    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({
        message: "No token",
      });
    }

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    const {
      title,
      code,
      language,
    } = req.body;

    const project = await Project.create({

      userId: decoded.id,

      title,
      code,
      language,

    });

    res.status(201).json(project);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server error",
    });

  }

});

router.get("/projects", async (req, res) => {

  try {

    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({
        message: "No token",
      });
    }

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    const projects = await Project.find({

      userId: decoded.id,

    }).sort({
      createdAt: -1,
    });

    res.json(projects);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server error",
    });

  }

});

module.exports = router;