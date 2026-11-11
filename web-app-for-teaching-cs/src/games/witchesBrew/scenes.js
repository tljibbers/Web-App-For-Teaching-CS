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

        this.add.image(0, 0, 'background').setOrigin(0, 0);
        this.add.image(320, 300, 'cauldron').setOrigin(0.5, 0.5);

        this.rect1 = makeShape.call(this, 0, 0, 50, 50, 0xff0000);
        this.text = addText.call(this, 0, 0, "test", {fontSize: "16px", fill: "ffffff"})

        this.rect2 = makeShape.call(this, 0, 0, 50, 50, 0xff0000)
        this.text2 = addText.call(this, 0, 0, "test", {fontSize: "16px", fill: "ffffff"})
        //this.text = this.add.text(0, 0, "test", { fontSize: "16px", fill: "#ffffff" });
        //this.text.setOrigin(0.5);

        //this.container = this.add.container(100, 100);
        //this.container.add(this.rect1);
        //this.container.add(this.text);

       // this.container.setSize(50, 50);
        //this.container.setInteractive({ draggable: true });
        this.container = makeContainer.call(this, 100, 100, this.rect1, this.text, 50, 50)
        //this.container.labelText = this.text.text

        this.container2 = makeContainer.call(this, 320, 100, this.rect2, this.text2, 100, 100)

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
