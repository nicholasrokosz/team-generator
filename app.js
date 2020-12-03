const makeEmployee = require("./lib/makeEmployee");
const makeFile = require("./lib/makeFile");
const { questions, managerQs } = require("./lib/questions");
const inquirer = require("inquirer");

const employees = [];

const addEmployee = async () => {
  const person = await inquirer.prompt(questions);
  employees.push(makeEmployee(person));
  person.another ? addEmployee() : makeFile(employees);
};

const init = async () => {
  const person = await inquirer.prompt(managerQs);
  employees.push(makeEmployee(person));
  console.log("-----------------------------");
  addEmployee();
};

init();
