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

    setCurrent(_newPosit) {
        this.currentPosit = _newPosit;
    }

    getCurrentPosit() {
        return this.currentPosit;
    }

    isSolved() {
        return (this.currentPosit === this.solvedPosit);
    }

    displayState() {
        let elem = document.getElementById(this.id);
        elem.innerHTML = this.currentPosit;
        if (elem.innerHTML == '0') {
            elem.setAttribute("style", "visibility:hidden");
        } else {
            elem.setAttribute("style", "visibility: visible");
        }
    }

}
