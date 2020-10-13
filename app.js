const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

const questionPrompt = [

    {
        type: "list",
        name: "begin",
        message: "Are you hiring new employee?",
        choices: [
            "Yes",
            "No"
        ]
    },
    {
        type: "input",
        message: "What is your name?",
        name: "name"

    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email",
    },
    {
        type: "input",
        message: "What is your employee ID number?",
        name: "number",
    },
    {
        type: "list",
        message: "What is your role?",
        name: "role",
        choices: [
            "Engineer",
            "Intern",
            "Manager",
            "Other"
        ],
    },
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "github",

    },
    {
        type: "input",
        message: "Where do you attend school?",
        name: "school",
    },
    {
        type: "input",
        message: "What is your office number?",
        name: "officeNumber",
    }
]
const team = [];

function teamBuilder() {
inquirer.prompt(questionPrompt);
}
teamBuilder();


