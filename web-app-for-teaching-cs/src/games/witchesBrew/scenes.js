import Phaser from "phaser";
import backgroundImage from "./game-assets/if-else-game-background.png";
import cauldron from "./game-assets/cauldron.png";
import { makeContainer, checkAnswer } from "./helperFunctions";

let levelController = 0
const levelArray = ['level1Scene', 'level2Scene', 'level3Scene', 'level4Scene', 'level5Scene']

export class startScene extends Phaser.Scene {
    constructor() {
        super("startScene");
    }

    preload() {
        // Preload assets for the start scene
    }

    create() {
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
            this.scene.stop();
            this.scene.stop(levelArray[levelController])
            this.scene.start('startScene');
        });

        this.resume = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
        this.input.keyboard.on('keydown-R', () => {
            this.scene.stop();
            this.scene.resume(levelArray[levelController])
        });

        this.restartLevelText.setInteractive({ cursor: 'pointer' });
        this.restartLevelText.on('pointerdown', () => {
            this.scene.stop();
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
    }

    create() {
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
            this.title = this.add.text(0, -100, "Love Potion Ingredients:", {fontSize: "13px", fill: "ffffff"}).setOrigin(0.5)
            this.close = this.add.text(90, -150, "Close", {fontSize: "13px", fill: "ffffff"}).setOrigin(0.5)
            this.close.setInteractive({cursor: 'pointer'})
            this.ingredients1 = this.add.text(0, -40, "Cupid Tears: 2", {fontSize: "13px", fill: "ffffff"}).setOrigin(0.5)
            this.ingredients2 = this.add.text(0, 10, "Red Crystals: At least 4", {fontSize: "13px", fill: "ffffff"}).setOrigin(0.5)
            this.container = this.add.container(-150, 180)
            this.container.add([this.rect, this.title, this.close, this.ingredients1, this.ingredients2])
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
                   this.scene.launch('levelWinScene')
                   this.scene.bringToTop('levelWinScene')
                   this.scene.pause(); 
                }

            }
        })


        this.zone = this.add.zone(320, 300, 100, 100);
        this.zone.setRectangleDropZone(100, 100);


        this.input.on('drag', (pointer, gameObject, dragX, dragY) => {
            gameObject.x = dragX;
            gameObject.y = dragY;
        });

        this.input.on('drop', (pointer, gameObject, dropZone) => {
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
    }
}

export class levelWinScene extends Phaser.Scene {
    constructor() {
        super("levelWinScene")
    }

    create() {
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
    }

    create() {
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
            this.title = this.add.text(0, -100, "Levitation Potion Ingredients:", {fontSize: "13px", fill: "ffffff"}).setOrigin(0.5)
            this.close = this.add.text(90, -150, "Close", {fontSize: "13px", fill: "ffffff"}).setOrigin(0.5)
            this.close.setInteractive({cursor: 'pointer'})
            this.ingredients1 = this.add.text(0, -40, "Dragon Wing: Can't be 3, \nor Fairy Wing: At least 1", {fontSize: "13px", fill: "ffffff"}).setOrigin(0.5)
            this.ingredients2 = this.add.text(0, 10, "Fairy Dust: Must be in Witch Bag", {fontSize: "12px", fill: "ffffff"}).setOrigin(0.5)
            this.container = this.add.container(-150, 180)
            this.container.add([this.rect, this.title, this.close, this.ingredients1, this.ingredients2])
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
                   this.scene.launch('levelWinScene')
                   this.scene.bringToTop('levelWinScene')
                   this.scene.pause(); 
                }

            }
        })


        this.zone = this.add.zone(320, 300, 100, 100);
        this.zone.setRectangleDropZone(100, 100);


        this.input.on('drag', (pointer, gameObject, dragX, dragY) => {
            gameObject.x = dragX;
            gameObject.y = dragY;
        });

        this.input.on('drop', (pointer, gameObject, dropZone) => {
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
}
