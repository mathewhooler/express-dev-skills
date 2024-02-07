var express = require('express');
var router = express.Router();
var skillsController = require("../controllers/skills")

function getOne(id) {
  id = parseInt(id); // URL params are strings so convert to a number
  return skills.find((skill) => skill.id === id);
}

module.exports = {
  getOne,
}


router.get('/', skillsController.index);
router.get('/:id', skillsController.getOne);
module.exports = router;