const Project = require('../models/project');

const newProject = async (req, res) => {
  try {
    let project = await Project.create(req.body);
    res.status(201).json(project);
  } catch (err) {
    res.status(400).json({ err });
  }
};

const editProject = async (req, res) => {
  await Project.findOne(
    { _id: req.params.id },
    (err, project) => {
      project.title = req.body.title;
      project.image = req.body.image;
      project.description = req.body.description;
      project.link = req.body.link;
      try {
        project.save();
        res.status(200).json(project);
      } catch (err) {
        res.status(400).json({ err });
      }
    }
  );
};

const deleteProject = async (req, res) => {
    try {
      let project = await Project.findByIdAndDelete(req.params.id);
      res.status(200).json(project);
    } catch (err) {
      res.status(400).json({ err });
    }
};

module.exports = {
  newProject,
  editProject,
  deleteProject
};