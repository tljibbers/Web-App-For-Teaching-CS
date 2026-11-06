import Phaser from "phaser";

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
        this.text = this.add.text(320, 100, "You are production witch that brews and sells potions. Today you've got more orders than usual, so drag and drop the right parts of if statements into the cauldron to brew the right potions!", { fontSize: "24px", fill: "#ffffff", wordWrap: { width: 600 }   });
        this.text.setOrigin(0.5);

        this.backText = this.add.text(320, 300, "Back To Start Menu", { fontSize: "24px", fill: "#ffffff" });
        this.backText.setOrigin(0.5);
        this.backText.setInteractive({ cursor: 'pointer' });
        this.backText.on('pointerdown', () => {
            this.scene.switch('startScene');
        });
    }
}
