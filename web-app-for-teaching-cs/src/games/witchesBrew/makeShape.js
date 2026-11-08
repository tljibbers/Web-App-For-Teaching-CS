import Phaser from "phaser";

export function makeShape(x, y, width, height, color) {
    const rect = this.add.rectangle(x, y, width, height, color);  
    return rect;
}

export function addText(x, y, text, style) {
    const textObj = this.add.text(x, y, text, style);
    return textObj;
}