// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your github username?',
        name: 'user',
    },
    {
        type: 'input',
        message: 'What is your email address',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is the name of your project?',
        name: 'projectName',
    },
    {
        type: 'input',
        message: 'Write a description of your project?',
        name: 'desciption',
    },
    {
        type: 'list',
        message: 'What license should your project have?',
        name: 'license',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
    },
    {
        type: 'input',
        message: 'What command should run to install dependencies?',
        default: 'npm i',
        name: 'installDep',
    },
    {
        type: 'input',
        message: 'What command should run to test?',
        default: 'npm test',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'What should user know about using the repo?',
        name: 'userInfo',
    },
    {
        type: 'input',
        message: 'What should the user know about contributing to the project?',
        name: 'userContrib'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)

    .then((data) => {
        const fileName = `${data.projectName}.md`
        generateMarkdown(data)
        const dataLicense = data.license
        

        fs.writeFile(fileName, (generateMarkdown(data)), (err) => {
            if (err) {
              console.error(err)
            }
        });
    })
}

// Function call to initialize app
init();
