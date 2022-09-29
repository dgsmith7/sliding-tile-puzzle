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
        console.log(this.currentPosit, typeof this.currentPosit);
        elem.innerHTML = this.currentPosit;
        this.currentPosit === 0?elem.visibility = "hidden":elem.visibility="visible";
        console.log("Check " + this.id);
    }

}
