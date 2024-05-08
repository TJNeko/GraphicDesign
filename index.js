const inquirer = require('inquirer');
const fs = require('fs');

inquirer
.prompt([
    {
        type: 'input',
        name: 'text',
        message: 'Enter up to 3 letters: '
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter a color or hexidecimal code: ',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Pick a shape:',
        choices: ['circle', 'triangle', 'square']
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter a color or hexidecimal code: ',
    }
]);