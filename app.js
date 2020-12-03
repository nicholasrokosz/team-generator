const makeEmployee = require("./lib/makeEmployee");
const render = require("./lib/htmlRenderer");
const questions = require("./lib/questions");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const employees = [];

const init = async () => {
  const person = await inquirer.prompt(questions);
  const emp = makeEmployee(person);
  employees.push(emp);
  if (person.another) init();
  else {
    const htmlTemplate = render(employees);
    fs.writeFile(outputPath, htmlTemplate, (err) => {
      err ? console.log(err) : console.log("Success!");
    });
  }
};

init();
