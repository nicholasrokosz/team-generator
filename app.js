const makeEmployee = require("./lib/makeEmployee");
const makeFile = require("./lib/makeFile");
const questions = require("./lib/questions");
const inquirer = require("inquirer");

const employees = [];

const init = async () => {
  const person = await inquirer.prompt(questions);
  const emp = makeEmployee(person);
  employees.push(emp);
  if (person.another) init();
  else makeFile(employees);
};

init();
