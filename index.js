const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const questions = [
    {
        type: "input",
        name: "manager",
        message: "Enter manager's name",
       
      },

]
const start =() => {
    inquirer.prompt(questions).then((response)=>{

    })
}

start()