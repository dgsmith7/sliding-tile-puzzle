import * as Game from 'http://127.0.0.1:8080/sliding-tile-puzzle/modules/gameClass.js';

(function() {
    let gameState = 4;  //0 - Init,  1 - Play,  2 - Game Over,  3 - Splash Page
    let game = new Game.Game();

    switch (gameState) {
        case 0: {
            // new game
            game.initTiles();
            gameState = 1;
            break;
        }
        case 1: {
            // play mode
            // for now just dump puzzle state to console.
            game.displayTilesToConsole();
        }
        case 2: {
            // game over
        }
        default: {
            // splash page
        }
    }
}());