class Tile {
    id;
    solvedPosit;
    currentPosit;
    solved;

    constructor(_id, _solvedPosit, _currentPosit) {
        this.id = _id;
        this.solvedPosit = _solvedPosit;
        this.currentPosit = _currentPosit;
        this.solved = (_solvedPosit === _currentPosit);
    }

    isSolved() {
        let comp = this.solvedPosit + 1;
        if (comp === 16) {
            comp = 0;
        }
        return (this.currentPosit === comp);
    }

    displayState() {
        let elem = document.getElementById(this.id);
        elem.innerHTML = this.currentPosit;
        if (elem.innerHTML === '0') {
            elem.setAttribute("style", "visibility:hidden");
        } else {
            elem.setAttribute("style", "visibility: visible");
        }
    }

}
