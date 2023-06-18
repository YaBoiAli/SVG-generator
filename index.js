const inquirer = require('inquirer');
const { Triangle, Circle, Square } = require('./lib/shapes');
const { exec } = require('child_process');

// Prompt the user for text input
function promptText() {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter text (up to 3 characters):',
      validate: (input) => {
        if (input.length <= 3) {
          return true;
        }
        return 'Please enter up to 3 characters.';
      },
    },
  ]);
}

// Prompt the user for the text color
function promptTextColor() {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'color',
      message: 'Enter text color (keyword or hexadecimal):',
    },
  ]);
}

// Prompt the user for the shape selection
function promptShape() {
  return inquirer.prompt([
    {
      type: 'list',
      name: 'shape',
      message: 'Choose a shape:',
      choices: ['Circle', 'Triangle', 'Square'],
    },
  ]);
}

// Prompt the user for the shape color
function promptShapeColor() {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'color',
      message: 'Enter shape color (keyword or hexadecimal):',
    },
  ]);
}

let shapeName = "";

let shapePos = "";

// Generate the SVG file
function generateSvgFile(text, textColor, shape, shapeColor) {
  let shapeInstance;
  switch (shape) {
    case 'Circle':
      shapeInstance = new Circle(shapeColor);
      shapeName = "circle";
      shapePos = "x='100' y='120'";

      break;
    case 'Triangle':
      shapeInstance = new Triangle(shapeColor);
      shapeName = "triangle";
      shapePos = "x='155' y='140'";
      break;
    case 'Square':
      shapeInstance = new Square(shapeColor);
      shapeName = "square";
      shapePos = "x='100' y='120'";
      break;
    default:
      console.error('Invalid shape selection');
      return;
  }

  const svg = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${shapeInstance.render()}<text ${shapePos} font-size="60" font-family="Times New Roman" text-anchor="middle" fill="${textColor}">${text}</text>`;
  const filePath = `./shapes/${shapeName}.svg`;
  require('fs').writeFileSync(filePath, svg);
  console.log('Generated logo.svg');

  // Open the SVG file in Visual Studio Code
  exec(`code -a "${filePath}"`, (error) => {
    if (error) {
      console.error('Error opening file in Visual Studio Code:', error);
    }
  });
}

// Run the application
async function runApplication() {
  const { text } = await promptText();
  const { color: textColor } = await promptTextColor();
  const { shape } = await promptShape();
  const { color: shapeColor } = await promptShapeColor();

  generateSvgFile(text, textColor, shape, shapeColor);
}

runApplication();