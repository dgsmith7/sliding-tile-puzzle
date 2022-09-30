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
    }

    initTiles() {
        let id = ["topLeft", "top1", "top2", "topRight", "left1", "ctl", "ctr", "right1", "left2", "cbl", "cbr", "right2", "bottomLeft", "bot1", "bot2", "bottomRight"];
        let solvedIndex = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
        // below:  shuffle array - //from https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
        let currentValue = [...solvedIndex];
        currentValue.sort(() => Math.random() - 0.5);
        while (this.tiles.length > 0) {
            this.tiles.pop();
        }
        for (let i = 0; i < 16; i++) {
            let t = new Tile(id[i], Number(solvedIndex[i]), currentValue[i]);
            this.tiles.push(t);
        }
        this.displayCurrentState();
    }

    displayCurrentState() {
        this.tiles.forEach(element => {
            element.displayState();
            console.log(element)
        });
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
        console.log("You clicked " + clicked);
        console.log("Vacancy at " + vacancy);
        let valid = true;
        switch (clicked) {
            case 0:  {
                valid = [1,4].includes(vacancy);
                break;
            }
            case 1:   {
                valid = [0, 2, 5].includes(vacancy);
                break;
            }
            case 2:   {
                valid = [1, 3, 6].includes(vacancy);
                break;
            }
            case 3:   {
                valid = [2, 7].includes(vacancy);
                break;
            }
            case 4:   {
                valid = [0, 5, 8].includes(vacancy);
                break;
            }
            case 5:   {
                valid = [1, 4, 6, 9].includes(vacancy);
                break;
            }
            case 6:   {
                valid = [2, 5, 7, 10].includes(vacancy);
                break;
            }
            case 7:   {
                valid = [3, 6, 11].includes(vacancy);
                break;
            }
            case 8:   {
                valid = [4, 9, 12].includes(vacancy);
                break;
            }
            case 9:  {
                valid = [5, 8, 10, 13].includes(vacancy);
                break;
            }
            case 10:  {
                valid = [6, 9, 11, 14].includes(vacancy);
                break;
            }
            case 11:  {
                valid = [7, 10, 15].includes(vacancy);
                break;
            }
            case 12:  {
                valid = [8, 13].includes(vacancy);
                break;
            }
            case 13:  {
                valid = [9, 12, 14].includes(vacancy);
                break;
            }
            case 14:  {
                valid = [10, 13, 15].includes(vacancy);
                break;
            }
            case 15: {
                valid = [11, 14].includes(vacancy);
                break;
            }
         }
      // if the clicked tile not next to vacancy valid = false;
        console.log("Valid move? - " + valid);
        return valid;
    }

    getVacancy() {
        let which = 16;
        for (let i = 0; i < 16; i++) {
            console.log(this.tiles[i].currentPosit);
            if (this.tiles[i].currentPosit === 0) {
                which = i + 1;
                console.log("which - " + which);
            }
        }
        return which;
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

    swapTiles(clicked, vacancy) {  // tested
 //       clicked = this.getTileIndex(clicked);
        console.log("swapping " + clicked + " and " + vacancy);
 //       vacancy = this.getTileIndex(vacancy);
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
    }

    finish() {
        console.log("Finished");
        // congrats effect
        // highs score stuff

    }
}
