const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const { qMemberInfo, qAddMember, qRoleSpecific } = require(`./utils/questions`);

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const Employee = require("./lib/Employee");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
// ------- OK

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!
// ------- OK

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

async function init() {
    const addedMembers = [];
    let hasMore = true;

    try {
        while (hasMore) {
            const memberResponse = await inquirer.prompt(qMemberInfo);
            switch (memberResponse.role){
                case 'Intern':
                    const school = (await inquirer.prompt(qRoleSpecific[0])).school;
                    addedMembers.push(new Intern(memberResponse.name, memberResponse.id, memberResponse.email, school));
                    break;
                case 'Engineer':
                    const github = (await inquirer.prompt(qRoleSpecific[1])).github;
                    addedMembers.push(new Engineer(memberResponse.name, memberResponse.id, memberResponse.email, github));
                    break;
                case 'Manager':
                    const officeNumber = (await inquirer.prompt(qRoleSpecific[2])).office_number;
                    addedMembers.push(new Manager(memberResponse.name, memberResponse.id, memberResponse.email, officeNumber));
                    break;
                default:
                    addedMembers.push(new Employee(memberResponse.name, memberResponse.id, memberResponse.email));
                    break;
            }
            hasMore = (await inquirer.prompt(qAddMember)).hasMore === 'yes';
        }
    } catch (e) {
        console.log(e)
    }

    console.log(render(addedMembers))

}

init();


