const questions = [
  {
    name: "name",
    message: "Enter the employee's name: ",
  },
  {
    name: "id",
    message: "Enter the employee's id: ",
  },
  {
    name: "email",
    message: "Enter the employee's email: ",
  },
  {
    name: "employeeType",
    message: "Select type of employee: ",
    type: "list",
    choices: ["Manager", "Engineer", "Intern"],
  },
  {
    name: "officeNumber",
    message: "Enter the manager's office number:",
    when: (answers) => answers.employeeType === "Manager",
  },
  {
    name: "github",
    message: "Enter the engineer's github username:",
    when: (answers) => answers.employeeType === "Engineer",
  },
  {
    name: "school",
    message: "Enter the intern's school name:",
    when: (answers) => answers.employeeType === "Intern",
  },
  {
    name: "another",
    message: "Would you like to continue? ",
    type: "confirm",
  },
];

module.exports = questions;
