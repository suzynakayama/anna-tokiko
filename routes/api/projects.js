const express = require("express");
const router = express.Router();
const projectsCtrl = require("../../controllers/projects");

const isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) return next();
  res.redirect("/");
};

router.post("/", isLoggedIn, projectsCtrl.newProject);
router.get("/:id/edit", isLoggedIn, projectsCtrl.editProject);
router.delete("/:id", projectsCtrl.deleteProject);

module.exports = router;