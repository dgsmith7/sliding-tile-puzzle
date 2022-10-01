class Game {

    tiles;
    solved;
    moves;
    best;

    constructor() {
        this.tiles = [];
        this.solved = false;
        this.moves = 0;
        this.best = 9999;
        this.worst = 10000;   ////////
    }

    initTiles() {
        let id = ["topLeft", "top1", "top2", "topRight", "left1", "ctl", "ctr", "right1", "left2", "cbl", "cbr", "right2", "bottomLeft", "bot1", "bot2", "bottomRight"];
        let solvedIndex = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
        // next 2 lines:  shuffle array - //from https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
        let currentValue = [...solvedIndex];
        currentValue.sort(() => Math.random() - 0.5);
        //currentValue = [1, 2, 3, 4, 5 ,6 , 7, 8, 9 ,10, 11, 12, 13, 0, 14, 15]; //test puzzle
        while (this.tiles.length > 0) {
            this.tiles.pop();
        }
        for (let i = 0; i < 16; i++) {
            let t = new Tile(id[i], Number(solvedIndex[i]), currentValue[i]);
            this.tiles.push(t);
        }
    }

    displayCurrentState() {
        this.tiles.forEach(element => {
            element.displayState();
            console.log(element)
        });
        document.getElementById("moves").innerHTML = `Moves<br/>${this.moves}`;
        document.getElementById("best").innerHTML = `Best<br/>${this.best}`;
    }

    isSolved() {
        let solved = true;
            for (let i = 0; i < 16; i ++) {
                if (this.tiles[i].isSolved() === false) {
                    solved = false;
                }
        }
        return solved;
    }

    tryMove(clicked) {
        let vacancy = this.getTileIndex(0);
        if (this.isValidMove(clicked, vacancy)) {
            this.swapTiles(clicked, vacancy);
            this.displayCurrentState();
        }
        if (this.isSolved()) {
            this.finish();
        }
    }

    isValidMove(clicked, vacancy) {
        console.log("Checking move validity. ");
        switch (clicked) {
            case 0: {return [1,4].includes(vacancy);}
            case 1: {return [0, 2, 5].includes(vacancy);}
            case 2: {return  [1, 3, 6].includes(vacancy);}
            case 3: {return  [2, 7].includes(vacancy);}
            case 4: {return [0, 5, 8].includes(vacancy);}
            case 5: {return [1, 4, 6, 9].includes(vacancy);}
            case 6: {return [2, 5, 7, 10].includes(vacancy);}
            case 7: {return [3, 6, 11].includes(vacancy);}
            case 8: {return [4, 9, 12].includes(vacancy);}
            case 9: {return [5, 8, 10, 13].includes(vacancy);}
            case 10: {return [6, 9, 11, 14].includes(vacancy);}
            case 11: {return [7, 10, 15].includes(vacancy);}
            case 12: {return [8, 13].includes(vacancy);}
            case 13: {return [9, 12, 14].includes(vacancy);}
            case 14: {return [10, 13, 15].includes(vacancy);}
            case 15: {return [11, 14].includes(vacancy);}
            default: {console.log("Invalid"); return false;}
         }
    }

    getTileIndex(faceVal) {
        let which = 0;
        for (let i = 0; i < 16; i++) {
             if (this.tiles[i].currentPosit === faceVal) {
                which = i;
            }
        }
        return which;
    }

    swapTiles(clicked, vacancy) {
        console.log("swapping " + clicked + " and " + vacancy);
        let temp = this.tiles[clicked].currentPosit;
        this.tiles[clicked].currentPosit = this.tiles[vacancy].currentPosit;
        this.tiles[vacancy].currentPosit = temp;
        this.moves++;
        this.displayCurrentState();
    }

    reset() {
        console.log("Resetting game.");
        this.initTiles();
        this.solved = false;
        this.moves = 0;
        document.getElementById("messageArea").innerHTML = "Click on tiles to arrange in numerical order";
        this.displayCurrentState();
    }

    finish() {
        console.log("Congrats.  You finished in " + this.moves + " moves.");
        document.getElementById("messageArea").innerHTML = `Congrats.  You finished in ${this.moves} moves.`;
        this.considerBestScore();

    }

    considerBestScore() {
        if (this.moves < this.best) {
            this.best = this.moves;
            document.getElementById("messageArea").innerHTML += "<br/>Congrats.  You have a new best score.";

        }
        this.displayCurrentState();
    }
}
