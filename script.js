function gameBoard() {
    let gameBoardArr = [[],[],[]];
    let player = "X";
    let round = 0;
    let winner;
    let endOrNot;
    const insertPlayerInput = function(posArr) {
        if (gameBoardArr[posArr[0]][posArr[1]] === undefined) {
            gameBoardArr[posArr[0]][posArr[1]] = player;
            round++;
        } else {
            return false;
        }
        if (player === "X") {
            player = "O";
        } else {
            player = "X";
        }
        winner = checkWinner();
        if (winner !== undefined) {
            console.log(winner, " is the winner !");
            return "END";
        }
    };
    const displayGameBoard = () => {
        for (let i = 0; i < gameBoardArr.length; i++) {
            console.log(gameBoardArr[i][0], '|',gameBoardArr[i][1],'|',gameBoardArr[i][2]);
        }
    };
    const checkLine = (index) => { return (gameBoardArr[index][0] === gameBoardArr[index][1]) && (gameBoardArr[index][0] === gameBoardArr[index][2])};
    const checkDiag1 = () => { return (gameBoardArr[0][0] === gameBoardArr[1][1]) && (gameBoardArr[0][0] === gameBoardArr[2][2])};
    const checkDiag2 = () => { return (gameBoardArr[0][2] === gameBoardArr[1][1]) && (gameBoardArr[0][2] === gameBoardArr[2][0])};
    const checkWinner = function() {
        if (checkDiag1()) {
            return gameBoardArr[0][0];
        }
        if (checkDiag2()) {
            return gameBoardArr[2][0];
        }
        if (checkLine(0)) {
            return gameBoardArr[0][0];
        }
        if (checkLine(1)) {
            return gameBoardArr[1][0];
        }
        if (checkLine(2)) {
            return gameBoardArr[2][0];
        }
    };
    const getWhoPlay = () => { return player; };
    const play = function() {
        for (let i = 0; i<10 ; i++) {
            do {
                let pos1 = parseInt(prompt(getWhoPlay() + " pos 1 : "));
                let pos2 = parseInt(prompt(getWhoPlay() + " pos 2 : "));
                endOrNot = insertPlayerInput([pos1, pos2]);
            } while (endOrNot === false);
            if (endOrNot === "END") {
                console.log("END!");
                break;
            }
            displayGameBoard();

        }
    }
    return { insertPlayerInput, displayGameBoard, getWhoPlay, play};
}
const game = gameBoard();
game.play();