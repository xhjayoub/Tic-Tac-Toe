function gameBoard() {
    let gameBoardArr = [[],[],[]];
    let player = "X";
    const insertPlayerInput = function(posArr) {
        if (gameBoardArr[posArr[0]][posArr[1]] === undefined) {
            gameBoardArr[posArr[0]][posArr[1]] = player;
        } else {
            return false;
        }
        if (player === "X") {
            player = "O";
        } else {
            player = "X";
        }
    };
    const displayGameBoard = () => console.log(gameBoardArr);
    return { insertPlayerInput, displayGameBoard };
}
