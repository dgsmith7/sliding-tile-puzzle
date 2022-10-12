class Game {  // bluprint for a game object

    tiles;  // an array of tile objects
    solved;  // boolean that is true if puzzle is solved
    moves;  // counter
    best;  // record of lowest moves

    constructor() {  // init all properties here for new game object
        this.tiles = [];
        this.solved = false;
        this.moves = 0;
        this.best = 9999;  // most anyone can do better than this
    }

    initTiles() {  // build ile array and shuffle
        let id = ["topLeft", "top1", "top2", "topRight", "left1", "ctl", "ctr", "right1", "left2", "cbl", "cbr", "right2", "bottomLeft", "bot1", "bot2", "bottomRight"];
        let solvedIndex = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
        // next 2 lines:  shuffle array - //from https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
        let currentValue = [...solvedIndex];
        currentValue.sort(() => Math.random() - 0.5);
        //currentValue = [1, 2, 3, 4, 5 ,6 , 7, 8, 9 ,10, 11, 12, 13, 0, 14, 15]; //test puzzle
        while (this.tiles.length > 0) {  // make sure array is empty (for secondary game resets)
            this.tiles.pop();
        }
        for (let i = 0; i < 16; i++) {  // instantiate tile objects and add to tile array
            let t = new Tile(id[i], Number(solvedIndex[i]), currentValue[i]);
            this.tiles.push(t);
        }
    }

    displayCurrentState() {  // display value of each tile object on board
        this.tiles.forEach(element => {
            element.displayState();
            console.log(element)
        });
        document.getElementById("moves").innerHTML = `Moves<br/>${this.moves}`;
        document.getElementById("best").innerHTML = `Best<br/>${this.best}`;
    }

    isSolved() {  // check each tile object to see if it is solved
        let solved = true;
            for (let i = 0; i < 16; i ++) {
                if (this.tiles[i].isSolved() === false) {
                    solved = false;
                }
        }
        return solved;
    }

    tryMove(clicked) {  // check validity of current click
        let vacancy = this.getTileIndex(0); // find position of vacant tile
        if (this.isValidMove(clicked, vacancy)) {  // if clicked next to vacant
            this.swapTiles(clicked, vacancy);  // swap
            this.displayCurrentState();   // redraw board
        }
        if (this.isSolved()) {  // if puzzle solved
            this.finish();   // show appropriate messages
        }
    }

    isValidMove(clicked, vacancy) {  // check if clicked tile next to vacant tile
        console.log("Checking move validity. ");
        switch (clicked) {
            case 0: {return [1,4].includes(vacancy);}  // upper left corner
            case 1: {return [0, 2, 5].includes(vacancy);} // just right of top left corner
            case 2: {return  [1, 3, 6].includes(vacancy);} // just left of top right corner
            case 3: {return  [2, 7].includes(vacancy);} // upper right corner
            case 4: {return [0, 5, 8].includes(vacancy);}  // left side second down
            case 5: {return [1, 4, 6, 9].includes(vacancy);} // second row, second from left
            case 6: {return [2, 5, 7, 10].includes(vacancy);} // second row, second from right
            case 7: {return [3, 6, 11].includes(vacancy);} // right side second down
            case 8: {return [4, 9, 12].includes(vacancy);}// left side third down
            case 9: {return [5, 8, 10, 13].includes(vacancy);}// third row, second from left
            case 10: {return [6, 9, 11, 14].includes(vacancy);}// third row, second from right
            case 11: {return [7, 10, 15].includes(vacancy);}// right side third down
            case 12: {return [8, 13].includes(vacancy);} // lower left corner
            case 13: {return [9, 12, 14].includes(vacancy);} // just right of lower left corner
            case 14: {return [10, 13, 15].includes(vacancy);} // just left of lower right corner
            case 15: {return [11, 14].includes(vacancy);} // lower right corner
            default: {console.log("Invalid"); return false;}  // something is FUBAR
         }
    }

    getTileIndex(faceVal) {  //  find out where in the array a tile lives
        let which = 0;
        for (let i = 0; i < 16; i++) {
             if (this.tiles[i].currentPosit === faceVal) {
                which = i;
            }
        }
        return which;
    }

    swapTiles(clicked, vacancy) {  // switch the places of two tiles
        console.log("swapping " + clicked + " and " + vacancy);
        let temp = this.tiles[clicked].currentPosit;
        this.tiles[clicked].currentPosit = this.tiles[vacancy].currentPosit;
        this.tiles[vacancy].currentPosit = temp;
        this.moves++;
        this.displayCurrentState();
    }

    reset() {  // reset the entire game
        console.log("Resetting game.");
        this.initTiles();  // reshuffle
        this.solved = false;  //  reset solved flag
        this.moves = 0;  // set moves back to zero
        document.getElementById("messageArea").innerHTML = "Click on tiles to arrange in numerical order";
        this.displayCurrentState();  // draw the new board
    }

    finish() {  // display solved message and check for high score
        console.log("Congrats.  You finished in " + this.moves + " moves.");
        document.getElementById("messageArea").innerHTML = `Congrats.  You finished in ${this.moves} moves.`;
        this.considerBestScore();

    }

    considerBestScore() {  // is this a high score?
        if (this.moves < this.best) {  // if yes, set the new record and show message
            this.best = this.moves;
            document.getElementById("messageArea").innerHTML += "<br/>Congrats.  You have a new best score.";

        }
        this.displayCurrentState();  // display the board and messages
    }
}
