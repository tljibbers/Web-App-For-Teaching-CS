import Header from '../../Header.jsx'
import {useEffect} from 'react'
import Phaser, { Scale } from 'phaser'
import './witchesBrewStyling.css'
import {startScene, instructionsScene, pauseScene, levelWinScene, level1Scene, level2Scene, level3Scene, level4Scene, level5Scene, winScreen, loseScreen} from './scenes.js'
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
            scene: [startScene, instructionsScene, pauseScene, levelWinScene, level1Scene, level2Scene, level3Scene, level4Scene, level5Scene, winScreen, loseScreen]
        };

        const game = new Phaser.Game(config);

        return () => {
            game.destroy(true);
        }
    }, [])
    return (
        <>
            <Header />
            <div id='witchesBrewTitle'>Witches Brew</div>
            <div className="witchesBrewMainPage">
                <div id="witchesBrewCanvas"></div>
            </div>
            <div id='moreAboutWitchesBrew'>
                <div id='aboutContainer'>
                    <div id='moreAboutTitle'>More About Witches Brew:</div>
                    <div className='extraInfo'>Developer: [insert credit name here]</div>
                    <div className='extraInfo'>Completed: 11/22/26</div>
                    <div className='extraInfo'>Published: ???</div>
                    <div className='extraInfo'>Last Updated: 11/22/26</div>
                    <div className='divider'></div>
                    <div id='instructionsTitle'>Instructions:</div>
                    <div id='instructions'>You're a production witch that brews and sells potions. Today you've got more orders than usual, so drag and drop the correct statements in order to create the right potions!</div>
                    <div id='controls'>
                        <div>Press P to Pause</div>
                        <div>Press R to Resume</div>
                        <div>Click "Ingredients" to see the ingredients and the order in which you need to put them</div>
                        <div>Click "Mix" once you're finished to (hopefully) create the potion! </div>
                    </div>
                    <div className='divider'></div>
                    <div id='creditsTitle'>Credits:</div>
                    <div id='credits'>
                        <div id='artCredit'>All art assets done by [credit name here]</div>
                        <div id='music'>Music Used:</div>
                        <div>You're Like Caviar by Michael Ramir C.</div>
                        <div>Chill Bro by Diego Nava</div>
                        <div>Danger by Diego Nava</div>
                        <div>Sleepy Cat by Alejandro Magana (A. M.)</div>
                        <div>Smooth Jazz by Francisco Alvear</div>
                        <div>Dry Gin by Michael Ramir C.</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WitchesBrewMainPage