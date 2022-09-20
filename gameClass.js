class Game {

    tiles;

    constructor() {
        this.tiles = [];
    }

    initTiles() {
        let id = ["topLeft", "top1", "top2", "topRight", "left1", "ctl", "ctr", "right1", "left2", "cbl", "cbr", "right2", "bottomLeft", "bot1", "bot2", "bottomRight"];
        let solvedIndex = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,0];
        // below:  shuffle array - //from https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
        let currentValue = [...solvedIndex];
        currentValue.sort(() => Math.random() - 0.5);
        for (let i = 0; i < 16; i++) {
            let t = new Tile(id[i], Number(solvedIndex[i]), currentValue[i]);
            this.tiles.push(t);
        }
        console.log(this.tiles);
    }

    displayTilesToConsole() {
        console.log(this.tiles[0].currentPosit + " " + this.tiles[1].currentPosit + " " + this.tiles[2].currentPosit + " " + this.tiles[3].currentPosit + " ");
        console.log(this.tiles[4].currentPosit + " " + this.tiles[5].currentPosit + " " + this.tiles[6].currentPosit + " " + this.tiles[7].currentPosit + " ");
        console.log(this.tiles[8].currentPosit + " " + this.tiles[9].currentPosit + " " + this.tiles[10].currentPosit + " " + this.tiles[11].currentPosit + " ");
        console.log(this.tiles[12].currentPosit + " " + this.tiles[13].currentPosit + " " + this.tiles[14].currentPosit + " " + this.tiles[15].currentPosit + " ");
        console.log(this.tiles[0].id + " " + this.tiles[1].id + " " + this.tiles[2].id + " " + this.tiles[3].id + " ");
        console.log(this.tiles[4].id + " " + this.tiles[5].id + " " + this.tiles[6].id + " " + this.tiles[7].id + " ");
        console.log(this.tiles[8].id + " " + this.tiles[9].id + " " + this.tiles[10].id + " " + this.tiles[11].id + " ");
        console.log(this.tiles[12].id + " " + this.tiles[13].id + " " + this.tiles[14].id + " " + this.tiles[15].id + " ");
    }

    displayCurrentState() {
        this.tiles.forEach(element => {element.displayState()});
        // for (let i = 0; i < 16; i ++) {
        //     this.tiles[i].displayState();
        // }
    }

    isSolved() {
        let solved = true;
            for (let i = 0; i < 16; i ++) {
                if (this.tiles[i].isSolved === false) {
                    solved = false;
                }
        }
        return solved;
    }
}
