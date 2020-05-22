function generateMarkdown(data) {
  return `
# **${data.title}**

  * [GitHub License]<img src = "https://img.shields.io/badge/license-${data.license}-${data.color}>
  * [Project URL](${data.projecturl})
  * [Project Repo](https://github.com/${data.username}/${data.title})

## **Project Description**

  ${data.description}

## **Table of Contents**
  * Installation Commands
    * To install dependencies: ${data.dependencies}
    * To run tests: ${data.test}
    
  * Usage
    ${data.usage}

  * License
    This project uses ${data.license} license.

  * Contributing
    ${data.contributing}

  * Credits
    ${data.credits}

## Questions
  If you have any questions or comments, please email ${data.email}
`;
}

module.exports = generateMarkdown;