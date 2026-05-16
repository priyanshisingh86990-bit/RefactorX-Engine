const express = require("express");

const {
  getDashboardStats,
} = require("../controllers/dashboardController");

const protect = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/stats", protect, getDashboardStats);

module.exports = router;

// const express = require("express");
// const router = express.Router();

// router.get("/stats", async (req, res) => {

//   try {

//     res.json({
//       totalAnalyses: 0,
//       savedProjects: 0,
//       aiCredits: 0,
//       recentActivity: [],

//       historyStats: {
//         totalAnalyses: 0,
//         optimizedProjects: 0,
//         successRate: 0,
//       },

//       projectStats: {
//         totalProjects: 0,
//         activeWorkspaces: 0,
//         completedProjects: 0,
//       },
//     });

//   } catch (error) {

//     res.status(500).json({
//       message: "Server error",
//     });

//   }

// });

// module.exports = router;