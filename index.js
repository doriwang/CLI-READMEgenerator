const fs = require("fs")
const inquirer = require("./Develop/node_modules/inquirer")
const generateMarkdown = require("./Develop/utils/generateMarkdown")

const questions = [{
        type: "input",
        name: "email",
        message: "What is your GitHub email address?"
    },
    {
        type: "input",
        name: "username",
        message: "What is your GitHub username?"
    },
    {
        type: "input",
        name: "title",
        message: "What is your project's title?"
    },
    {
        type: "input",
        name: "description",
        message: "Include a short description of your project"
    },
    {
        type: "input",
        name: "projecturl",
        message: "What is your project's URL?"
    },
    {
        type: "input",
        name: "color",
        message: "Pick a color for your project's badge"
    },
    {
        type: "input",
        name: "dependencies",
        message: "What command should be run to install dependencies?",
        default: "npm i"
    },
    {
        type: "input",
        name: "test",
        message: "What command should be used to run tests?",
        default: "npm test"
    },
    {
        type: "input",
        name: "usage",
        message: "What does the user need to know about using the repo?"
    },
    {
        type: "checkbox",
        name: "license",
        message: "What license would your project use?",
        choices: ["APACHE 2.O", "MIT", "GPL 3.0", "BSD 3", "None"]
    },
    {
        type: "input",
        name: "contributing",
        message: "What does the use need to know about contributing to the repo?"
    },
    {
        type: "input",
        name: "credits",
        message: "List any collaborators with their links"
    }
];

function writeToFile(fileName, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, data, (err, data) => {
            if (err) {
                return reject(err);
            }
            resolve(data);
        });
    });
}

function init() {
    inquirer.prompt(questions).then(data => writeToFile("README.md", generateMarkdown(data), () => {
            console.log("success wrote to file")
        })
        .catch(err => {
            console.log(err)
        })
    )
}

init();