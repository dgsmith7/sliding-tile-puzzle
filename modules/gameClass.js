import * as TileClass from 'http://127.0.0.1:8080/sliding-tile-puzzle/modules/tile.js';

class Game {

    tiles;

    constructor() {
        this.tiles = [];
    }

    initTiles() {
        let id = ["topLeft", "top1", "top2", "topRight", "left1", "ctl", "ctr", "right1", "left2", "cbl", "cbr", "right2", "bottomLeft", "bot1", "bot2", "bottomRight"];
        let solvedIndex = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,0];
        // below:  shuffle array - //from https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
        let currentValue = solvedIndex.sort(() => Math.random() - 0.5);
        for (let i = 0; i < 16; i++) {
            let t = new TileClass.Tile(id[i], Number(solvedIndex[i]), currentValue[i]);
            this.tiles.push(t);
        }
    }

    displayTilesToConsole() {
        console.log(this.tiles[0].currentPosit + " " + this.tiles[1].currentPosit + " " + this.tiles[2].currentPosit + " " + this.tiles[3].currentPosit + " ");
        console.log(this.tiles[4].currentPosit + " " + this.tiles[5].currentPosit + " " + this.tiles[6].currentPosit + " " + this.tiles[7].currentPosit + " ");
        console.log(this.tiles[8].currentPosit + " " + this.tiles[9].currentPosit + " " + this.tiles[10].currentPosit + " " + this.tiles[11].currentPosit + " ");
        console.log(this.tiles[12].currentPosit + " " + this.tiles[13].currentPosit + " " + this.tiles[14].currentPosit + " " + this.tiles[15].currentPosit + " ");
    }


}

export {Game};
