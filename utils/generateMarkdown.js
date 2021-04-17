// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectName}

  ## Table of contents

  - [Repo description](${data.description})
  - [License](${data.license})
  - [Install](${data.installDep})
  - [Testing](${data.tests})
  - [User Contribution](${data.userContrib})
  - [User Information](${data.userInfo})
  - [Contact Information](${data.email})

  ## Description

  ${data.description}

  ## License

  ${data.license}

  ## Installation

  ${data.installDep}

  ## Testing

  ${data.tests}

  ## User Contribution

  ${data.userContrib}

  ## User Information

  ${data.userInfo}

  ## Contact me!

  - ${data.user}
  - ${data.email}

`;
}

module.exports = generateMarkdown;
