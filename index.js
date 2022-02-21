const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const createHTML = require("./src/createHTML");
const workforce = [];
let commonQuestions = []
const setCommonQuestions = (position) => {
    commonQuestions =[
        {
            type: "input",
            name: "name",
            message: "Enter " + position + "'s name",
           
          },
         {type: "input",
          name: "id",
          message: "Enter " + position + "'s ID number",
        },
          
        {
          type: "input",
          name: "email",
          message: "Enter " + position + "'s email address",
          
        }, 
      
    ]
}

const managerQuestions = [

    {
      type: "input",
      name: "office",
      message: "Enter manager's office number",
    }
]
const engineerQuestions = [

    {
      type: "input",
      name: "git",
      message: "Enter engineers's github username",
    }
]
const internQuestions = [

    {
      type: "input",
      name: "school",
      message: "Enter intern's school",
    }
]

const start =() => {
    setCommonQuestions("manager")
const questions=commonQuestions.concat(managerQuestions)
    inquirer.prompt(questions).then((response)=>{
        
     
        const manager = new Manager(
        response.name,
        response.id,
        response.email,
        response.office,
        "Manager"
             );
             workforce.push(manager);
          addEmployee()
    });
    
}
const addEmployee =() => {
    const newEmployee = [
        {
          type: "list",
          name: "role",
          message:
            "Do you want to add an employee to your team? Please select your new employee's role.",
          choices: ["Engineer", "Intern", "No more Employees"],
        },
      ];
      inquirer.prompt(newEmployee).then((response) => {
        const role = response.role;
    switch (role) {
      case "Engineer":
       
        setCommonQuestions("engineer")
        addEngineer();
        break;
      case "Intern":
       
        setCommonQuestions("intern")
        addIntern();
        break;
      default:
        makeHTML();
    }
        
      });

}

const addEngineer =() => {
    const questions=commonQuestions.concat(engineerQuestions)
        inquirer.prompt(questions).then((response)=>{
         
         
            const engineer = new Engineer(
            response.name,
            response.id,
            response.email,
            response.office,
            "Engineer",
                 );
                 workforce.push(engineer);
              addEmployee()
        });
        
    }

    const addIntern =() => {
        const questions=commonQuestions.concat(internQuestions)
            inquirer.prompt(questions).then((response)=>{
             
             
                const intern = new Intern(
                response.name,
                response.id,
                response.email,
                response.school,
                "Intern",
                     );
                     workforce.push(intern);
                  addEmployee()
            });
            
        }
        function makeHTML() {
            fs.writeFile("./dist/workforce.html", createHTML(workforce), (error) => {
              error ? console.log(error) : console.log("workforce.html created");
            });
            console.log(workforce);
          }
start()