const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const initialQuestions = [
    {
        type: "input",
        name: "manager",
        message: "Enter manager's name",
       
      },
     {type: "input",
      name: "id",
      message: "Enter manager's ID number",
    },
      
    {
      type: "input",
      name: "email",
      message: "Enter manager's email address",
      
    },
    {
      type: "input",
      name: "office",
      message: "Enter manager's office number",
    }
]
const start =() => {
    inquirer.prompt(initialQuestions).then((response)=>{
        const manager = new Manager(
            response.name,
            response.id,
            response.email,
            response.office
          );
    })
}

start()