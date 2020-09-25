const qMemberInfo = [
    {
        type: 'input',
        name: 'name',
        message: `What is the team member's name?`
    },

    {
        type: 'input',
        name: 'id',
        message: `What is the team member's id?`
    },

    {
        type: 'input',
        name: 'email',
        message: `What is the team member's email?`
    },

    {
        type: 'list',
        name: 'role',
        message: `What is the team member's role?`,
        choices: ['Intern', 'Engineer', 'Manager']
    }
]

const qAddMember = [
    {
        type: 'list',
        name: 'hasMore',
        message: 'Would you like to add more members?',
        choices: ['yes', 'no']
    }
]

const qRoleSpecific = [
    // Intern
    [
        {
            type: 'input',
            name: 'school',
            message: 'What is your school name?'
        }
    ],
    // Engineer
    [
        {
            type: 'input',
            name: 'github',
            message: 'What is your github username?'
        }
    ],
    // Manager
    [
        {
            type: 'input',
            name: 'office_number',
            message: 'How big is your office?'
        }
    ]
]

module.exports = { qMemberInfo, qAddMember, qRoleSpecific };