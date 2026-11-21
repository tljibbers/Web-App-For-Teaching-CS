import Phaser from "phaser";
import backgroundImage from "./game-assets/if-else-game-background.png";
import cauldron from "./game-assets/cauldron.png";
import click from "./sound-assets/mixkit-single-key-press-in-a-laptop-2541.wav"
import drop from "./sound-assets/mixkit-arcade-player-select-2036.wav"
import winSound from "./sound-assets/mixkit-game-level-completed-2059.wav"
import loseSound from "./sound-assets/mixkit-cartoon-whistle-game-over-606.wav"
import startMusic from "./sound-assets/mixkit-dry-gin-868.mp3"
import level1Music from "./sound-assets/mixkit-youre-like-caviar-895.mp3"
import level2Music from "./sound-assets/mixkit-chill-bro-494.mp3"
import level3Music from "./sound-assets/mixkit-danger-495.mp3"
import level4Music from "./sound-assets/mixkit-sleepy-cat-135.mp3"
import level5Music from "./sound-assets/mixkit-smooth-jazz-640.mp3"
import { makeContainer, checkAnswer } from "./helperFunctions";

let levelController = 0
let timeElapsed = 0
const levelArray = ['level1Scene', 'level2Scene', 'level3Scene', 'level4Scene', 'level5Scene']

export class startScene extends Phaser.Scene {
    constructor() {
        super("startScene");
    }

    preload() {
        this.load.audio('startMusic', startMusic)
        this.load.audio('click', click)
        this.load.audio('dropSound', drop)
    }

    create() {
        this.sound.setVolume(0.1)
        this.sound.play('startMusic')
        this.text = this.add.text(320, 60, "Witches Brew!", { fontSize: "32px", fill: "#ffffff" });
        this.text.setOrigin(0.5);

        this.text.setInteractive();
        this.text.on('pointerdown', () => {
            console.log('text clicked');
        })

        this.tweens.add({
            targets: this.text,
            scale: 1.1,
            duration: 1000,
            yoyo: true,
            repeat: -1,
            ease: 'Sine.easeInOut'
        })

        this.startText = this.add.text(320, 180, "Start", { fontSize: "24px", fill: "#ffffff" });
        this.startText.setOrigin(0.5);
        this.startText.setInteractive({ cursor: 'pointer' });
        this.startText.on('pointerover', () => {
            this.startText.setStyle({ fill: 'rgb(0, 255, 85)' });
        });
        this.startText.on('pointerout', () => {
            this.startText.setStyle({ fill: '#fff' });
        });
        
        this.startText.on('pointerdown', () => {
            this.scene.stop()
            this.scene.start('level1Scene');
        });

        this.instructionsText = this.add.text(320, 220, "Instructions", { fontSize: "24px", fill: "#ffffff" });
        this.instructionsText.setOrigin(0.5);
        this.instructionsText.setInteractive({ cursor: 'pointer' });
        this.instructionsText.on('pointerdown', () => {
            this.scene.switch('instructionsScene');
        });
        this.instructionsText.on('pointerover', () => {
            this.instructionsText.setStyle({ fill: 'rgb(0, 255, 85)' });
        });
        this.instructionsText.on('pointerout', () => {
            this.instructionsText.setStyle({ fill: '#fff' });
        });

        this.settingsText = this.add.text(320, 260, "Settings", { fontSize: "24px", fill: "#ffffff" });
        this.settingsText.setOrigin(0.5);
        this.settingsText.setInteractive({ cursor: 'pointer' });
        this.settingsText.on('pointerdown', () => {
            console.log('settings text clicked');
        });
        this.settingsText.on('pointerover', () => {
            this.settingsText.setStyle({ fill: 'rgb(0, 255, 85)' });
        });
        this.settingsText.on('pointerout', () => {
            this.settingsText.setStyle({ fill: '#fff' });
        });

        this.verNum = this.add.text(580, 340, "Version 0.1", {fontSize: "12px", fill: "#ffffff"}).setOrigin(0.5)
    }

    update(time, delta) {

    }
}

export class instructionsScene extends Phaser.Scene {
    constructor() {
        super("instructionsScene");
    }

    preload() {
        // Preload assets for the instructions scene
    }  
    create() {
        this.text = this.add.text(320, 100, "You are a production witch that brews and sells potions. Today you've got more orders than usual, so drag and drop the right parts of if statements into the cauldron to brew the right potions!", { fontSize: "24px", fill: "#ffffff", wordWrap: { width: 600 }   });
        this.text.setOrigin(0.5);

        this.backText = this.add.text(320, 300, "Back To Start Menu", { fontSize: "24px", fill: "#ffffff" });
        this.backText.setOrigin(0.5);
        this.backText.setInteractive({ cursor: 'pointer' });
        this.backText.on('pointerdown', () => {
            this.scene.switch('startScene');
        });
    }
}

export class pauseScene extends Phaser.Scene {
    constructor() {
        super("pauseScene");
    }
    
    create() {

        this.overlay = this.add.rectangle(320, 180, 640, 360, 0x000000, 0.5);
        this.text = this.add.text(320, 180, "Game Paused", { fontSize: "32px", fill: "#ffffff" });
        this.text.setOrigin(0.5);

        this.resumeText = this.add.text(320, 260, "Resume", { fontSize: "24px", fill: "#ffffff" });
        this.resumeText.setOrigin(0.5);

        this.restartLevelText = this.add.text(320, 300, "Restart Level", { fontSize: "24px", fill: "#ffffff" });
        this.restartLevelText.setOrigin(0.5);

        this.text2 = this.add.text(320, 220, "Back to Start", { fontSize: "24px", fill: "#ffffff" });
        this.text2.setOrigin(0.5);

        this.resumeText.setInteractive({ cursor: 'pointer' });
        this.resumeText.on('pointerdown', () => {
            this.scene.stop();
            this.scene.resume(levelArray[levelController])
        });

        this.text2.setInteractive({ cursor: 'pointer' });
        this.text2.on('pointerdown', () => {
            this.sound.stopAll()
            this.scene.stop()
            this.scene.stop(levelArray[levelController])

            levelController = 0;
            timeElapsed = 0;
            this.scene.start('startScene')
        });

        this.resume = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
        this.input.keyboard.on('keydown-R', () => {
            this.scene.stop();
            this.scene.resume(levelArray[levelController])
        });

        this.restartLevelText.setInteractive({ cursor: 'pointer' });
        this.restartLevelText.on('pointerdown', () => {
            this.scene.stop();
            this.sound.stopAll();
            this.scene.stop(levelArray[levelController])
            this.scene.start(levelArray[levelController])
        });
    }
}

export class level1Scene extends Phaser.Scene {
    constructor() {
        super("level1Scene");
    }

    preload() {
       this.load.image('background', backgroundImage);
       this.load.image('cauldron', cauldron);
       this.load.audio('level1Music', level1Music)
    }

    create() {
        this.sound.get('startMusic').stop()
        this.sound.play('level1Music')
        this.textArray = []
        this.answer = "if cupidTears == 2 and redCrystals >= 4 then craftLovePotion()"
        this.altAnswer = "if redCrystals >= 4 and cupidTears == 2 then craftLovePotion()"
        this.wordCount = 0

        this.add.image(0, 0, 'background').setOrigin(0, 0);
        this.add.image(320, 300, 'cauldron').setOrigin(0.5, 0.5);

        this.container = makeContainer.call(this, 85, 50, '==', 50, 50, 0xff0000, {fontSize: "13px", fill: "ffffff"}, true)
        this.container2 = makeContainer.call(this, 140, 50, '3', 50, 50, 0xff0000, {fontSize: "13px", fill: "ffffff"}, true)
        this.container3 = makeContainer.call(this, 195, 50, 'else', 50, 50, 0xff0000, {fontSize: "13px", fill: "ffffff"}, true)
        this.container4 = makeContainer.call(this, 250, 50, '2', 50, 50, 0xff0000, {fontSize: "13px", fill: "ffffff"}, true)
        this.container5 = makeContainer.call(this, 320, 50, 'cupidTears', 80, 50, 0xff0000, {fontSize: "13px", fill: "ffffff"}, true)
        this.container6 = makeContainer.call(this, 390, 50, 'if', 50, 50, 0xff0000, {fontSize: "13px", fill: "ffffff"}, true)
        this.container7 = makeContainer.call(this, 445, 50, '>=', 50, 50, 0xff0000, {fontSize: "13px", fill: "ffffff"}, true)
        this.container8 = makeContainer.call(this, 500, 50, 'and', 50, 50, 0xff0000, {fontSize: "13px", fill: "ffffff"}, true)
        this.container9 = makeContainer.call(this, 555, 50, '2', 50, 50, 0xff0000, {fontSize: "13px", fill: "ffffff"}, true)

        this.container10 = makeContainer.call(this, 125, 110, '4', 50, 50, 0xff0000, {fontSize: "13px", fill: "ffffff"}, true)
        this.container11 = makeContainer.call(this, 180, 110, '<=', 50, 50, 0xff0000, {fontSize: "13px", fill: "ffffff"}, true)
        this.container12 = makeContainer.call(this, 235, 110, 'then', 50, 50, 0xff0000, {fontSize: "13px", fill: "ffffff"}, true)
        this.container13 = makeContainer.call(this, 290, 110, 'or', 50, 50, 0xff0000, {fontSize: "13px", fill: "ffffff"}, true)
        this.container14 = makeContainer.call(this, 345, 110, '5', 50, 50, 0xff0000, {fontSize: "13px", fill: "ffffff"}, true)
        this.container15 = makeContainer.call(this, 400, 110, 'not', 50, 50, 0xff0000, {fontSize: "13px", fill: "ffffff"}, true)
        this.container16 = makeContainer.call(this, 490, 110, 'craftLovePotion()', 120, 50, 0xff0000, {fontSize: "11px", fill: "ffffff"}, true)

        this.container17 = makeContainer.call(this, 320, 170, 'redCrystals', 80, 50, 0xff0000, {fontSize: "11px", fill: "ffffff"}, true)

        this.ingredientContainer = makeContainer.call(this, 220, 320, 'Ingredients', 100, 30, 0x80FF80, {fontSize: "13px", fill: "ffffff"}, false)
        this.ingredientContainer.setInteractive({cursor: 'pointer'})
        this.ingredientContainer.on('pointerdown', () => {
            this.rect = this.add.rectangle(0, 0, 250, 640, 0xf6eee3)
            this.title = this.add.text(0, -130, "Love Potion Ingredients:", {fontSize: "13px", fill: "ffffff"}).setOrigin(0.5)
            this.close = this.add.text(90, -150, "Close", {fontSize: "13px", fill: "ffffff"}).setOrigin(0.5)
            this.close.setInteractive({cursor: 'pointer'})
            this.ingredients1 = this.add.text(0, -100, "1. Cupid Tears: 2", {fontSize: "11px", fill: "ffffff"}).setOrigin(0.5)
            this.ingredients2 = this.add.text(0, -60, "2. Red Crystals: At least 4", {fontSize: "11px", fill: "ffffff"}).setOrigin(0.5)
            this.ingredients3 = this.add.text(0, -20, "If conditions pass: \nCraft Love Potion", {fontSize: "11px", fill: "ffffff"}).setOrigin(0.5)
            this.container = this.add.container(-150, 180)
            this.container.add([this.rect, this.title, this.close, this.ingredients1, this.ingredients2, this.ingredients3])
            this.container.setSize(250, 640)
            this.ingredientContainer.input.enabled = false;

            this.tweens.add({
                targets: this.container,
                x: 120,
                y: 180,
                alpha: 1,
                duration: 1000,
                ease: 'Power2'
            })

            this.close.on('pointerdown', () => {
                this.tweens.add({
                    targets: this.container,
                    x:-150,
                    y:180,
                    alpha: 0,
                    duration: 1000,
                    ease: 'Power2'
                })
                setTimeout(() => {
                    this.container.destroy(true)
                    this.ingredientContainer.input.enabled = true;
                }, 1000)
                
            })
        })
        this.submitAnswerContainer = makeContainer.call(this, 410, 320, 'Mix!', 80, 30, 0x80FF80, {fontSize: "13px", fill: "ffffff"}, false)
        this.submitAnswerContainer.setInteractive({cursor: 'pointer'})
        this.submitAnswerContainer.on('pointerdown', () => {
            console.log('test')
            if(this.wordCount != 0)
            {
                this.rightAnswer = checkAnswer(this.textArray, this.answer)
                if(this.rightAnswer == true)
                {
                   this.sound.stopAll()
                   this.scene.launch('levelWinScene')
                   this.scene.bringToTop('levelWinScene')
                   this.scene.pause(); 
                }

            }
        })


        this.zone = this.add.zone(320, 300, 100, 100);
        this.zone.setRectangleDropZone(100, 100);

        this.input.on('dragstart', (pointer, gameObject) => {
            this.sound.play('click')
        });

        this.input.on('drag', (pointer, gameObject, dragX, dragY) => {
            gameObject.x = dragX;
            gameObject.y = dragY;
        });

        this.input.on('drop', (pointer, gameObject, dropZone) => {
            this.sound.play('dropSound')
            this.textArray.push(gameObject.labelText)
            console.log(this.textArray)
            gameObject.destroy()
            this.wordCount++
            console.log(this.wordCount)
        })

        this.input.on('dragend', (pointer, gameObject, dropped) => {
            if(!dropped) {
                gameObject.x = gameObject.input.dragStartX;
                gameObject.y = gameObject.input.dragStartY;
            }
        })

        this.input.keyboard.on('keydown-P', () => {
            this.scene.launch('pauseScene');
            this.scene.bringToTop('pauseScene');
            this.scene.pause();
        });
    }

    update(time, delta) {
        timeElapsed += delta;
    }
}

export class levelWinScene extends Phaser.Scene {
    constructor() {
        super("levelWinScene")
    }

    preload() {
        this.load.audio('winSound', winSound)
    }

    create() {
        this.sound.play('winSound')
        this.overlay = this.add.rectangle(320, 180, 640, 360, 0x000000, 0.5);
        this.text = this.add.text(320, 60, "Level Complete!", { fontSize: "32px", fill: "#ffffff" }).setOrigin(0.5);
        this.nextLevel= this.add.text(320, 260, "Next Level", { fontSize: "24px", fill: "#ffffff" }).setOrigin(0.5);
        this.nextLevel.setInteractive();
        this.nextLevel.on('pointerdown', () => {
            this.scene.stop()
            this.scene.stop(levelArray[levelController])
            levelController++
            this.scene.start(levelArray[levelController])
        })
        this.restartLevelText = this.add.text(320, 300, "Restart Level", { fontSize: "24px", fill: "#ffffff" }).setOrigin(0.5);
        this.restartLevelText.setInteractive();
        this.restartLevelText.on('pointerdown', () => {
            this.scene.stop();
            this.scene.stop(levelArray[levelController])
            this.scene.start(levelArray[levelController])
        })
    }

}

export class level2Scene extends Phaser.Scene {
    constructor() {
        super('level2Scene')
    }

    preload() {
       this.load.image('background', backgroundImage);
       this.load.image('cauldron', cauldron);
       this.load.audio('level2Music', level2Music)
    }

    create() {
        this.sound.play('level2Music')
        this.textArray = []
        this.answer = "if dragonWing != 3 or fairyWing >= 1 and fairyDust in witchBag then craftLevitationPotion()"
        this.wordCount = 0
        this.add.image(0, 0, 'background').setOrigin(0, 0);
        this.add.image(320, 300, 'cauldron').setOrigin(0.5, 0.5);

        this.container = makeContainer.call(this, 85, 50, 'else', 50, 50, 0xff0000, {fontSize: "13px", fill: "ffffff"}, true)
        this.container2 = makeContainer.call(this, 140, 50, '3', 50, 50, 0xff0000, {fontSize: "13px", fill: "ffffff"}, true)
        this.container3 = makeContainer.call(this, 195, 50, '1', 50, 50, 0xff0000, {fontSize: "13px", fill: "ffffff"}, true)
        this.container4 = makeContainer.call(this, 250, 50, 'then', 50, 50, 0xff0000, {fontSize: "13px", fill: "ffffff"}, true)
        this.container5 = makeContainer.call(this, 320, 50, 'dragonWing', 80, 50, 0xff0000, {fontSize: "13px", fill: "ffffff"}, true)
        this.container6 = makeContainer.call(this, 390, 50, '<=', 50, 50, 0xff0000, {fontSize: "13px", fill: "ffffff"}, true)
        this.container7 = makeContainer.call(this, 445, 50, 'while', 50, 50, 0xff0000, {fontSize: "13px", fill: "ffffff"}, true)
        this.container8 = makeContainer.call(this, 500, 50, 'if', 50, 50, 0xff0000, {fontSize: "13px", fill: "ffffff"}, true)
        this.container9 = makeContainer.call(this, 555, 50, 'or', 50, 50, 0xff0000, {fontSize: "13px", fill: "ffffff"}, true)

        this.container10 = makeContainer.call(this, 125, 110, '>=', 50, 50, 0xff0000, {fontSize: "13px", fill: "ffffff"}, true)
        this.container11 = makeContainer.call(this, 180, 110, 'and', 50, 50, 0xff0000, {fontSize: "13px", fill: "ffffff"}, true)
        this.container12 = makeContainer.call(this, 235, 110, 'in', 50, 50, 0xff0000, {fontSize: "13px", fill: "ffffff"}, true)
        this.container13 = makeContainer.call(this, 290, 110, '!=', 50, 50, 0xff0000, {fontSize: "13px", fill: "ffffff"}, true)
        this.container14 = makeContainer.call(this, 345, 110, 'for', 50, 50, 0xff0000, {fontSize: "13px", fill: "ffffff"}, true)

        this.container15 = makeContainer.call(this, 415, 110, 'fairyWing', 80, 50, 0xff0000, {fontSize: "13px", fill: "ffffff"}, true)
        this.container16 = makeContainer.call(this, 500, 110, 'witchBag', 80, 50, 0xff0000, {fontSize: "13px", fill: "ffffff"}, true)

        this.container17 = makeContainer.call(this, 250, 170, 'fairyDust', 80, 50, 0xff0000, {fontSize: "13px", fill: "ffffff"}, true)
        this.container18 = makeContainer.call(this, 400, 170, 'craftLevitationPotion()', 155, 50, 0xff0000, {fontSize: "11px", fill: "ffffff"}, true)

        this.ingredientContainer = makeContainer.call(this, 220, 320, 'Ingredients', 100, 30, 0x80FF80, {fontSize: "13px", fill: "ffffff"}, false)
        this.ingredientContainer.setInteractive({cursor: 'pointer'})
        this.ingredientContainer.on('pointerdown', () => {
            this.rect = this.add.rectangle(0, 0, 250, 640, 0xf6eee3)
            this.title = this.add.text(0, -130, "Levitation Potion Ingredients:", {fontSize: "13px", fill: "ffffff"}).setOrigin(0.5)
            this.close = this.add.text(90, -150, "Close", {fontSize: "13px", fill: "ffffff"}).setOrigin(0.5)
            this.close.setInteractive({cursor: 'pointer'})
            this.ingredients1 = this.add.text(0, -100, "1. Dragon Wing: Can't be 3, \nor 2. Fairy Wing: At least 1", {fontSize: "11px", fill: "ffffff"}).setOrigin(0.5)
            this.ingredients2 = this.add.text(0, -60, "3. Fairy Dust: Must be in Witch Bag", {fontSize: "11px", fill: "ffffff"}).setOrigin(0.5)
            this.ingredients3 = this.add.text(0, -20, "If conditions pass:", {fontSize: "11px", fill: "ffffff"}).setOrigin(0.5)
            this.ingredients4 = this.add.text(0, 20, "Craft Levitation Potion", {fontSize: "11px", fill: "ffffff"}).setOrigin(0.5)
            this.container = this.add.container(-150, 180)
            this.container.add([this.rect, this.title, this.close, this.ingredients1, this.ingredients2, this.ingredients3, this.ingredients4])
            this.container.setSize(250, 640)
            this.ingredientContainer.input.enabled = false;

            this.tweens.add({
                targets: this.container,
                x: 120,
                y: 180,
                alpha: 1,
                duration: 1000,
                ease: 'Power2'
            })

            this.close.on('pointerdown', () => {
                this.tweens.add({
                    targets: this.container,
                    x:-150,
                    y:180,
                    alpha: 0,
                    duration: 1000,
                    ease: 'Power2'
                })
                setTimeout(() => {
                    this.container.destroy(true)
                    this.ingredientContainer.input.enabled = true;
                }, 1000)
                
            })
        })
        this.submitAnswerContainer = makeContainer.call(this, 410, 320, 'Mix!', 80, 30, 0x80FF80, {fontSize: "13px", fill: "ffffff"}, false)
        this.submitAnswerContainer.setInteractive({cursor: 'pointer'})
        this.submitAnswerContainer.on('pointerdown', () => {
            console.log('test')
            if(this.wordCount != 0)
            {
                this.rightAnswer = checkAnswer(this.textArray, this.answer)
                if(this.rightAnswer == true)
                {
                    this.sound.stopAll()
                    this.scene.launch('levelWinScene')
                    this.scene.bringToTop('levelWinScene')
                    this.scene.pause(); 
                }

            }
        })


        this.zone = this.add.zone(320, 300, 100, 100);
        this.zone.setRectangleDropZone(100, 100);

        this.input.on('dragstart', (pointer, gameObject) => {
            this.sound.play('click')
        });

        this.input.on('drag', (pointer, gameObject, dragX, dragY) => {
            gameObject.x = dragX;
            gameObject.y = dragY;
        });

        this.input.on('drop', (pointer, gameObject, dropZone) => {
            this.sound.play('dropSound')
            this.textArray.push(gameObject.labelText)
            console.log(this.textArray)
            gameObject.destroy()
            this.wordCount++
            console.log(this.wordCount)
        })

        this.input.on('dragend', (pointer, gameObject, dropped) => {
            if(!dropped) {
                gameObject.x = gameObject.input.dragStartX;
                gameObject.y = gameObject.input.dragStartY;
            }
        })

        this.input.keyboard.on('keydown-P', () => {
            this.scene.launch('pauseScene');
            this.scene.bringToTop('pauseScene');
            this.scene.pause();
        });
    }

    update(time, delta)
    {
        timeElapsed += delta;
    }
}

export class level3Scene extends Phaser.Scene {
    constructor(){
        super('level3Scene')
    }

    preload() {
       this.load.image('background', backgroundImage);
       this.load.image('cauldron', cauldron);
       this.load.audio('level3Music', level3Music)
    }

    create() {
        this.sound.play('level3Music')
        this.textArray = []
        this.answer = "if controllerHair >= controlledHair and goblinOil == 2 then craftVoodooPotion() else craftFalseVoodooPotion()"
        this.wordCount = 0
        this.add.image(0, 0, 'background').setOrigin(0, 0);
        this.add.image(320, 300, 'cauldron').setOrigin(0.5, 0.5);

        this.container = makeContainer.call(this, 85, 50, 'craftFalseVoodooPotion()', 160, 50, 0xff0000, {fontSize: "11px", fill: "ffffff"}, true)
        this.container2 = makeContainer.call(this, 195, 50, 'and', 50, 50, 0xff0000, {fontSize: "13px", fill: "ffffff"}, true)
        this.container3 = makeContainer.call(this, 250, 50, '>=', 50, 50, 0xff0000, {fontSize: "13px", fill: "ffffff"}, true)
        this.container4 = makeContainer.call(this, 305, 50, 'print', 50, 50, 0xff0000, {fontSize: "13px", fill: "ffffff"}, true)
        this.container5 = makeContainer.call(this, 360, 50, 'if', 50, 50, 0xff0000, {fontSize: "13px", fill: "ffffff"}, true)
        this.container6 = makeContainer.call(this, 415, 50, '<=', 50, 50, 0xff0000, {fontSize: "13px", fill: "ffffff"}, true)
        this.container7 = makeContainer.call(this, 470, 50, '2', 50, 50, 0xff0000, {fontSize: "13px", fill: "ffffff"}, true)
        this.container8 = makeContainer.call(this, 570, 50, 'craftVoodooPotion()', 135, 50, 0xff0000, {fontSize: "11px", fill: "ffffff"}, true)

        this.container9 = makeContainer.call(this, 70, 110, '==', 50, 50, 0xff0000, {fontSize: "13px", fill: "ffffff"}, true)
        this.container10 = makeContainer.call(this, 125, 110, 'then', 50, 50, 0xff0000, {fontSize: "13px", fill: "ffffff"}, true)
        this.container11 = makeContainer.call(this, 180, 110, '!=', 50, 50, 0xff0000, {fontSize: "13px", fill: "ffffff"}, true)
        this.container12 = makeContainer.call(this, 270, 110, 'controllerHair', 120, 50, 0xff0000, {fontSize: "13px", fill: "ffffff"}, true)
        this.container13 = makeContainer.call(this, 395, 110, 'controlledHair', 120, 50, 0xff0000, {fontSize: "13px", fill: "ffffff"}, true)
        this.container14 = makeContainer.call(this, 485, 110, 'else', 50, 50, 0xff0000, {fontSize: "13px", fill: "ffffff"}, true)
        this.container15 = makeContainer.call(this, 555, 110, 'goblinOil', 80, 50, 0xff0000, {fontSize: "13px", fill: "ffffff"}, true)
        

        this.ingredientContainer = makeContainer.call(this, 220, 320, 'Ingredients', 100, 30, 0x80FF80, {fontSize: "13px", fill: "ffffff"}, false)
        this.ingredientContainer.setInteractive({cursor: 'pointer'})
        this.ingredientContainer.on('pointerdown', () => {
            this.rect = this.add.rectangle(0, 0, 250, 640, 0xf6eee3)
            this.title = this.add.text(0, -130, "Voodoo Potion Ingredients:", {fontSize: "13px", fill: "ffffff"}).setOrigin(0.5)
            this.close = this.add.text(90, -150, "Close", {fontSize: "13px", fill: "ffffff"}).setOrigin(0.5)
            this.close.setInteractive({cursor: 'pointer'})
            this.ingredients1 = this.add.text(0, -100, "1. Controller's Hair : At least as \nmuch as the Controlled's Hair", {fontSize: "11px", fill: "ffffff"}).setOrigin(0.5)
            this.ingredients2 = this.add.text(0, -60, "2. Goblin Oil: 2", {fontSize: "11px", fill: "ffffff"}).setOrigin(0.5)
            this.ingredients3 = this.add.text(0, -20, "If conditions: \nPass: Craft Voodoo Potion \nFail: Craft False Voodoo Potion", {fontSize: "11px", fill: "ffffff"}).setOrigin(0.5)
            this.container = this.add.container(-150, 180)
            this.container.add([this.rect, this.title, this.close, this.ingredients1, this.ingredients2, this.ingredients3])
            this.container.setSize(250, 640)
            this.ingredientContainer.input.enabled = false;

            this.tweens.add({
                targets: this.container,
                x: 120,
                y: 180,
                alpha: 1,
                duration: 1000,
                ease: 'Power2'
            })

            this.close.on('pointerdown', () => {
                this.tweens.add({
                    targets: this.container,
                    x:-150,
                    y:180,
                    alpha: 0,
                    duration: 1000,
                    ease: 'Power2'
                })
                setTimeout(() => {
                    this.container.destroy(true)
                    this.ingredientContainer.input.enabled = true;
                }, 1000)
                
            })
        })
        this.submitAnswerContainer = makeContainer.call(this, 410, 320, 'Mix!', 80, 30, 0x80FF80, {fontSize: "13px", fill: "ffffff"}, false)
        this.submitAnswerContainer.setInteractive({cursor: 'pointer'})
        this.submitAnswerContainer.on('pointerdown', () => {
            console.log('test')
            if(this.wordCount != 0)
            {
                this.rightAnswer = checkAnswer(this.textArray, this.answer)
                if(this.rightAnswer == true)
                {
                    this.sound.stopAll()
                    this.scene.launch('levelWinScene')
                    this.scene.bringToTop('levelWinScene')
                    this.scene.pause(); 
                }

            }
        })


        this.zone = this.add.zone(320, 300, 100, 100);
        this.zone.setRectangleDropZone(100, 100);

        this.input.on('dragstart', (pointer, gameObject) => {
            this.sound.play('click')
        });

        this.input.on('drag', (pointer, gameObject, dragX, dragY) => {
            gameObject.x = dragX;
            gameObject.y = dragY;
        });

        this.input.on('drop', (pointer, gameObject, dropZone) => {
            this.sound.play('dropSound')
            this.textArray.push(gameObject.labelText)
            console.log(this.textArray)
            gameObject.destroy()
            this.wordCount++
            console.log(this.wordCount)
        })

        this.input.on('dragend', (pointer, gameObject, dropped) => {
            if(!dropped) {
                gameObject.x = gameObject.input.dragStartX;
                gameObject.y = gameObject.input.dragStartY;
            }
        })

        this.input.keyboard.on('keydown-P', () => {
            this.scene.launch('pauseScene');
            this.scene.bringToTop('pauseScene');
            this.scene.pause();
        });
    }

    update(time, delta) {
        timeElapsed += delta;
    }


}

export class level4Scene extends Phaser.Scene {
    constructor(){
        super('level4Scene')
    }

    preload() {
       this.load.image('background', backgroundImage);
       this.load.image('cauldron', cauldron);
       this.load.audio('level4Music', level4Music)
    }

    create() {
        this.sound.play('level4Music')
        this.textArray = []
        this.answer = 'if orcBlood == "greyOrc" and bearFur in witchBag then if rhinoNail != 3cm then craftStrengthPotion()'
        this.wordCount = 0
        this.add.image(0, 0, 'background').setOrigin(0, 0);
        this.add.image(320, 300, 'cauldron').setOrigin(0.5, 0.5);

        this.container = makeContainer.call(this, 70, 50, 'and', 50, 50, 0xff0000, {fontSize: "13px", fill: "ffffff"}, true)
        this.container2 = makeContainer.call(this, 125, 50, '>=', 50, 50, 0xff0000, {fontSize: "13px", fill: "ffffff"}, true)
        this.container3 = makeContainer.call(this, 180, 50, 'in', 50, 50, 0xff0000, {fontSize: "13px", fill: "ffffff"}, true)
        this.container4 = makeContainer.call(this, 235, 50, '==', 50, 50, 0xff0000, {fontSize: "13px", fill: "ffffff"}, true)
        this.container5 = makeContainer.call(this, 305, 50, 'bearFur', 80, 50, 0xff0000, {fontSize: "13px", fill: "ffffff"}, true)
        this.container6 = makeContainer.call(this, 390, 50, 'witchBag', 80, 50, 0xff0000, {fontSize: "13px", fill: "ffffff"}, true)
        this.container7 = makeContainer.call(this, 475, 50, 'orcBlood', 80, 50, 0xff0000, {fontSize: "13px", fill: "ffffff"}, true)
        this.container8 = makeContainer.call(this, 560, 50, 'rhinoNail', 80, 50, 0xff0000, {fontSize: "13px", fill: "ffffff"}, true)

        this.container9 = makeContainer.call(this, 70, 110, '!=', 50, 50, 0xff0000, {fontSize: "13px", fill: "ffffff"}, true)
        this.container10 = makeContainer.call(this, 125, 110, 'if', 50, 50, 0xff0000, {fontSize: "13px", fill: "ffffff"}, true)
        this.container11 = makeContainer.call(this, 180, 110, 'then', 50, 50, 0xff0000, {fontSize: "13px", fill: "ffffff"}, true)
        this.container12 = makeContainer.call(this, 235, 110, 'then', 50, 50, 0xff0000, {fontSize: "13px", fill: "ffffff"}, true)
        this.container13 = makeContainer.call(this, 290, 110, 'if', 50, 50, 0xff0000, {fontSize: "13px", fill: "ffffff"}, true)
        this.container14 = makeContainer.call(this, 345, 110, '3cm', 50, 50, 0xff0000, {fontSize: "13px", fill: "ffffff"}, true)
        this.container15 = makeContainer.call(this, 415, 110, 'not in', 80, 50, 0xff0000, {fontSize: "13px", fill: "ffffff"}, true)
        this.container16 = makeContainer.call(this, 485, 110, '!=', 50, 50, 0xff0000, {fontSize: "13px", fill: "ffffff"}, true)
        this.container17 = makeContainer.call(this, 555, 110, '"greyOrc"', 80, 50, 0xff0000, {fontSize: "13px", fill: "ffffff"}, true)

        this.container18 = makeContainer.call(this, 250, 170, 'or', 50, 50, 0xff0000, {fontSize: "13px", fill: "ffffff"}, true)
        this.container19 = makeContainer.call(this, 360, 170, 'craftStrengthPotion()', 145, 50, 0xff0000, {fontSize: "11px", fill: "ffffff"}, true)
        

        this.ingredientContainer = makeContainer.call(this, 220, 320, 'Ingredients', 100, 30, 0x80FF80, {fontSize: "13px", fill: "ffffff"}, false)
        this.ingredientContainer.setInteractive({cursor: 'pointer'})
        this.ingredientContainer.on('pointerdown', () => {
            this.rect = this.add.rectangle(0, 0, 250, 640, 0xf6eee3)
            this.title = this.add.text(0, -130, "Strength Potion Ingredients:", {fontSize: "13px", fill: "ffffff"}).setOrigin(0.5)
            this.close = this.add.text(90, -150, "Close", {fontSize: "13px", fill: "ffffff"}).setOrigin(0.5)
            this.close.setInteractive({cursor: 'pointer'})
            this.ingredients1 = this.add.text(0, -100, "1. Orc's Blood: Grey Orc", {fontSize: "11px", fill: "ffffff"}).setOrigin(0.5)
            this.ingredients2 = this.add.text(0, -60, "2. Bear Fur: Must be in Witch Bag", {fontSize: "11px", fill: "ffffff"}).setOrigin(0.5)
            this.ingredients3 = this.add.text(0, -20, "If conditions above are met:", {fontSize: "11px", fill: "ffffff"}).setOrigin(0.5)
            this.ingredients4 = this.add.text(0, 20, "3. Rhino Nail: Can't be 3cm", {fontSize: "11px", fill: "ffffff"}).setOrigin(0.5)
            this.ingredients5 = this.add.text(0, 60, "If conditions are valid:", {fontSize: "11px", fill: "ffffff"}).setOrigin(0.5)
            this.ingredients6 = this.add.text(0, 80, "Craft Strength Potion", {fontSize: "11px", fill: "ffffff"}).setOrigin(0.5)
            this.container = this.add.container(-150, 180)
            this.container.add([this.rect, this.title, this.close, this.ingredients1, this.ingredients2, this.ingredients3, this.ingredients4, this.ingredients5, this.ingredients6])
            this.container.setSize(250, 640)
            this.ingredientContainer.input.enabled = false;

            this.tweens.add({
                targets: this.container,
                x: 120,
                y: 180,
                alpha: 1,
                duration: 1000,
                ease: 'Power2'
            })

            this.close.on('pointerdown', () => {
                this.tweens.add({
                    targets: this.container,
                    x:-150,
                    y:180,
                    alpha: 0,
                    duration: 1000,
                    ease: 'Power2'
                })
                setTimeout(() => {
                    this.container.destroy(true)
                    this.ingredientContainer.input.enabled = true;
                }, 1000)
                
            })
        })
        this.submitAnswerContainer = makeContainer.call(this, 410, 320, 'Mix!', 80, 30, 0x80FF80, {fontSize: "13px", fill: "ffffff"}, false)
        this.submitAnswerContainer.setInteractive({cursor: 'pointer'})
        this.submitAnswerContainer.on('pointerdown', () => {
            console.log('test')
            if(this.wordCount != 0)
            {
                this.rightAnswer = checkAnswer(this.textArray, this.answer)
                if(this.rightAnswer == true)
                {
                    this.sound.stopAll()
                    this.scene.launch('levelWinScene')
                    this.scene.bringToTop('levelWinScene')
                    this.scene.pause(); 
                }

            }
        })


        this.zone = this.add.zone(320, 300, 100, 100);
        this.zone.setRectangleDropZone(100, 100);

        this.input.on('dragstart', (pointer, gameObject) => {
            this.sound.play('click')
        });

        this.input.on('drag', (pointer, gameObject, dragX, dragY) => {
            gameObject.x = dragX;
            gameObject.y = dragY;
        });

        this.input.on('drop', (pointer, gameObject, dropZone) => {
            this.sound.play('dropSound')
            this.textArray.push(gameObject.labelText)
            console.log(this.textArray)
            gameObject.destroy()
            this.wordCount++
            console.log(this.wordCount)
        })

        this.input.on('dragend', (pointer, gameObject, dropped) => {
            if(!dropped) {
                gameObject.x = gameObject.input.dragStartX;
                gameObject.y = gameObject.input.dragStartY;
            }
        })

        this.input.keyboard.on('keydown-P', () => {
            this.scene.launch('pauseScene');
            this.scene.bringToTop('pauseScene');
            this.scene.pause();
        });
    }

    update(time, delta)
    {
        timeElapsed += delta;
    }

    
}

export class level5Scene extends Phaser.Scene {
    constructor(){
        super('level5Scene')
    }

    preload() {
       this.load.image('background', backgroundImage);
       this.load.image('cauldron', cauldron);
       this.load.audio('level5Music', level5Music)
    }

    create() {
        this.sound.play('level5Music')
        this.textArray = []
        this.answer = "if koalaDrool >= 2lb and slimeJuice <= 1oz then if dwarfBeardHairs > 300 and hydraVenomFlasks == 3 or goldenSand in witchBag then craftSleepPotion() else craftNightmarePotion()"
        this.wordCount = 0
        this.add.image(0, 0, 'background').setOrigin(0, 0);
        this.add.image(320, 300, 'cauldron').setOrigin(0.5, 0.5);

        this.container = makeContainer.call(this, 70, 50, '>', 50, 50, 0xff0000, {fontSize: "13px", fill: "ffffff"}, true)
        this.container2 = makeContainer.call(this, 125, 50, '==', 50, 50, 0xff0000, {fontSize: "13px", fill: "ffffff"}, true)
        this.container3 = makeContainer.call(this, 180, 50, 'and', 50, 50, 0xff0000, {fontSize: "13px", fill: "ffffff"}, true)
        this.container4 = makeContainer.call(this, 235, 50, 'in', 50, 50, 0xff0000, {fontSize: "13px", fill: "ffffff"}, true)
        this.container5 = makeContainer.call(this, 290, 50, 'or', 50, 50, 0xff0000, {fontSize: "13px", fill: "ffffff"}, true)
        this.container6 = makeContainer.call(this, 345, 50, '>=', 50, 50, 0xff0000, {fontSize: "13px", fill: "ffffff"}, true)
        this.container7 = makeContainer.call(this, 400, 50, 'and', 50, 50, 0xff0000, {fontSize: "13px", fill: "ffffff"}, true)
        this.container8 = makeContainer.call(this, 455, 50, 'if', 50, 50, 0xff0000, {fontSize: "13px", fill: "ffffff"}, true)
        this.container9 = makeContainer.call(this, 510, 50, '300', 50, 50, 0xff0000, {fontSize: "13px", fill: "ffffff"}, true)
        this.container10 = makeContainer.call(this, 565, 50, '!=', 50, 50, 0xff0000, {fontSize: "13px", fill: "ffffff"}, true)

        this.container11 = makeContainer.call(this, 90, 110, 'craftNightmarePotion()', 175, 50, 0xff0000, {fontSize: "13px", fill: "ffffff"}, true)
        this.container12 = makeContainer.call(this, 260, 110, 'craftSleepPotion()', 160, 50, 0xff0000, {fontSize: "13px", fill: "ffffff"}, true)
        this.container13 = makeContainer.call(this, 422, 110, 'dwarfBeardHairs', 160, 50, 0xff0000, {fontSize: "13px", fill: "ffffff"}, true)
        this.container14 = makeContainer.call(this, 570, 110, 'hydraVenomFlasks', 130, 50, 0xff0000, {fontSize: "13px", fill: "ffffff"}, true)

        this.container15 = makeContainer.call(this, 70, 170, 'or', 50, 50, 0xff0000, {fontSize: "13px", fill: "ffffff"}, true)
        this.container16 = makeContainer.call(this, 125, 170, '<', 50, 50, 0xff0000, {fontSize: "13px", fill: "ffffff"}, true)
        this.container17 = makeContainer.call(this, 180, 170, 'else', 50, 50, 0xff0000, {fontSize: "13px", fill: "ffffff"}, true)
        this.container18 = makeContainer.call(this, 235, 170, '3', 50, 50, 0xff0000, {fontSize: "13px", fill: "ffffff"}, true)
        this.container19 = makeContainer.call(this, 290, 170, 'then', 50, 50, 0xff0000, {fontSize: "13px", fill: "ffffff"}, true)
        this.container20 = makeContainer.call(this, 345, 170, '<=', 50, 50, 0xff0000, {fontSize: "13px", fill: "ffffff"}, true)
        this.container21 = makeContainer.call(this, 400, 170, 'and', 50, 50, 0xff0000, {fontSize: "13px", fill: "ffffff"}, true)
        this.container22 = makeContainer.call(this, 455, 170, 'if', 50, 50, 0xff0000, {fontSize: "13px", fill: "ffffff"}, true)
        this.container23 = makeContainer.call(this, 510, 170, '2lb', 50, 50, 0xff0000, {fontSize: "13px", fill: "ffffff"}, true)
        this.container24 = makeContainer.call(this, 565, 170, '1oz', 50, 50, 0xff0000, {fontSize: "13px", fill: "ffffff"}, true)

        this.container16 = makeContainer.call(this, 155, 230, 'then', 50, 50, 0xff0000, {fontSize: "13px", fill: "ffffff"}, true)
        this.container17 = makeContainer.call(this, 225, 230, 'koalaDrool', 80, 50, 0xff0000, {fontSize: "12px", fill: "ffffff"}, true)
        this.container18 = makeContainer.call(this, 310, 230, 'goldenSand', 80, 50, 0xff0000, {fontSize: "12px", fill: "ffffff"}, true)
        this.container19 = makeContainer.call(this, 395, 230, 'witchBag', 80, 50, 0xff0000, {fontSize: "12px", fill: "ffffff"}, true)
        this.container20 = makeContainer.call(this, 480, 230, 'slimeJuice', 80, 50, 0xff0000, {fontSize: "12px", fill: "ffffff"}, true)

        

        this.ingredientContainer = makeContainer.call(this, 220, 320, 'Ingredients', 100, 30, 0x80FF80, {fontSize: "13px", fill: "ffffff"}, false)
        this.ingredientContainer.setInteractive({cursor: 'pointer'})
        this.ingredientContainer.on('pointerdown', () => {
            this.rect = this.add.rectangle(0, 0, 250, 640, 0xf6eee3)
            this.title = this.add.text(0, -130, "Sleep Potion Ingredients:", {fontSize: "13px", fill: "ffffff"}).setOrigin(0.5)
            this.close = this.add.text(90, -150, "Close", {fontSize: "13px", fill: "ffffff"}).setOrigin(0.5)
            this.close.setInteractive({cursor: 'pointer'})
            this.ingredients1 = this.add.text(0, -100, "1. Koala Drool: \nAt least 2 pounds", {fontSize: "11px", fill: "ffffff"}).setOrigin(0.5)
            this.ingredients2 = this.add.text(0, -60, "2. Slime Juice: \nLess than or an ounce", {fontSize: "11px", fill: "ffffff"}).setOrigin(0.5)
            this.ingredients3 = this.add.text(0, -20, "If conditions above are valid", {fontSize: "11px", fill: "ffffff"}).setOrigin(0.5)
            this.ingredients4 = this.add.text(0, 20, "3. Dwarf Beard Hairs: \nMore than 300", {fontSize: "11px", fill: "ffffff"}).setOrigin(0.5)
            this.ingredients5 = this.add.text(0, 60, "4. Hydra Venom Flasks: 3", {fontSize: "11px", fill: "ffffff"}).setOrigin(0.5)
            this.ingredients6 = this.add.text(0, 80, "Or", {fontSize: "11px", fill: "ffffff"}).setOrigin(0.5)
            this.ingredients7 = this.add.text(0, 110, "5. Golden Sand: \nMust be in Witch Bag", {fontSize: "11px", fill: "ffffff"}).setOrigin(0.5)
            this. ingredients8 = this.add.text(0, 150, "If conditions: \nPass: Craft Sleep Potion \nFail: Craft Nightmare Potion", {fontSize: "11px", fill: "ffffff"}).setOrigin(0.5)
            this.container = this.add.container(-150, 180)
            this.container.add([this.rect, this.title, this.close, this.ingredients1, this.ingredients2, this.ingredients3, this.ingredients4, this.ingredients5, this.ingredients6, this.ingredients7, this.ingredients8])
            this.container.setSize(250, 640)
            this.ingredientContainer.input.enabled = false;

            this.tweens.add({
                targets: this.container,
                x: 120,
                y: 180,
                alpha: 1,
                duration: 1000,
                ease: 'Power2'
            })

            this.close.on('pointerdown', () => {
                this.tweens.add({
                    targets: this.container,
                    x:-150,
                    y:180,
                    alpha: 0,
                    duration: 1000,
                    ease: 'Power2'
                })
                setTimeout(() => {
                    this.container.destroy(true)
                    this.ingredientContainer.input.enabled = true;
                }, 1000)
                
            })
        })
        this.submitAnswerContainer = makeContainer.call(this, 410, 320, 'Mix!', 80, 30, 0x80FF80, {fontSize: "13px", fill: "ffffff"}, false)
        this.submitAnswerContainer.setInteractive({cursor: 'pointer'})
        this.submitAnswerContainer.on('pointerdown', () => {
            console.log('test')
            if(this.wordCount != 0)
            {
                this.rightAnswer = checkAnswer(this.textArray, this.answer)
                if(this.rightAnswer == true)
                {
                    this.sound.stopAll()    
                    this.scene.launch('winScreen')
                    this.scene.bringToTop('winScreen')
                    this.scene.pause(); 
                }

            }
        })


        this.zone = this.add.zone(320, 300, 100, 100);
        this.zone.setRectangleDropZone(100, 100);

        this.input.on('dragstart', (pointer, gameObject) => {
            this.sound.play('click')
        });

        this.input.on('drag', (pointer, gameObject, dragX, dragY) => {
            gameObject.x = dragX;
            gameObject.y = dragY;
        });

        this.input.on('drop', (pointer, gameObject, dropZone) => {
            this.sound.play('dropSound')
            this.textArray.push(gameObject.labelText)
            console.log(this.textArray)
            gameObject.destroy()
            this.wordCount++
            console.log(this.wordCount)
        })

        this.input.on('dragend', (pointer, gameObject, dropped) => {
            if(!dropped) {
                gameObject.x = gameObject.input.dragStartX;
                gameObject.y = gameObject.input.dragStartY;
            }
        })

        this.input.keyboard.on('keydown-P', () => {
            this.scene.launch('pauseScene');
            this.scene.bringToTop('pauseScene');
            this.scene.pause();
        });
    }
    
    update(time, delta)
    {
        timeElapsed += delta;
    }

    
}

export class winScreen extends Phaser.Scene {
    constructor() {
        super("winScreen")
    }

    preload() {

    }

    create() {
        const timeOnlevels = (timeElapsed / 6000).toFixed(1)
        
        this.sound.play('winSound')
        this.overlay = this.add.rectangle(320, 180, 640, 360, 0x000000, 0.5)
        this.text = this.add.text(320, 160, "You Won!!!", {fontSize: "32px", fill: "#ffffff"}).setOrigin(0.5)
        this.time = this.add.text(320, 200, `Your Final Time: ${timeOnlevels} minutes`, {fontSize: "24px", fill:"#ffffff"}).setOrigin(0.5)
        this.backToStartScene = this.add.text(320, 300, "Back To Start", {fontSize: "24px", fill:"#ffffff"}).setOrigin(0.5)
        this.backToStartScene.setInteractive({cursor: 'pointer'})
        this.backToStartScene.on('pointerover', () => {
            this.backToStartScene.setStyle({ fill: 'rgb(0, 255, 85)' });
        });
        this.backToStartScene.on('pointerout', () => {
            this.backToStartScene.setStyle({ fill: '#fff' });
        });
        
        this.backToStartScene.on('pointerdown', () => {
            this.sound.stopAll()

            this.scene.stop('winScreen')
            this.scene.stop('level5Scene')

            levelController = 0
            timeElapsed = 0
            this.scene.start('startScene');
        });
    }
}