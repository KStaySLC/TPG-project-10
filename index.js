const inquirer = require ('inquirer'); 

inquirer.prompt([
    {
        type: "input",
        name:'addManager',
        message:'Please enter your name, employee ID, email address, and office number.'
    },
    {
        type: 'list',
        name:'addEngineerOrIntern',
        message:'Which would you like to perform next?',
        choices:['Engineer','Intern','Finish Building My Team']
    } // Each option has to have information, the html generator cannot launch until all
    // the questions have been answered.  Each employee requires different information. 
])
.then(answers => {
    switch(answers) {
        case addEngineerOrIntern = 'Engineer': //have to fill out data for Engineer and then re-ask if they wanna add anyone else to the team
            //addEnginner();
            addEngineerOrIntern;
        case addEngineerOrIntern = 'Intern': //have to fill out data for Intern and then re-ask if they wanna add anyone else to the team
            console.info('Case:Intern',addEngineerOrIntern)
            //addIntern();
            addEngineerOrIntern;
        case addEngineerOrIntern = 'Finish Building My Team': //break out of loop and build HTML page for team.
            break;
    }
    console.info('Answer:', answers.addManager);
    //console.info('Answer2:', answers.addEngineerOrIntern);
});

const generateDoc = 
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>`
async function createFile(generateDoc){
    try {
        const content = generateDoc;
        console.log('content');
        await fs.writeFile("index.html", generateDoc);
    } catch (err) {
        console.log('err', err);
    }
};