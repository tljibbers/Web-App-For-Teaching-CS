import Header from '../../Header.jsx'
import {useEffect} from 'react'
import Phaser from 'phaser'
import './witchesBrewStyling.css'
import {startScene, instructionsScene} from './scenes.js'
function WitchesBrewMainPage() {
    useEffect(() => {
        const config = {
            type: Phaser.WEBGL,
            width: 640,
            height: 360,
            roundPixels: true,
            render: {
                pixelArt: true,
                antialias: false
            },
            parent: 'witchesBrewCanvas',
            backgroundColor: '#000000',
            scene: [startScene, instructionsScene]
        };

        const game = new Phaser.Game(config);

        return () => {
            game.destroy(true);
        }
    }, [])
    return (
        <>
            <Header />
            <main className="witchesBrewMainPage">
                <div id="witchesBrewCanvas"></div>
            </main>
        </>
    )
}

export default WitchesBrewMainPage