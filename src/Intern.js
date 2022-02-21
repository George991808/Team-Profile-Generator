const Employee = require("./Employee.js");

class Intern extends Employee{
    constructor(name, id, email, school, role) {
        super(name, id, email, "Intern");
        this.school = school
        
       
    }
    school() {
        return this.school
    }

   
};

module.exports = Intern;