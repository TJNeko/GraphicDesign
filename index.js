const inquirer = require('inquirer');
const fs = require('fs');

function makeSVG(text, textColor, shape, shapeColor) {
    let shapeContent;
    switch (shape) {
        case 'circle':
            shapeContent = `<circle cx="150" cy="100" r="80" fill="${shapeColor}" />`;
            break;
        case 'triangle':
            shapeContent = `
                <polygon points="150,0 0,150 300,150" fill="${shapeColor}" />
            `;
            break;
        case 'square':
            shapeContent = `<rect x="50" y="0" width="200" height="200" fill="${shapeColor}" />`;
            break;
    }
        
    const svgContent = `
    <svg width="300" height="200">
    ${shapeContent}
      <text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" font-size="60" fill="${textColor}">
        ${text}
      </text>
    </svg>
  `;

  return svgContent;
}

inquirer
.prompt([
    {
        type: 'input',
        name: 'text',
        message: 'Enter 3 letters: '
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
])
.then(answers => {
    const { text, textColor, shape, shapeColor } = answers;
    const svgContent = makeSVG(text, textColor, shape, shapeColor);

    fs.writeFileSync('logo.svg', svgContent);
    console.log('Generated logo.svg');
})
.catch(error => {
  console.error(error);
});