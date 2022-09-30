class Game {

    tiles;
    solved;
    moves;

    constructor() {
        this.tiles = [];
        this.solved = false;
        this.moves = 0;
    }

    initTiles() {
        let id = ["topLeft", "top1", "top2", "topRight", "left1", "ctl", "ctr", "right1", "left2", "cbl", "cbr", "right2", "bottomLeft", "bot1", "bot2", "bottomRight"];
        let solvedIndex = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,0];
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
        console.log("You clicked " + clicked);
        let vacancy = this.getVacancy();
        let which = this.determineLocation(clicked);
        if (this.isValidMove(which)) {
            this.swapTiles(which, vacancy);
            this.displayCurrentState();
        }
        if (this.isSolved()) {
            this.finish();
        }
    }

    isValidMove(clicked, vacancy) {
        let valid = true;
      // if the clicked tile not next to vacancy valid = false;
        return valid;
    }

    getVacancy() {
        let which = 16;
        for (let i = 0; i < 16; i++) {
            if (this.tiles[i].currentPosit === 0) {
                which = i;
            }
        }
        return which;
    }

    determineLocation(clicked) {
        let which = clicked;
        for (let i = 0; i < 16; i++) {
            if (this.tiles[i].currentPosit === clicked) {
                which = i;
            }
        }
        return which;
    }

    swapTiles(clicked, vacancy) {
        let temp = this.tiles[clicked].currentPosit;
        this.tiles[clicked].currentPosit = this.tiles[vacancy].currentPosit;
        this.tiles[vacancy].currentPosit = temp;
        this.moves++;
    }

    reset() {
        this.initTiles();
        this.solved = false;
        this.moves = 0;
    }

    finish() {
        // congrats effect
        // highs score stuff

    }
}
