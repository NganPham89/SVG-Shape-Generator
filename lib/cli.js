const inquirer = require("inquirer");
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt');

inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt);
const { writeFile } = require("fs/promises");

const SVGtext = require("./renderSVGtext.js");

const SVGshape = require("./renderSVGshape.js");

const questions = [
    {
        type: "maxlength-input",
        name: "text",
        message: "Enter text for your logo",
        maxLength: 3
    },
    {
        type: "input",
        name: "textColor",
        message: "Enter a color for your text (keyword or hex code)",
        default: "white",
    },
    {
        type: "list",
        name: "shape",
        message: "Choose a shape for your logo from the list",
        choices: ["circle", "triangle", "square"],
    },
    {
        type: "input",
        name: "shapeColor",
        message: "Enter a color for your shape (keyword or hex code)",
        default: "black",
    },
];

class SVG {
    generateSVGfile() {
        inquirer
            .prompt(questions)
            .then(({ text, textColor, shape, shapeColor }) => {
                const logo = new SVGtext(text, textColor);
                const svgText = logo.render();
                const svgShape = generateSVGshape(shape, shapeColor);
                const generatedSVG = generateCompleteSVG(svgText, svgShape);

                writeFile("./examples/generated-logo-sample.svg", generatedSVG, (err) => {
                    console.log(err);
                })
                console.log("SVG file successfully generated");
            })
    };
}


function generateSVGshape(shape, shapeColor) {
    let svgShape;
    switch (shape) {
        case "circle":
            const Circle = new SVGshape.Circle(shapeColor);
            svgShape = Circle.render();
            break;
        case "triangle":
            const Triangle = new SVGshape.Triangle(shapeColor);
            svgShape = Triangle.render();
            break;
        case "square":
            const Square = new SVGshape.Square(shapeColor);
            svgShape = Square.render();
            break;
    }
    return svgShape;
}

function generateCompleteSVG(svgText, svgShape) {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    ${svgShape}
  
    ${svgText}
  
    </svg>
    `;
}

module.exports = SVG;