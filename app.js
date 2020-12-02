const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const questions = require("./lib/questions");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const { inherits } = require("util");

let people = [];
// let anotherOne = false;
// const getInfo = () => {
//   inquirer.prompt(questions).then((input) => {
//     let {
//       name,
//       id,
//       email,
//       employeeType,
//       officeNumber,
//       github,
//       school,
//       another,
//     } = input;
//     let e;
//     if (employeeType === "Manager") {
//       e = new Manager(name, id, email, officeNumber);
//     } else if (employeeType === "Engineer") {
//       e = new Engineer(name, id, email, github);
//     } else if (employeeType === "Intern") {
//       e = new Intern(name, id, email, school);
//     }
//     people.push(e);
//     if (another) anotherOne = true;
//   });
// };

const collectInputs = async (inputs = []) => {
  const { another, ...answers } = await inquirer.prompt(questions);
  const newInputs = [...inputs, answers];
  return another ? collectInputs(newInputs) : newInputs;
};

const main = async () => {
  const inputs = await collectInputs();
  // let e;
  // if (employeeType === "Manager") {
  //   e = new Manager(name, id, email, officeNumber);
  // } else if (employeeType === "Engineer") {
  //   e = new Engineer(name, id, email, github);
  // } else if (employeeType === "Intern") {
  //   e = new Intern(name, id, email, school);
  // }
  // people.push(e);
};

main();

// const htmlTemplate = render(people);
// fs.writeFile(outputPath, htmlTemplate, () => {});
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
