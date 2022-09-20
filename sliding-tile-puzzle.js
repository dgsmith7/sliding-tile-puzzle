(function() {
    let gameState = 0;  //0 - Init,  1 - Play,  2 - Game Over,  3 - Splash Page
    let game = new Game();
    let active = true;

    while (active != false) {
        switch (gameState) {
            case 0:
                // new game
                game.initTiles();
                gameState = 1;
                break;

            case 1:
                // play mode
                // for now just dump puzzle state to console.
//                game.displayTilesToConsole();
                console.log("Play state");
                game.displayCurrentState();
                gameState = 2;
                break;

            case 2:
                // game over
                console.log("Game over");
                break;

            default:
                // splash page
                console.log("Splash page");
                gameState = 2;
                break;

        }
    }
    console.log("Exit");//window.close();
}());