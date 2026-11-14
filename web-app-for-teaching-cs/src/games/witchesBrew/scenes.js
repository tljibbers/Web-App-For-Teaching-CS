import Phaser from "phaser";
import backgroundImage from "./game-assets/if-else-game-background.png";
import cauldron from "./game-assets/cauldron.png";
import { makeShape, addText, makeContainer } from "./helperFunctions";

export class startScene extends Phaser.Scene {
    constructor() {
        super("startScene");
    }

    preload() {
        // Preload assets for the start scene
    }

    create() {
        this.text = this.add.text(320, 60, "Witches Brew! V. 0.1", { fontSize: "32px", fill: "#ffffff" });
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
            this.scene.resume('level1Scene');
        });

        this.text2.setInteractive({ cursor: 'pointer' });
        this.text2.on('pointerdown', () => {
            this.scene.stop();
            this.scene.stop('level1Scene');
            this.scene.start('startScene');
        });

        this.resume = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
        this.input.keyboard.on('keydown-R', () => {
            this.scene.stop();
            this.scene.resume('level1Scene');
        });

        this.restartLevelText.setInteractive({ cursor: 'pointer' });
        this.restartLevelText.on('pointerdown', () => {
            this.scene.stop();
            this.scene.stop('level1Scene');
            this.scene.start('level1Scene');
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
        this.wordCount = 0

        this.add.image(0, 0, 'background').setOrigin(0, 0);
        this.add.image(320, 300, 'cauldron').setOrigin(0.5, 0.5);

        this.container = makeContainer.call(this, 85, 50, '==', 50, 50, 0xff0000, {fontSize: "13px", fill: "ffffff"})
        this.container2 = makeContainer.call(this, 140, 50, '3', 50, 50, 0xff0000, {fontSize: "13px", fill: "ffffff"})
        this.container3 = makeContainer.call(this, 195, 50, 'else', 50, 50, 0xff0000, {fontSize: "13px", fill: "ffffff"})
        this.container4 = makeContainer.call(this, 250, 50, '2', 50, 50, 0xff0000, {fontSize: "13px", fill: "ffffff"})
        this.container5 = makeContainer.call(this, 320, 50, 'cupidTears', 80, 50, 0xff0000, {fontSize: "13px", fill: "ffffff"})
        this.container6 = makeContainer.call(this, 390, 50, 'if', 50, 50, 0xff0000, {fontSize: "13px", fill: "ffffff"})
        this.container7 = makeContainer.call(this, 445, 50, '>=', 50, 50, 0xff0000, {fontSize: "13px", fill: "ffffff"})
        this.container8 = makeContainer.call(this, 500, 50, 'and', 50, 50, 0xff0000, {fontSize: "13px", fill: "ffffff"})
        this.container9 = makeContainer.call(this, 555, 50, '2', 50, 50, 0xff0000, {fontSize: "13px", fill: "ffffff"})

        this.container10 = makeContainer.call(this, 125, 110, '4', 50, 50, 0xff0000, {fontSize: "13px", fill: "ffffff"})
        this.container11 = makeContainer.call(this, 180, 110, '<=', 50, 50, 0xff0000, {fontSize: "13px", fill: "ffffff"})
        this.container12 = makeContainer.call(this, 235, 110, 'then', 50, 50, 0xff0000, {fontSize: "13px", fill: "ffffff"})
        this.container13 = makeContainer.call(this, 290, 110, 'or', 50, 50, 0xff0000, {fontSize: "13px", fill: "ffffff"})
        this.container14 = makeContainer.call(this, 345, 110, '5', 50, 50, 0xff0000, {fontSize: "13px", fill: "ffffff"})
        this.container15 = makeContainer.call(this, 400, 110, 'not', 50, 50, 0xff0000, {fontSize: "13px", fill: "ffffff"})
        this.container16 = makeContainer.call(this, 490, 110, 'craftLovePotion()', 120, 50, 0xff0000, {fontSize: "11px", fill: "ffffff"})

        this.container17 = makeContainer.call(this, 320, 170, 'redCrystals', 80, 50, 0xff0000, {fontSize: "11px", fill: "ffffff"})



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
