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

export function makeContainer(x, y, text, sizex, sizey, color, style, drag)
{
    const container = this.add.container(x, y)
    const rect = this.add.rectangle(0, 0, sizex, sizey, color);
    rect.setRounded(16).setStrokeStyle(2, 0x000000, 1);
    const textObj = this.add.text(0,0, text, style)
    textObj.setOrigin(0.5)
    container.add(rect)
    container.add(textObj)
    container.setSize(sizex, sizey)
    if(drag == true)
    {
        container.setInteractive({draggable: true})
    }
    container.labelText = textObj.text
    return container
}

export function checkAnswer(array ,answer)
{
    const joinedArray = array.join(" ")
    console.log(joinedArray)
    console.log(answer)

    if(joinedArray == answer)
    {
        return true
    }
}