function gameBoard() {
    let gameBoardArr = [[],[],[]];
    let player = "X";
    let round = 0;
    let winner;
    const insertPlayerInput = function(posArr) {
        if (round >= 4) {
            winner = checkWinner();
            if (winner !== undefined) {
                console.log(winner, " is the winner !");
                return false;
            }
        }
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
    };
    const displayGameBoard = () => {
        for (let i = 0; i < gameBoardArr.length; i++) {
            console.log(gameBoardArr[i][0],gameBoardArr[i][1],gameBoardArr[i][2]);
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
            let pos1 = parseInt(prompt(getWhoPlay() + " pos 1 : "));
            let pos2 = parseInt(prompt(getWhoPlay() + " pos 2 : "));
            insertPlayerInput([pos1, pos2]);
            displayGameBoard();
            if (winner !== undefined) {
                console.log("END!");
                return false;
            }
        }
    }
    return { insertPlayerInput, displayGameBoard, getWhoPlay, play};
}
const game = gameBoard();
game.play();