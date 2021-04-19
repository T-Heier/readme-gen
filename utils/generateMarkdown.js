// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const badge = ''
    // if (license == 'MIT') {

    // }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let link = ""
  if (license == "MIT") {
    link = "https://choosealicense.com/licenses/mit/"
  } else if (license == "APACHE 2.0") {
    link = "https://choosealicense.com/licenses/apache-2.0/"
  } else if (license == "GPL 3.0") {
    link = "https://choosealicense.com/licenses/gpl-3.0/"
  } else if (license == "BSD 3") {
    link = "https://choosealicense.com/licenses/bsd-3-clause/"
  } else link = "";

  console.log(link)
  return link;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(link) {
  return link
}




// TODO: Create a function to generate markdown for README
function generateMarkdown(data, license) {

  let link = ""
  if (license == "MIT") {
    link = "https://choosealicense.com/licenses/mit/"
  } else if (license == "APACHE 2.0") {
    link = "https://choosealicense.com/licenses/apache-2.0/"
  } else if (license == "GPL 3.0") {
    link = "https://choosealicense.com/licenses/gpl-3.0/"
  } else if (license == "BSD 3") {
    link = "https://choosealicense.com/licenses/bsd-3-clause/"
  } else link = "";
  console.log(link)


  return `# ${data.projectName}

  # Table of contents

  - [Repo description](#description)
  - [License](#license)
  - [Install](#installation)
  - [Testing](#testing)
  - [User Contribution](#User-Contribution)
  - [User Information](#user-Information)
  - [Contact Information](#contact-me)

  # Description

  ${data.desciption}

  # License

  [${data.license}](${link})


  # Installation

  ${data.installDep}

  # Testing

  ${data.tests}

  # User Contribution

  ${data.userContrib}

  # User Information

  ${data.userInfo}

  # Contact me!

  - ${data.user}
  - ${data.email}

`;
}

module.exports = generateMarkdown;
