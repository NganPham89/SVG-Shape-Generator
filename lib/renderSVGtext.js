class SVGtext {
    constructor(text, textColor) {
        this.text = text;
        this.textColor = textColor;
    }

    render() {
        return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
    }
}

module.exports = SVGtext;
