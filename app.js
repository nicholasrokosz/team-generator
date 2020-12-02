const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const makeEmployee = require("./lib/makeEmployee");
const questions = require("./lib/questions");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const { inherits } = require("util");

const employees = [];

async function init() {
  const person = await inquirer.prompt(questions);
  const emp = makeEmployee(person);
  employees.push(emp);
  console.log(employees);
  if (person.another) {
    init();
  } else {
    console.log("All done!");
  }
}

init();

// const htmlTemplate = render(people);
// fs.writeFile(outputPath, htmlTemplate, () => {});
