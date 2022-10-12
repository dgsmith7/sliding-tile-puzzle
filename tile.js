class Tile {  // blueprint for one tile
    id;  // id for this particular tile
    solvedPosit;   // value of current posit when solved
    currentPosit;  // the actual value of current posit
    solved;  // whether or not this particular tile is solved

    constructor(_id, _solvedPosit, _currentPosit) {  // init all properties
        this.id = _id;
        this.solvedPosit = _solvedPosit;
        this.currentPosit = _currentPosit;
        this.solved = (_solvedPosit === _currentPosit);
    }

    isSolved() {  // check to see if this tile is solved
        let comp = this.solvedPosit + 1;
        if (comp === 16) {
            comp = 0;
        }
        return (this.currentPosit === comp);
    }

    displayState() {  // returns the currentPosit of this particular tile
        let elem = document.getElementById(this.id);
        elem.innerHTML = this.currentPosit;
        if (elem.innerHTML === '0') {
            elem.setAttribute("style", "visibility:hidden");
        } else {
            elem.setAttribute("style", "visibility: visible");
        }
    }

}
