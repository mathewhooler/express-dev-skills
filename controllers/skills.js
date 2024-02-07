const Skill = require("../models/skill");

function index(req, res) {
  res.render("skills/index", {
    skills: Skill.getAll(),
    heading: "All Skills",
  });
}

function getOne(req, res) {
  res.render("skills/getOne", {
  skill: Skill.getOne(req.params.id),
  });
}


module.exports = {
  index,
  getOne,
};