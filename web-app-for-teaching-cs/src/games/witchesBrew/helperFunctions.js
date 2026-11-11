import Phaser from "phaser";

export function makeShape(x, y, width, height, color) {
    const rect = this.add.rectangle(x, y, width, height, color);  
    return rect;
}

export function addText(x, y, text, style) {
    const textObj = this.add.text(x, y, text, style);
    textObj.setOrigin(0.5)
    return textObj;
}

export function makeContainer(x, y, rect, text, sizex, sizey)
{
    const container = this.add.container(x, y)
    container.add(rect)
    container.add(text)
    container.setSize(sizex, sizey)
    container.setInteractive({draggable: true})
    container.labelText = text.text
    return container
}