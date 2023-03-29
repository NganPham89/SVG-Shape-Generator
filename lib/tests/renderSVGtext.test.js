const SVGtext = require("../renderSVGtext");

describe("SVGtext", () => {
    it("should render the text element for SVG file with text and color", () => {
        const expectedSVGtext = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="white">ABC</text>`;
        const outputSVGtext = new SVGtext("ABC", "white").render();
        expect(outputSVGtext).toEqual(expectedSVGtext);
    });
});