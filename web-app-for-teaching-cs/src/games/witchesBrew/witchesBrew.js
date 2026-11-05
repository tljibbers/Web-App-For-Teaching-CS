import './witchesBrewStyling.css'
import Phaser from 'phaser'

const size = {
    width: 640,
    height: 360,
}

const config = {
    type: Phaser.WEBGL,
    width: size.width,
    height: size.height,
    canvas: document.getElementById('witchesBrewCanvas'),
}

const game = new Phaser.Game(config)