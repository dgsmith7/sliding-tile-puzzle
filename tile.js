class Tile {
    id;
    tileType;
    solvedPosit;
    currentPosit;
    solved;

    constructor(_id, _tileType, _solvedPosit, _currentPosit) {
        this.id = _id;
        this.tileType = _tileType;
        this.solvedPosit = _solvedPosit;
        this.currentPosit = _currentPosit;
        this.solved = _solvedPosit == _currentPosit;
    }

    setCurrent(_newPosit) {
        this.currentPosit = _newPosit;
    }

    getCurrentPosit() {
        return this.currentPosit;
    }

    isSolved() {
        return this.currentPosit == this.solvedPosit;
    }
}