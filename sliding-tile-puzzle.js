(function() {

    let game = new Game();

    function connectButtons() {
        document.getElementById("topLeft").addEventListener("click", () => game.tryMove(0));
        document.getElementById("top1").addEventListener("click", () => game.tryMove(1));
        document.getElementById("top2").addEventListener("click", () => game.tryMove(2));
        document.getElementById("topRight").addEventListener("click", () => game.tryMove(3));
        document.getElementById("left1").addEventListener("click", () => game.tryMove(4));
        document.getElementById("ctl").addEventListener("click", () => game.tryMove(5));
        document.getElementById("ctr").addEventListener("click", () => game.tryMove(6));
        document.getElementById("right1").addEventListener("click", () => game.tryMove(7));
        document.getElementById("left2").addEventListener("click", () => game.tryMove(8));
        document.getElementById("cbl").addEventListener("click", () => game.tryMove(9));
        document.getElementById("cbr").addEventListener("click", () => game.tryMove(10));
        document.getElementById("right2").addEventListener("click", () => game.tryMove(11));
        document.getElementById("bottomLeft").addEventListener("click", () => game.tryMove(12));
        document.getElementById("bot1").addEventListener("click", () => game.tryMove(13));
        document.getElementById("bot2").addEventListener("click", () => game.tryMove(14));
        document.getElementById("bottomRight").addEventListener("click", () => game.tryMove(15));
        document.getElementById("reset").addEventListener("click", () => game.reset());
    }

    game.reset();
    connectButtons();



    game.displayCurrentState();
    console.log(game.isSolved());

}());