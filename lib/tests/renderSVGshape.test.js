const {Circle, Square, Triangle} = require("../renderSVGshape");

describe("Circle", () => {
    it("should render an SVG circle with the specified color", () => {
        const expectedCircle = `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="purple"/>`;
        const outputCircle = new Circle("purple").render();
        expect(outputCircle).toEqual(expectedCircle);
    })
})

describe("Square", () => {
    it("should render an SVG square with the specified color", () => {
        const expectedSquare = `<rect x="50" height="200" width="200" fill="gold"/>`;
        const outputSquare = new Square("gold").render();
        expect(outputSquare).toEqual(expectedSquare);
    })
})

describe("Triangle", () => {
    it("should render an SVG triangle with the specified color", () => {
        const expectedTriangle = `<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="pink"/>`;
        const outputTriangle = new Triangle("pink").render();
        expect(outputTriangle).toEqual(expectedTriangle);
    })
})