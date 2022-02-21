const Employee = require("./Employee");
class Engineer extends Employee {
  constructor(name, id, email, gitHub, role) {
    super(name, id, email, role);
    this.gitHub = gitHub;

  }
  
  getGitHub() {
    return this.gitHub;
  }
}
module.exports = Engineer;