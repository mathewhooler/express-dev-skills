const skills = [
    { id: 0, skill: "HTML", status: "Intermediate" },
    { id: 1, skill: "CSS", status: "Expert" },
    { id: 2, skill: "Javascript", status: "Beginner" },
  ];
  
  function getAll() {
    return skills;
  }
  
  function getOne(id) {
    id = parseInt(id);
    return skills.find((skill) => skill.id === id);
  }
  

  module.exports = {
    getAll,
    getOne,
  };
  