const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
let role = "manager"
const commonQuestions = [
    {
        type: "input",
        name: "name",
        message: "Enter " + role + "'s name",
       
      },
     {type: "input",
      name: "id",
      message: "Enter " + role + "'s ID number",
    },
      
    {
      type: "input",
      name: "email",
      message: "Enter " + role + "'s email address",
      
    }, 
  
]
const managerQuestions = [

    {
      type: "input",
      name: "office",
      message: "Enter manager's office number",
    }
]
const start =() => {
const questions=commonQuestions.concat(managerQuestions)
    inquirer.prompt(questions).then((response)=>{
     
     
        const manager = new Manager(
        response.name,
        response.id,
        response.email,
        response.office,
             );
           
       



          addEmployee()
    });
    
}
const addEmployee =() => {
    const newEmployee = [
        {
          type: "list",
          name: "role",
          message:
            "Do you want to add an employee to your team? Please select our new employee's role.",
          choices: ["Engineer", "Intern", "No more Employees"],
        },
      ];
      inquirer.prompt(newEmployee).then((response) => {
        const role = response.role;
    switch (role) {
      case "Engineer":
        addEngineer();
        break;
      case "Intern":
        addIntern();
        break;
      default:
    }
        
      });

}

start()