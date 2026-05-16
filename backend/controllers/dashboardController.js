const Analysis = require("../models/Analysis");
const Project = require("../models/Project");
const History = require("../models/History");

const getDashboardStats = async (req, res) => {
  try {
    const userId = req.user.id;

    const totalAnalyses = await Analysis.countDocuments({
      userId,
    });

    const totalProjects = await Project.countDocuments({
      userId,
    });

    const completedProjects = await Project.countDocuments({
      userId,
      status: "completed",
    });

    const recentHistory = await History.find({
      userId,
    })
      .sort({ createdAt: -1 })
      .limit(5);

    res.status(200).json({
      totalAnalyses,
      totalProjects,
      completedProjects,
      recentHistory,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getDashboardStats,
};