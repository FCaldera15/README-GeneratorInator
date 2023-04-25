import inquirer from "inquirer";
import fs from "fs/promises";


inquirer
let { title, description, license, usage, installation, contributing, username, email } = await inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: "What is the name of your project?",
        },
        {
            type: 'input',
            name: 'description',
            message: "Write a description of your project."
        },
        {
            type: 'list',
            name: 'license',
            message: 'what type of license do you want to use?',
            choices: ['Apache 2.0', 'Boost Software 1.0', 'BSD 3-Clause']
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What is the usage for this project?(use this space to show usesful examples of how a project can be used, Ex. screenshots, code examples and demos)'
        },
        {
            type: 'input',
            name: 'installation',
            message: "what particular programming language version or operating system or any dependencies that have to be installed in order for the project to work properly?"
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'State if you are open to contributions and what your requirements are for accepting them.'
        },
        {
            type: 'input',
            name: 'username',
            message: "What is your Github username?"
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?'
        }

    ])


console.log(description)
console.log(title)
console.log(license)
console.log(usage)
console.log(installation)
console.log(contributing)
console.log(username)
console.log(email)




let readmeText = `# Project Name: ${title}

# Table of Content
<ul>
<li><a href="#description">Description</a></li>
<li><a href="#installation">Installation</a></li>
<li><a href="#usage">Usage</a></li>
<li><a href="#license">License</a></li>
<li><a href="#contributing">Contributing</a></li>
<li><a href="#questions">Questions</a></li>
</ul>

# Description
${description}

# Installation
${installation}

# Usage
${usage}

# License
${generateLicense(license)}

# Contributing
${contributing}

# Questions
Username: ${username} <br />
Link to Github profile: [github.com/${username}](github.com/${username}). <br />
For further information or questions you can contact me at [${email}](${email}).

`

fs.writeFile("README.md", readmeText)

function generateLicense(license) {

    if (license === "Apache 2.0") {
        return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
    }
    if (license === "Boost Software 1.0") {
        return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"
    }
    if (license === "BSD 3-Clause") {
        return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
    }
}

