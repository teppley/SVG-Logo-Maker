const filesystem = require('./node_modules/graceful-fs/graceful-fs')
const inquirer = require("inquirer");
const {Circle, Square, Triangle, Ellipse, Star} = require("./lib/shapes");

// Defines the Svg class 

class Svg {
    constructor(){
        this.textElement = ''
        this.shapeElement = ''
    }
    render(){

        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeElement}${this.textElement}</svg>`
    }
    setTextElement(text,color){
        this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`
    }
    setShapeElement(shape){
        this.shapeElement = shape.render()

    }
    
};

//Questions Array

const questions = [
  {
      type: "input",
      name: "text",
      message: "TEXT: Enter up to (3) Characters:",
  },
  {
      type: "input",
      name: "text-color",
      message: "TEXT COLOR: Enter a color (OR a hexadecimal number):",
  },
  {
      type: "input",
      name: "shape",
      message: "SHAPE-COLOR: Enter a color (OR a hexadecimal number):",
  },
  {
      type: "list",
      name: "pixel-image",
      message: "Which shape you would like?",
      choices: ["Circle", "Square", "Triangle", "Ellipse", "Star"],
  },
]

// Function to write data to file

function writeToFile(fileName, data) {
console.log("Writing [" + data + "] to file [" + fileName + "]")
  filesystem.writeFile(fileName, data, function (err) {
      if (err) {
          return console.log(err);
      }
      console.log("Congratulations, you have Generated a logo.svg!");
  });
}

async function init() {
  console.log("Starting...");
  var svgString = "";
  var svg_file = "logo.svg";

  // Prompt the user for answers

  const answers = await inquirer.prompt(questions);

  // Create an instance of Svg class

  const svg = new Svg();

  // Set the text element of Svg class

  svg.setTextElement(answers.text, answers['text-color']);

  // Set the shape element based on user's choice

  switch (answers['pixel-image']) {
    case "Circle":
      const circle = new Circle();
      circle.setColor(answers.shape);
      svg.setShapeElement(circle);
      break;
    case "Square":
      const square = new Square();
      square.setColor(answers.shape);
      svg.setShapeElement(square);
      break;
    case "Triangle":
      const triangle = new Triangle();
      triangle.setColor(answers.shape);
      svg.setShapeElement(triangle);
      break;
      case "Ellipse":
      const ellipse = new Ellipse();
      ellipse.setColor(answers.shape);
      svg.setShapeElement(ellipse);
      break;
      case "Star":
      const star = new Star();
      star.setColor(answers.shape);
      svg.setShapeElement(star);
      break;
    default:
      console.log("Invalid image choice");
      return;
  }

  // Render the SVG and write to file

  svgString = svg.render();
  writeToFile(svg_file, svgString);
}

init()